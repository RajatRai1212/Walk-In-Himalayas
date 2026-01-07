import Script from 'next/script';

export function AnalyticsPlaceholder() {
  return (
    <Script
      data-domain="{{DOMAIN}}"
      defer
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
