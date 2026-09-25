import type {Metadata} from 'next';
import Link from 'next/link';
import {cases} from '@/lib/data';

export const metadata:Metadata={title:'Porcelain Tile Design Applications & Case Studies',description:'Explore 45 Falcor porcelain tile design applications, material ideas, layout guidance and room visualizations.'};

export default function Cases(){return <><section className="page-hero compact"><div className="shell"><p className="eyebrow">Design applications</p><h1>Porcelain in architectural context.</h1><p>Explore 45 room-specific Falcor design studies across nine porcelain collections, with material, layout and project planning guidance.</p></div></section><section className="section"><div className="shell"><div className="case-index-grid">{cases.map(c=><Link href={`/case-studies/${c.slug}/`} className="study-card" key={c.slug}>{c.hero?<img src={c.hero} alt={c.images[0]?.alt}/>:<div className="study-placeholder">Room visualization pending product reference</div>}<div><p className="eyebrow">{c.product} · {c.sector}</p><h2>{c.title}</h2><p>{c.challenge}</p><span>View study →</span></div></Link>)}</div></div></section></>}
