'use client';
import {useState} from 'react';

export default function ProductGallery({images,name,size,finish}:{images:readonly string[];name:string;size:string;finish:string}){
  const [selected,setSelected]=useState(0);
  const [open,setOpen]=useState(false);
  if(!images.length) return <div className="main-product-image image-placeholder"><span>Product photography coming soon</span></div>;
  const alt=`${name} ${size} ${finish.toLowerCase()} porcelain tile`;
  return <div className="product-gallery">
    <button className="main-product-image gallery-button" type="button" onClick={()=>setOpen(true)} aria-label={`Enlarge ${name} product image`}><img src={images[selected]} alt={`${alt} view ${selected+1}`}/><span className="zoom-label">View larger</span></button>
    {images.length>1&&<div className="thumb-grid">{images.map((im,i)=><button type="button" key={im} className={i===selected?'thumb active':'thumb'} onClick={()=>setSelected(i)} aria-label={`Show ${name} image ${i+1}`}><img src={im} alt={`${alt} thumbnail ${i+1}`}/></button>)}</div>}
    {open&&<div className="lightbox" role="dialog" aria-modal="true" aria-label={`${name} image viewer`} onClick={()=>setOpen(false)}><button className="lightbox-close" type="button" onClick={()=>setOpen(false)} aria-label="Close image viewer">×</button><img src={images[selected]} alt={`${alt} enlarged`} onClick={e=>e.stopPropagation()}/></div>}
  </div>
}
