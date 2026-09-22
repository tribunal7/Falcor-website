import Link from 'next/link';

const links = [
  ['Porcelain Tile', '/porcelain-tile/'],
  ['Case Studies', '/case-studies/'],
  ['Architects & Trade', '/architects-builders/'],
  ['Education', '/education/'],
  ['Delivery', '/delivery/'],
  ['About', '/about/'],
  ['Contact', '/contact/'],
] as const;

export default function Header(){
  return <>
    <div className="topbar"><div className="shell topbar-inner"><span>Premium Porcelain • $1.95/Sq. Ft.</span><span>Nationwide Delivery • Free on Orders Over 3,000 Sq. Ft.</span></div></div>
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link href="/" className="logo-link" aria-label="Falcor Surfaces home"><img src="/brand/falcor-logo.png" alt="Falcor Surfaces" className="logo"/></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
        <Link className="nav-cta" href="/request-quote/">Request a Quote</Link>
        <details className="mobile-menu">
          <summary aria-label="Open menu">Menu</summary>
          <nav aria-label="Mobile navigation">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}<Link className="mobile-menu-cta" href="/request-quote/">Request a Quote</Link></nav>
        </details>
      </div>
    </header>
    <div className="mobile-actions" aria-label="Quick contact actions"><Link href="/contact/">Contact to Order</Link><Link href="/request-quote/">Request Quote</Link></div>
  </>
}
