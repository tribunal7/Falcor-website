'use client';
import {useMemo,useState} from 'react';
import ProductCard from './ProductCard';
import {products} from '@/lib/data';

export default function ProductCollection(){
  const [size,setSize]=useState('All');
  const [finish,setFinish]=useState('All');
  const sizes=['All','24x24','24x48','32x32','40x40'];
  const finishes=['All','Polished','Matte'];
  const filtered=useMemo(()=>products.filter(p=>(size==='All'||p.size===size)&&(finish==='All'||p.finish===finish)),[size,finish]);
  return <>
    <div className="filter-panel">
      <div><span className="filter-label">Size</span><div className="filter-buttons">{sizes.map(v=><button key={v} className={size===v?'active':''} onClick={()=>setSize(v)} type="button">{v}</button>)}</div></div>
      <div><span className="filter-label">Finish</span><div className="filter-buttons">{finishes.map(v=><button key={v} className={finish===v?'active':''} onClick={()=>setFinish(v)} type="button">{v}</button>)}</div></div>
      <span className="result-count">{filtered.length} product{filtered.length===1?'':'s'}</span>
    </div>
    <div className="product-grid">{filtered.map(p=><ProductCard key={p.slug} product={p}/>)}</div>
  </>
}
