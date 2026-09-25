import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {cases,products} from '@/lib/data';

export const dynamicParams = false;
export function generateStaticParams(){return cases.map(c=>({slug:c.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const c=cases.find(x=>x.slug===slug);return {title:c?.seo.title??'Design Application',description:c?.seo.description,alternates:c?{canonical:`/case-studies/${c.slug}/`}:undefined}}
export default async function Study({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const c=cases.find(x=>x.slug===slug);
 if(!c)return notFound();
 const p=products.find(x=>x.slug===c.productSlug)!;
 return <>
 <section className="study-hero"><div className="shell"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/case-studies/">Case Studies</Link><span>/</span><span>{c.title}</span></div><div className="study-heading"><div><p className="eyebrow">{c.product} • {c.sector}</p><h1>{c.seo.heading}</h1><p className="hero-lead">{c.challenge}</p></div><Link className="button button-light" href={`/porcelain-tile/${p.slug}/`}>View {p.name}</Link></div>{c.hero?<div className="study-image"><img src={c.hero} alt={c.images[0]?.alt}/></div>:<p className="visual-note">Room visualization awaits a verified {p.name} product reference.</p>}</div></section>
 {c.images.length>1&&<section className="section"><div className="shell"><div className="study-image"><img src={c.images[1]?.src} alt={c.images[1]?.alt}/></div></div></section>}
 <section className="section"><div className="shell narrow"><p className="eyebrow">Design application · {c.sector}</p>{c.sections.map(s=><div className="study-copy-block" key={s.heading}><h2>{s.heading}</h2><p>{s.text}</p></div>)}</div></section>
 <section className="section stone"><div className="shell specs-layout"><div><p className="eyebrow">Featured material</p><h2>{p.title}</h2><p>Compare product specifications and request current pricing for your project.</p></div><dl className="spec-table"><div><dt>Size</dt><dd>{p.size}</dd></div><div><dt>Finish</dt><dd>{p.finish}</dd></div><div><dt>Thickness</dt><dd>{p.thickness}</dd></div><div><dt>Edge</dt><dd>{p.edge}</dd></div><div><dt>PEI</dt><dd>{p.pei}</dd></div><div><dt>Water Absorption</dt><dd>{p.absorption}</dd></div></dl></div></section>
 <section className="section"><div className="shell narrow"><h2>Questions about this application</h2>{c.faqs.map(f=><div className="study-copy-block" key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}<p className="visual-note">This is an independent design application, not a documented customer installation. Room images are illustrative visualizations; confirm product appearance and suitability with a physical sample.</p><div className="button-row"><Link className="button button-dark" href={`/porcelain-tile/${p.slug}/`}>View Product</Link><Link className="button button-light" href={`/request-quote/?product=${encodeURIComponent(p.name)}`}>Request Project Quote</Link></div></div></section>
 </>
}
