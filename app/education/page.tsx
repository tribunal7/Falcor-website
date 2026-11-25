import EducationActions from '@/components/EducationActions';
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
  { slug: '24x24-vs-24x48-porcelain-tile', image: 'tile-formats-slate', alt: 'Square and rectangular marble-look tiles displayed side by side', title: '24×24 vs. 24×48', action: 'Compare tile layouts' },
  { slug: 'polished-vs-matte-porcelain-tile', image: 'tile-finishes-slate', alt: 'Window light reflected in polished tile beside a matte sample', title: 'Polished vs. matte', action: 'Compare finishes' },
  { slug: 'how-much-porcelain-tile-to-order', image: 'measure-room-slate', alt: 'Floor plan, tape measure, and porcelain sample', title: 'How much tile to order', action: 'Calculate full cartons' },
];

export default function Page() {
  return <div className={styles.page}>
    <section className={styles.hero}>
      <div><h1>Porcelain tile planning guides</h1><p>Compare sizes, see finishes in real light, and plan your order.</p></div>
      <img src="/education/charcoal-living-room.webp" alt="Sunlight crossing a white marble-look porcelain floor in a Florida-style living room" width="1672" height="941" fetchPriority="high" />
    </section>
    <div className={styles.body}>
      <h2 className={styles.rule}>Explore the guides</h2>
      <div className={styles.cards}>{guides.map(guide =>
        <a key={guide.slug} href={'/education/'+guide.slug+'/'}><img src={'/education/'+guide.image+'.webp'} alt={guide.alt} width="312" height="222" />
          <h3>{guide.title}</h3><span>{guide.action} →</span>
        </a>
      )}</div>
      <section className={styles.compare}>
        {[['charcoal-square-layout','24×24'],['charcoal-rectangle-layout','24×48']].map(([image,size]) =>
          <figure key={image}><img src={'/education/'+image+'.webp'} alt={'Overhead view of the furnished living and dining room with a '+size+' tile layout'} width="887" height="887" loading="lazy" /><figcaption>{size}</figcaption></figure>
        )}
        <div><h2><a href={'/education/'+guides[0].slug+'/'}>See how size changes a room</a></h2><p>Follow the grout lines from the doorway.</p></div>
      </section>
      <h2 className={styles.rule}>Tile details, up close</h2>
      <div className={styles.details}>
        <article><img src="/education/rectified-edge-slate.webp" alt="Close-up of a straight porcelain tile edge" width="464" height="212" loading="lazy"/><details><summary><h3>What rectified edges mean</h3></summary><p>Rectified tile has mechanically finished edges for more consistent sizing. Ask your installer to confirm the grout-joint width for your tile and layout.</p><a className="education-backlink" href="/education/what-is-rectified-porcelain-tile/">Read the full guide →</a></details></article>
        <article><img src="/education/lobby-floor-slate.webp" alt="Porcelain floor in a commercial lobby" width="482" height="212" loading="lazy"/><details><summary><h3>Understanding PEI ratings</h3></summary><p>PEI ratings describe surface abrasion resistance for glazed tile. Check the rating for the exact finish against the foot traffic you expect.</p><a className="education-backlink" href="/education/pei-rating-commercial-porcelain-tile/">Read the full guide →</a></details></article>
      </div>
      <h2 className={styles.rule}>More porcelain tile guides</h2>
      <div className={styles.cards}>
        <a href="/education/grout-color-white-marble-look-tile/"><img src="/education/grout-color-white-marble-look-tile.png" alt="" loading="lazy" width="312" height="222" /><h3>What color grout goes with white marble-look porcelain tile?</h3></a>
        <a href="/education/48x48-porcelain-tile-layout/"><img src="/education/48x48-porcelain-tile-layout.webp" alt="" loading="lazy" width="312" height="222" /><h3>48×48 porcelain tile: how to plan a large-format floor</h3></a>
        <a href="/education/choose-marble-look-porcelain-tile/"><img src="/education/choose-marble-look-porcelain-tile.webp" alt="" loading="lazy" width="312" height="222" /><h3>How to choose marble-look porcelain tile: veining, shade, and repeat</h3></a>
        <a href="/education/porcelain-tile-pallet-delivery/"><img src="/education/porcelain-tile-pallet-delivery.webp" alt="" loading="lazy" width="312" height="222" /><h3>Porcelain tile delivery: what to check before your pallet arrives</h3></a>
        <a href="/education/porcelain-tile-florida-condos/"><img src="/education/porcelain-tile-florida-condos.webp" alt="" loading="lazy" width="312" height="222" /><h3>Porcelain tile for Florida condos: what to confirm before you order</h3></a>
      </div>
    </div>
    <section className={styles.cta}><h2>Planning a project?</h2><EducationActions compact /></section>
  </div>;
}
