import EducationActions from '@/components/EducationActions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "absolute": "What Is Rectified Porcelain Tile? | Falcor Surfaces"
  },
  "description": "See how rectified edges affect grout lines and layout. Learn what to check on a sample and which joint details to settle with your installer.",
  "alternates": {
    "canonical": "/education/what-is-rectified-porcelain-tile/"
  }
};

export default function Page() {
  return (
    <article className="section falcor-guide">
      <div className="shell narrow">
        <nav aria-label="Breadcrumb"><a href="/education/">Porcelain tile planning guides</a></nav>
        <h1>What is rectified porcelain tile? A close look at edges and grout lines</h1>
        <p>Rectified porcelain has edges that are mechanically finished after firing to bring the pieces to more consistent dimensions. You see the benefit where several corners meet. In a straight layout, the joint can read as a continuous line from one row into the next.</p>
        <figure><img src="/education/what-is-rectified-porcelain-tile.webp" alt="Close-up of straight white porcelain edges against a dark surface."/><figcaption>Look at the vertical edge and the small bevel where the face meets it.</figcaption></figure>
        <h2>Read the edge as well as the face</h2>
        <p>Place two loose samples on a flat surface with a spacer between them. Look straight down, then lower your eye to the edge. A slight bevel can make the opening at the face look wider than the distance between the tile bodies. This is worth seeing in person if you chose rectified tile for a fine, quiet joint.</p>
        <h2>Can rectified tile be laid without grout?</h2>
        <p>Plan for grout joints. The edge treatment controls one part of the layout. The actual size variation among delivered pieces, the tile’s shape, the pattern, and the manufacturer’s instructions all matter when the installer sets the joint width. A sample from a display cannot establish one universal spacing for the whole order.</p>
        <h2>Approve a corner before the room</h2>
        <p>Ask your installer to dry-lay several pieces from the delivered cartons and show you a four-corner intersection in the proposed pattern. View it under the light that crosses the finished floor. Then compare two grout colors at that intersection. Color can change how prominent a line looks even when the spacer stays the same.</p>
        <p>For a rectangular format, <a href="/education/24x24-vs-24x48-porcelain-tile/">compare 24×24 and 24×48 layouts</a> before choosing the starting line. For the color decision, see <a href="/education/grout-color-white-marble-look-tile/">choosing grout for white marble-look tile</a>.</p>
      <EducationActions /></div>
    </article>
  );
}
