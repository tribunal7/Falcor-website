import type {Metadata} from 'next';
import QuoteForm from '@/components/QuoteForm';
export const metadata:Metadata={title:'Request Porcelain Tile Project Quote',description:'Request Falcor porcelain pricing and nationwide delivery coordination for commercial, trade or residential projects.',alternates:{canonical:'/request-quote/'}};
export default function Quote(){return <><section className="page-hero compact"><div className="shell"><p className="eyebrow">Project pricing</p><h1>Request a Falcor project quote.</h1><p>Current collection pricing is $1.95 per square foot. Tell us your quantity, product and delivery location.</p></div></section><section className="section"><div className="shell narrow"><QuoteForm/></div></section></>}
