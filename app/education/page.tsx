import styles from './education.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "absolute": "Porcelain Tile Planning Guides | Falcor Surfaces"
  },
  "description": "Compare porcelain tile sizes and finishes, calculate full cartons, and plan your next flooring project with practical guides from Falcor Surfaces.",
  "alternates": {
    "canonical": "/education/"
  }
};

const guides = [
  { slug: '24x24-vs-24x48-porcelain-tile', image: 'tile-formats', alt: 'Square and rectangular marble-look tiles displayed side by side', title: '24×24 vs. 24×48', action: 'Compare tile layouts' },
  { slug: 'polished-vs-matte-porcelain-tile', image: 'tile-finishes', alt: 'Window light reflected in polished tile beside a matte sample', title: 'Polished vs. matte', action: 'Compare finishes' },
  { slug: 'how-much-porcelain-tile-to-order', image: 'measure-room', alt: 'Floor plan, tape measure, and porcelain sample', title: 'How much tile to order', action: 'Calculate full cartons' },
];

export default function Page() {
  return <div className={styles.page}>
    <section className={styles.hero}>
      <div><h1>Porcelain tile planning guides</h1><p>Compare sizes, see finishes in real light, and plan your order.</p></div>
      <img src="/education/living-room.webp" alt="Sunlight crossing a cream porcelain floor in a Florida-style living room" width="652" height="352" />
    </section>
    <div className={styles.body}>
      <h2 className={styles.rule}>Explore the guides</h2>
      <div className={styles.cards}>{guides.map(guide =>
        <a key={guide.slug} href={'/education/'+guide.slug+'/'}><img src={'/education/'+guide.image+'.webp'} alt={guide.alt} width="312" height="222" />
          <h3>{guide.title}</h3><span>{guide.action} →</span>
        </a>
      )}</div>
      <section className={styles.compare}>
        {[['square-layout','24×24'],['rectangle-layout','24×48']].map(([image,size]) =>
          <figure key={image}><img src={'/education/'+image+'.webp'} alt={'Overhead room illustration with a '+size+' tile layout'} width="297" height="246" loading="lazy" /><figcaption>{size}</figcaption></figure>
        )}
        <div><h2>See how size changes a room</h2><p>Follow the grout lines from the doorway. In a 12-by-16-foot room, laying a 48-inch tile along the long wall cuts the number of interior joints in that direction from seven to three in a nominal straight grid.</p><a href={'/education/'+guides[0].slug+'/'}>Explore the layout example →</a></div>
      </section>
      <h2 className={styles.rule}>Tile details, up close</h2>
      <div className={styles.details}>
        <article><img src="/education/rectified-edge.webp" alt="Close-up of a straight porcelain tile edge" width="464" height="212" loading="lazy"/><h3>What rectified edges mean</h3><p>Rectified tile has mechanically finished edges for more consistent sizing. Ask your installer to confirm the grout-joint width for your tile and layout.</p></article>
        <article><img src="/education/lobby-floor.webp" alt="Porcelain floor in a commercial lobby" width="482" height="212" loading="lazy"/><h3>Understanding PEI ratings</h3><p>PEI ratings describe surface abrasion resistance for glazed tile. Check the rating for the exact finish against the foot traffic you expect.</p></article>
      </div>
    </div>
    <section className={styles.cta}><h2>Planning a project?</h2><a href="tel:+17542239107">Check stock</a><a href="/request-quote/">Request a Quote</a></section>
  </div>;
}
