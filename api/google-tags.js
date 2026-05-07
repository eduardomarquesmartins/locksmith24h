import crypto from 'node:crypto';

const DEFAULT_TAGS = {
  enabled: false,
  gtmId: '',
  googleAdsId: '',
  ga4Id: '',
};

const cleanId = (value = '') => String(value).trim().toUpperCase();

const sanitizeTags = (body = {}) => ({
  enabled: Boolean(body.enabled),
  gtmId: cleanId(body.gtmId),
  googleAdsId: cleanId(body.googleAdsId),
  ga4Id: cleanId(body.ga4Id),
});

const validateTags = (tags) => {
  if (tags.gtmId && !/^GTM-[A-Z0-9]+$/.test(tags.gtmId)) {
    return 'GTM invalido. Use o formato GTM-XXXXXXX.';
  }

  if (tags.googleAdsId && !/^AW-[0-9]+$/.test(tags.googleAdsId)) {
    return 'Google Ads invalido. Use o formato AW-00000000000.';
  }

  if (tags.ga4Id && !/^G-[A-Z0-9]+$/.test(tags.ga4Id)) {
    return 'GA4 invalido. Use o formato G-XXXXXXXXXX.';
  }

  return null;
};

const getEnv = () => ({
  firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
  firebaseClientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  firebasePrivateKey: process.env.FIREBASE_PRIVATE_KEY,
  adminPassword: process.env.ADMIN_PASSWORD,
  siteId: process.env.SITE_ID || 'automotive',
});

const base64Url = (value) => Buffer.from(value)
  .toString('base64')
  .replace(/=/g, '')
  .replace(/\+/g, '-')
  .replace(/\//g, '_');

const getAccessToken = async () => {
  const { firebaseProjectId, firebaseClientEmail, firebasePrivateKey } = getEnv();

  if (!firebaseProjectId || !firebaseClientEmail || !firebasePrivateKey) {
    throw new Error('Firebase nao configurado.');
  }

  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = base64Url(JSON.stringify({
    iss: firebaseClientEmail,
    scope: 'https://www.googleapis.com/auth/datastore',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  }));
  const unsignedToken = `${header}.${claim}`;
  const signature = crypto
    .createSign('RSA-SHA256')
    .update(unsignedToken)
    .sign(firebasePrivateKey.replace(/\\n/g, '\n'), 'base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${unsignedToken}.${signature}`,
    }),
  });

  if (!response.ok) {
    throw new Error('Nao foi possivel autenticar no Firebase.');
  }

  const data = await response.json();
  return data.access_token;
};

const getDocumentUrl = (siteId) => {
  const { firebaseProjectId } = getEnv();
  return `https://firestore.googleapis.com/v1/projects/${firebaseProjectId}/databases/(default)/documents/site_settings/${encodeURIComponent(siteId)}`;
};

const tagsToFirestoreFields = (tags) => ({
  googleTags: {
    mapValue: {
      fields: {
        enabled: { booleanValue: tags.enabled },
        gtmId: { stringValue: tags.gtmId },
        googleAdsId: { stringValue: tags.googleAdsId },
        ga4Id: { stringValue: tags.ga4Id },
      },
    },
  },
  updatedAt: { timestampValue: new Date().toISOString() },
});

const tagsFromFirestoreFields = (fields = {}) => {
  const tagFields = fields.googleTags?.mapValue?.fields || {};

  return {
    enabled: tagFields.enabled?.booleanValue ?? DEFAULT_TAGS.enabled,
    gtmId: tagFields.gtmId?.stringValue || DEFAULT_TAGS.gtmId,
    googleAdsId: tagFields.googleAdsId?.stringValue || DEFAULT_TAGS.googleAdsId,
    ga4Id: tagFields.ga4Id?.stringValue || DEFAULT_TAGS.ga4Id,
  };
};

export default async function handler(req, res) {
  const env = getEnv();

  if (req.method === 'GET') {
    try {
      const token = await getAccessToken();
      const response = await fetch(getDocumentUrl(env.siteId), {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 404) {
        return res.status(200).json(DEFAULT_TAGS);
      }

      if (!response.ok) {
        throw new Error('Erro ao ler Firebase.');
      }

      const data = await response.json();
      return res.status(200).json(tagsFromFirestoreFields(data.fields));
    } catch {
      return res.status(200).json(DEFAULT_TAGS);
    }
  }

  if (req.method === 'POST') {
    if (!env.adminPassword) {
      return res.status(500).json({ error: 'ADMIN_PASSWORD nao configurada no Vercel.' });
    }

    if (req.headers['x-admin-password'] !== env.adminPassword) {
      return res.status(401).json({ error: 'Senha de administrador invalida.' });
    }

    const tags = sanitizeTags(req.body);
    const validationError = validateTags(tags);

    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    try {
      const token = await getAccessToken();
      const response = await fetch(`${getDocumentUrl(env.siteId)}?updateMask.fieldPaths=googleTags&updateMask.fieldPaths=updatedAt`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fields: tagsToFirestoreFields(tags) }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      return res.status(200).json(tags);
    } catch {
      return res.status(500).json({ error: 'Nao foi possivel salvar no Firebase.' });
    }
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({ error: 'Metodo nao permitido.' });
}
