export function trackEvent(name: 'phone_click' | 'quote_click' | 'generate_lead') {
  const analytics = window as Window & {gtag?: (command: string, event: string, params: object) => void};
  analytics.gtag?.('event', name, {page_path: window.location.pathname, transport_type: 'beacon'});
}
