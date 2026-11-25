import EducationActions from '@/components/EducationActions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "absolute": "How Much Porcelain Tile Do I Need? | Falcor Surfaces"
  },
  "description": "Calculate how much porcelain tile to order. Follow a room measurement example, add a layout allowance, and round square feet up to full cartons.",
  "alternates": {
    "canonical": "/education/how-much-porcelain-tile-to-order/"
  }
};

export default function Page() {
  return (
    <article className="section falcor-guide"><div className="shell narrow">
<nav aria-label="Breadcrumb"><a href="/education/">Porcelain tile planning guides</a></nav>
<h1>How much porcelain tile should I order?</h1>
<p>Start with the area the installer will tile, add the allowance agreed for your layout, then round up to whole cartons. The box coverage on the exact product is the number that converts a floor plan into an order.</p>
<h2>Measure each tiled area once</h2>
<p>Sketch the room and divide an L-shaped floor into two rectangles that meet without overlapping. Multiply length by width for each rectangle, then add the results. A 12-by-16-foot room plus a 4-by-8-foot adjoining entry totals 224 square feet. Confirm whether flooring continues under cabinetry before subtracting any footprint.</p>
<h2>Convert square feet to cartons</h2>
<table><tr><th>Step</th><th>Worked example</th></tr><tr><td>Measured area</td><td>192 + 32 = 224 sq. ft.</td></tr><tr><td>Illustrative 10% allowance</td><td>224 × 1.10 = 246.4 sq. ft.</td></tr><tr><td>Example carton coverage</td><td>246.4 ÷ 16 = 15.4 cartons</td></tr><tr><td>Order whole cartons</td><td>16 cartons × 16 = 256 sq. ft.</td></tr></table>
<p>The order includes 32 square feet above the measured floor. Of that, 22.4 square feet comes from the assumed allowance and 9.6 from rounding up. Cuts may consume some or all of that material. If the owner needs an unopened carton for future repairs, include it explicitly in the order.</p>
<h2>When the allowance deserves a second look</h2>
<p>A straight run in an open room and a diagonal layout through several doorways can use different amounts of the same tile. Ask the installer which offcuts can be reused. On a veined design, ask whether matching adjacent faces rules out rotating a cut piece. Calculate each size or finish separately when a project uses more than one.</p>
<p>For a collection such as <a href="/porcelain-tile/calacatta-vena/">Calacatta Vena porcelain tile</a>, specify the size you selected so Falcor can confirm carton coverage, available quantity, and lot information. Send the measured area, allowance, delivery ZIP code, and target date with your request. <a href="/request-quote/">Request a porcelain tile quote</a>.</p>
    <EducationActions quoteFirst /></div></article>
  );
}
