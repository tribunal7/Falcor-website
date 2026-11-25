import EducationActions from '@/components/EducationActions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "absolute": "48×48 Porcelain Tile Layout Guide | Falcor Surfaces"
  },
  "description": "Plan a 48×48 porcelain tile floor around doorways, islands, and perimeter cuts. Compare two starting lines using a worked room example.",
  "alternates": {
    "canonical": "/education/48x48-porcelain-tile-layout/"
  }
};

export default function Page() {
  return (
    <article className="section falcor-guide">
      <div className="shell narrow">
        <nav aria-label="Breadcrumb"><a href="/education/">Porcelain tile planning guides</a></nav>
        <h1>48×48 porcelain tile: how to plan a large-format floor</h1>
        <p>A 48×48 square covers about 16 square feet at nominal dimensions. That large face can look striking across an open floor. The harder decision is where the grid begins. A layout that lands neatly along the living-room wall can leave a thin strip beside a kitchen island.</p>
        <figure><img src="/education/48x48-porcelain-tile-layout.webp" alt="Large cool-gray square porcelain tiles around a light kitchen island."/><figcaption>Check the exposed cuts along the island and at the entrance.</figcaption></figure>
        <h2>Try two starting lines on paper</h2>
        <p>Take a room that measures 14 feet across. In a simplified sketch with four-foot tiles, starting with a full tile at one wall gives three full tiles and a two-foot cut at the far wall. Center a full tile instead and you can get three full tiles with a one-foot cut on each side. A third option uses two full tiles in the middle and three-foot cuts at both sides. All three fill the same width. Draw the doorway onto each sketch and see which cuts you would actually notice.</p>
        <p>These are nominal layout examples. Before cutting, the installer should recalculate with measured tile dimensions, planned joints, and perimeter clearances.</p>
        <h2>Walk the route from the entry to the kitchen</h2>
        <p>Mark the island footprint and the cabinet toe kicks on the plan. Follow one joint from the front door through the room. Pay attention to the exposed end of the island, where a short return cut can be visible from several directions. Take a photo of the taped layout from your normal standing position.</p>
        <h2>What to send for a quote</h2>
        <p>Include a dimensioned plan, the rooms that connect, the floor level, and any tight access turns. Ask the installer to review substrate preparation and handling for the specific tile before finalizing the order. Once the layout is agreed, <a href="/education/how-much-porcelain-tile-to-order/">calculate the number of full cartons</a> using the selected product’s carton coverage, then <a href="/request-quote/">request a project quote</a>.</p>
      <EducationActions /></div>
    </article>
  );
}
