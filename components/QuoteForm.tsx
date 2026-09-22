'use client';
import {useEffect,useState} from 'react';
import {products} from '@/lib/data';

export default function QuoteForm({product}:{product?:string}){
  const [selectedProduct,setSelectedProduct]=useState(product||'');
  useEffect(()=>{
    if(product) return;
    const fromUrl=new URLSearchParams(window.location.search).get('product');
    if(fromUrl) setSelectedProduct(fromUrl);
  },[product]);
  return <form className="quote-form" name="falcor-quote" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you/">
    <input type="hidden" name="form-name" value="falcor-quote"/>
    <p className="hidden-field"><label>Don’t fill this out: <input name="bot-field"/></label></p>
    <div className="form-grid">
      <label>Name<input required name="name" type="text" autoComplete="name"/></label>
      <label>Company<input name="company" type="text" autoComplete="organization"/></label>
      <label>Email<input required name="email" type="email" autoComplete="email"/></label>
      <label>Phone<input required name="phone" type="tel" autoComplete="tel"/></label>
      <label>Project Type<select name="project-type" defaultValue="Commercial"><option>Commercial</option><option>Residential</option><option>Hospitality</option><option>Multifamily</option><option>Other</option></select></label>
      <label>Product of Interest<select name="product" value={selectedProduct} onChange={e=>setSelectedProduct(e.target.value)}><option value="">Select a product</option>{products.map(p=><option key={p.slug} value={p.name}>{p.name}</option>)}</select></label>
      <label>Approx. Square Footage<input name="square-footage" type="number" min="1"/></label>
      <label>Delivery ZIP / Project Location<input name="zip" autoComplete="postal-code"/></label>
      <label>Project Timeline<input name="timeline" placeholder="e.g. 4-8 weeks"/></label>
    </div>
    <label>Project Details<textarea name="message" rows={5} placeholder="Tell us what you’re sourcing and where it needs to go."/></label>
    <button className="button button-dark" type="submit">Send Project Request</button>
    <p className="form-note">Nationwide delivery available. Free delivery on orders over 3,000 sq. ft.</p>
  </form>
}
