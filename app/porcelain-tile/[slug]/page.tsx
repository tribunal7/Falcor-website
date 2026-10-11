import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {products} from '@/lib/data';
import ProductDetails from '@/components/ProductDetails';
export const dynamicParams = false;
export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=products.find(x=>x.slug===slug);return p?{title:p.title,description:p.description.slice(0,158),alternates:{canonical:`/porcelain-tile/${p.slug}/`}}:{title:'Product'}}
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const product=products.find(p=>p.slug===slug);if(!product)return notFound();return <ProductDetails product={product}/>}
