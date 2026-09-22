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
      <label>First Name
        <input required name="first-name" type="text" autoComplete="given-name"/>
      </label>

      <label>Last Name
        <input required name="last-name" type="text" autoComplete="family-name"/>
      </label>

      <label>Company <span className="optional-label">(Optional)</span>
        <input name="company" type="text" autoComplete="organization"/>
      </label>

      <label>Email
        <input required name="email" type="email" autoComplete="email"/>
      </label>

      <label>Phone Number
        <input
          required
          name="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          pattern="[0-9]{10}"
          minLength={10}
          maxLength={10}
          title="Enter a 10-digit phone number using numbers only."
          placeholder="5613134217"
        />
      </label>

      <label>Project Type
        <select required name="project-type" defaultValue="">
          <option value="" disabled>Select project type</option>
          <option>Commercial</option>
          <option>Residential</option>
          <option>Hospitality</option>
          <option>Multifamily</option>
          <option>Other</option>
        </select>
      </label>

      <label>Product of Interest
        <select required name="product" value={selectedProduct} onChange={e=>setSelectedProduct(e.target.value)}>
          <option value="">Select a product</option>
          {products.map(p=><option key={p.slug} value={p.name}>{p.name}</option>)}
        </select>
      </label>

      <label>Approx. Square Footage
        <input required name="square-footage" type="number" min="1" step="1"/>
      </label>

      <label>ZIP Code
        <input
          required
          name="zip"
          type="text"
          inputMode="numeric"
          autoComplete="postal-code"
          pattern="[0-9]{5}"
          minLength={5}
          maxLength={5}
          title="Enter a 5-digit ZIP code."
          placeholder="33427"
        />
      </label>

      <label>Project Timeline
        <select required name="timeline" defaultValue="">
          <option value="" disabled>Select project timeline</option>
          <option value="1-2 weeks">1–2 weeks</option>
          <option value="3-4 weeks">3–4 weeks</option>
          <option value="5-10 weeks">5–10 weeks</option>
          <option value="longer than 10 weeks">Longer than 10 weeks</option>
        </select>
      </label>
    </div>

    <label>Project Details <span className="optional-label">(Optional)</span>
      <textarea name="message" rows={5} placeholder="Tell us what you’re sourcing and where it needs to go."/>
    </label>

    <button className="button button-dark" type="submit">Send Project Request</button>
    <p className="form-note">Nationwide delivery available. Free delivery on orders over 3,000 sq. ft.</p>
  </form>
}
