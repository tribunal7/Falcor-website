import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {products} from '@/lib/data';
import ProductCard from '@/components/ProductCard';

const categories = {
 '24x48': {label:'24x48 Porcelain Tile',title:'24x48 Porcelain Tile | Large Format Floor & Wall Tile',description:'Explore 24x48 porcelain tile from Falcor Surfaces. Compare polished and matte large-format tile designs, view available products and request project pricing.',intro:'Explore large-format 24x48 porcelain tile for spacious floors and suitable wall applications. Compare available finishes, review each product’s specifications and request pricing for your project.'},
 '24x24': {label:'24x24 Porcelain Tile',title:'24x24 Porcelain Tile | Porcelain Floor Tile',description:'Shop 24x24 porcelain tile from Falcor Surfaces. Browse available designs and finishes, view product specifications and request project pricing.',intro:'Browse square 24x24 porcelain tiles for residential and commercial interiors. Select a design below to view its stated specifications, finish and pricing.'},
 'polished': {label:'Polished Porcelain Tile',title:'Polished Porcelain Tile | Glossy Floor Tile',description:'Browse polished porcelain tile for bright, reflective interiors. Explore sizes and marble-inspired looks from Falcor Surfaces and request a quote.',intro:'Polished porcelain tile offers a reflective finish that helps create a bright, refined interior. Explore available sizes and styles below, and check individual product details before selecting tile for your application.'},
 'matte': {label:'Matte Porcelain Tile',title:'Matte Porcelain Tile | Modern Floor Tile',description:'Explore matte porcelain tile designs with a low-sheen finish from Falcor Surfaces. View available sizes, product specifications and pricing.',intro:'Matte porcelain tile creates a soft, low-sheen look suited to a range of contemporary spaces. Compare the products below and review each tile’s technical details for your installation.'},
 'marble-look': {label:'Marble Look Porcelain Tile',title:'Marble Look Porcelain Tile | Carrara & Calacatta Styles',description:'Explore marble-look porcelain tile in polished and matte finishes. Discover Carrara-inspired and Calacatta-inspired porcelain designs from Falcor Surfaces.',intro:'Get the elegance of marble-inspired surfaces with porcelain tile. Browse designs with natural-looking veining and review sizes, finishes and specifications for each collection.'}
} as const;
type Category = keyof typeof categories;
const matches=(slug:Category)=> products.filter(p=>{
 if(slug==='24x48') return p.size==='24x48'||p.slug==='calacatta-vena';
 if(slug==='24x24') return p.size==='24x24';
 if(slug==='polished') return p.finish.toLowerCase()==='polished';
 if(slug==='matte') return p.finish.toLowerCase()==='matte';
 return /marble|calacatta|carrara|vein/i.test([p.name,p.appearance].join(' '));
});
export const dynamicParams=false;
export function generateStaticParams(){return (Object.keys(categories) as Category[]).map(slug=>({category:slug}))}
export async function generateMetadata({params}:{params:Promise<{category:string}>}):Promise<Metadata>{
 const {category}=await params;if(!(category in categories)) return {title:'Porcelain Tile'};
 const c=categories[category as Category];return {title:c.title,description:c.description,alternates:{canonical:`/porcelain-tile/shop/${category}/`}};
}
export default async function CategoryPage({params}:{params:Promise<{category:string}>}){
 const {category}=await params;if(!(category in categories))notFound();
 const key=category as Category,c=categories[key],items=matches(key);
 return <><section className="page-hero compact"><div className="shell"><p className="eyebrow"><Link href="/porcelain-tile/">Porcelain Tile</Link> / {c.label}</p><h1>{c.label}</h1><p>{c.intro}</p><Link className="text-link" href="/request-quote/">Request Project Pricing →</Link></div></section>
 <section className="section"><div className="shell"><h2>Explore {c.label}</h2><p>Browse {items.length} matching Falcor collection{items.length===1?'':'s'}. Product availability and suitability should be confirmed before ordering.</p><div className="product-grid">{items.map(p=><ProductCard key={p.slug} product={p}/>)}</div><p><Link href="/porcelain-tile/" className="text-link">Browse All Porcelain Tile →</Link></p></div></section></>;
}
