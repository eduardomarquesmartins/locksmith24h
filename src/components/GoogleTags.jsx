import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const DEFAULT_TAGS = {
  enabled: false,
  gtmId: '',
  googleAdsId: '',
  ga4Id: '',
};

const GoogleTags = () => {
  const [tags, setTags] = useState(DEFAULT_TAGS);

  useEffect(() => {
    let active = true;

    fetch('/api/google-tags')
      .then((response) => (response.ok ? response.json() : DEFAULT_TAGS))
      .then((data) => {
        if (active) {
          setTags({ ...DEFAULT_TAGS, ...data });
        }
      })
      .catch(() => {
        if (active) {
          setTags(DEFAULT_TAGS);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  if (!tags.enabled) {
    return null;
  }

  const gtagId = tags.googleAdsId || tags.ga4Id;
  const gtagConfigs = [tags.googleAdsId, tags.ga4Id].filter(Boolean);

  return (
    <Helmet>
      {tags.gtmId && (
        <script>{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${tags.gtmId}');
        `}</script>
      )}
      {gtagId && <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`} />}
      {gtagConfigs.length > 0 && (
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${gtagConfigs.map((id) => `gtag('config', '${id}');`).join('\n')}
        `}</script>
      )}
    </Helmet>
  );
};

export default GoogleTags;
