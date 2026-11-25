'use client';

import {trackEvent} from '@/lib/analytics';

export default function EducationActions({quoteFirst = false, compact = false}) {
  const phone = <a className="button button-light" href="tel:+17542239107" onClick={() => trackEvent('phone_click')}>Call to Check Stock</a>;
  const quote = <a className="button button-dark" href="/request-quote/" onClick={() => trackEvent('quote_click')}>Request a Quote</a>;
  if (compact) return <>{phone}{quote}</>;
  return <section aria-label="Project support">
    <h2>Planning a tile project?</h2>
    <p>Have your tile choice, approximate square footage, and delivery ZIP code handy.</p>
    <div className="button-row">{quoteFirst ? quote : phone}{quoteFirst ? phone : quote}</div>
  </section>;
}
