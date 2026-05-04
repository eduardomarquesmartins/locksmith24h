import React, { useEffect, useMemo, useState } from 'react';
import { Save, ShieldCheck } from 'lucide-react';

const EMPTY_FORM = {
  enabled: true,
  gtmId: '',
  googleAdsId: '',
  ga4Id: '',
};

const AdminPage = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [password, setPassword] = useState(() => sessionStorage.getItem('adminPassword') || '');
  const [status, setStatus] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetch('/api/google-tags')
      .then((response) => (response.ok ? response.json() : EMPTY_FORM))
      .then((data) => setForm({ ...EMPTY_FORM, ...data }))
      .catch(() => setStatus('Configure o Firebase e as variaveis de ambiente para carregar as tags salvas.'));
  }, []);

  const hasConfiguredTag = useMemo(
    () => Boolean(form.gtmId || form.googleAdsId || form.ga4Id),
    [form.gtmId, form.googleAdsId, form.ga4Id]
  );

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value.trim() }));
  };

  const saveTags = async (event) => {
    event.preventDefault();
    setIsSaving(true);
    setStatus('');

    try {
      const response = await fetch('/api/google-tags', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': password,
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || 'Nao foi possivel salvar.');
      }

      sessionStorage.setItem('adminPassword', password);
      setForm({ ...EMPTY_FORM, ...data });
      setStatus('Tags salvas. Elas passam a carregar nas proximas visitas do site.');
    } catch (error) {
      setStatus(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section className="admin-page">
      <div className="admin-shell">
        <div className="admin-heading">
          <ShieldCheck size={34} />
          <div>
            <span>Admin</span>
            <h1>Google Tags</h1>
          </div>
        </div>

        <form className="admin-panel" onSubmit={saveTags}>
          <label className="admin-toggle">
            <input
              type="checkbox"
              checked={form.enabled}
              onChange={(event) => setForm((current) => ({ ...current, enabled: event.target.checked }))}
            />
            <span>Ativar tags no site</span>
          </label>

          <label>
            Senha do administrador
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
            />
          </label>

          <label>
            Google Tag Manager
            <input value={form.gtmId} onChange={(event) => updateField('gtmId', event.target.value)} placeholder="GTM-XXXXXXX" />
          </label>

          <label>
            Google Ads
            <input value={form.googleAdsId} onChange={(event) => updateField('googleAdsId', event.target.value)} placeholder="AW-00000000000" />
          </label>

          <label>
            Google Analytics 4
            <input value={form.ga4Id} onChange={(event) => updateField('ga4Id', event.target.value)} placeholder="G-XXXXXXXXXX" />
          </label>

          <button className="admin-save" type="submit" disabled={isSaving || !password || !hasConfiguredTag}>
            <Save size={18} />
            {isSaving ? 'Salvando...' : 'Salvar tags'}
          </button>

          {status && <p className="admin-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default AdminPage;
