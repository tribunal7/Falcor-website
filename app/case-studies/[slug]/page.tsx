import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {cases,products} from '@/lib/data';

export const dynamicParams = false;
export function generateStaticParams(){return cases.filter(c=>c.status==='complete').map(c=>({slug:c.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const c=cases.find(x=>x.slug===slug&&x.status==='complete');
  return {title:c?.seoTitle||'Falcor Design Case Study',description:c?.metaDescription||c?.challenge,alternates:c?{canonical:`/case-studies/${c.slug}/`}:undefined};
}

export default async function Study({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const c=cases.find(x=>x.slug===slug&&x.status==='complete');
  if(!c)return notFound();
  const p=products.find(x=>x.slug===c.productSlug);
  if(!p)return notFound();
  return <><section className="study-hero"><div className="shell">
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/case-studies/">Case Studies</Link><span>/</span><span>{c.title}</span></div>
    <div className="study-heading"><div><p className="eyebrow">{p.name} • {c.sector}</p><h1>{c.title}</h1><p className="hero-lead">{c.challenge}</p></div><Link className="button button-light" href={`/porcelain-tile/${p.slug}/`}>View {p.name}</Link></div>
    {c.images.length?<div className="case-image-grid">{c.images.map((img,i)=><figure className="study-image" key={img.src}><img src={img.src} alt={img.alt}/>{i===0?null:null}</figure>)}</div>:null}
  </div></section>
  <section className="section"><div className="shell study-copy-grid"><div><p className="eyebrow">Case study</p><h2>The design challenge</h2><p>{c.challenge}</p></div><div>
    <h3>A room-specific material strategy</h3><p>{c.materialStrategy}</p>
    <h3>Layout and furniture coordination</h3><p>{c.response}</p>
    <h3>Why consider {p.name}?</h3><p>{c.why}</p>
    <h3>Product details and project review</h3><p>{c.review}</p>
    <h3>Plan a similar space with Falcor</h3><p>{c.plan}</p>
  </div></div></section>
  <section className="section stone"><div className="shell specs-layout"><div><p className="eyebrow">Featured material</p><h2>{p.title}</h2><p>Falcor source price: <strong>{p.price} per sq. ft.</strong> Confirm current pricing and availability before ordering.</p></div><dl className="spec-table">
    <div><dt>Size</dt><dd>{p.size}</dd></div><div><dt>Finish</dt><dd>{p.finish}</dd></div><div><dt>Thickness</dt><dd>{p.thickness}</dd></div><div><dt>Edge</dt><dd>{p.edge}</dd></div><div><dt>PEI</dt><dd>{p.pei}</dd></div><div><dt>Water Absorption</dt><dd>{p.absorption}</dd></div><div><dt>Shade Variation</dt><dd>{p.shade}</dd></div>
  </dl></div></section>
  <section className="section"><div className="shell narrow"><h2>Project questions</h2><h3>What gives this room its identity?</h3><p>{c.identity}</p><h3>Which tile size and finish are specified?</h3><p>{c.specified}</p><div className="button-row"><Link className="button button-dark" href={`/porcelain-tile/${p.slug}/`}>View Product</Link><Link className="button button-light" href={`/request-quote/?product=${encodeURIComponent(p.name)}`}>Request Project Quote</Link></div></div></section></>
}