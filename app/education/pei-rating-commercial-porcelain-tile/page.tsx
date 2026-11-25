import EducationActions from '@/components/EducationActions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "absolute": "PEI Ratings for Commercial Porcelain Tile | Falcor Surfaces"
  },
  "description": "Understand what a PEI rating measures, how traffic and grit affect tile selection, and what to request for a commercial flooring submittal.",
  "alternates": {
    "canonical": "/education/pei-rating-commercial-porcelain-tile/"
  }
};

export default function Page() {
  return (
    <article className="section falcor-guide">
      <div className="shell narrow">
        <nav aria-label="Breadcrumb"><a href="/education/">Porcelain tile planning guides</a></nav>
        <h1>What is a PEI rating? Choosing glazed porcelain for commercial floors</h1>
        <p>A PEI rating describes the resistance of a glazed tile surface to visible abrasion. It helps a specifier ask whether a finish can hold up to the foot traffic and grit expected in a particular location. Two spaces in the same building can call for different selections.</p>
        <figure><img src="/education/pei-rating-commercial-porcelain-tile.webp" alt="Silver-gray tiled commercial entrance with glazed doors and a dark entry mat."/><figcaption>The entrance and the interior lobby can expose the same tile to different wear.</figcaption></figure>
        <h2>Start at the busiest doorway</h2>
        <p>Imagine a South Florida hotel. At the entrance, guests roll in luggage and carry sand from the sidewalk. Farther inside, a lounge receives less grit and a different pattern of traffic. Put those spaces on separate lines in the finish schedule. Include whether each opens directly outdoors, how often it is cleaned, and where entry mats will sit.</p>
        <h2>Read the number in context</h2>
        <p>For glazed floor tile, the abrasion classes run from lighter to more demanding wear conditions. A supplier may describe a Class IV product as suitable for some commercial traffic. Before specifying it, check the manufacturer’s application guidance for your particular space. If a product sheet omits PEI, ask how the surface was tested and whether the tile is glazed. Avoid carrying a rating across every color or finish in a collection.</p>
        <h2>Build a submittal the project team can use</h2>
        <p>Record the exact collection, color, finish, size, abrasion classification, and intended room. Request the current technical sheet. A wear rating does not establish wet-floor suitability. For a lobby that receives rain, request separate use and slip-resistance information for the selected finish and have the design team review it.</p>
        <p>Explore Falcor’s <a href="/architects-builders/">architect and builder resources</a> or <a href="/education/polished-vs-matte-porcelain-tile/">compare polished and matte finishes</a> when preparing a finish schedule. Include the room names and expected traffic when you <a href="/request-quote/">request a project quote</a>.</p>
      <EducationActions quoteFirst /></div>
    </article>
  );
}
