import type {Metadata} from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {siteUrl} from '@/lib/site';

export const metadata:Metadata={
  title:{default:'Falcor Surfaces | Premium Porcelain Tile at $1.95/Sq. Ft.',template:'%s | Falcor Surfaces'},
  description:'Premium porcelain tile at direct-import pricing for architects, builders, contractors, developers and homeowners. Nationwide delivery available.',
  metadataBase:new URL(siteUrl),
  openGraph:{title:'Falcor Surfaces',description:'Premium porcelain tile at $1.95 per sq. ft. with nationwide delivery.',type:'website'},
  twitter:{card:'summary_large_image'}
};

const organizationSchema={
  '@context':'https://schema.org','@type':'Organization',name:'Falcor Surfaces',url:siteUrl,
  address:{'@type':'PostalAddress',streetAddress:'1489 West Palmetto Park Road',addressLocality:'Boca Raton',addressRegion:'FL',postalCode:'33427',addressCountry:'US'}
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema)}}/><Header/><main>{children}</main><Footer/></body></html>
}
