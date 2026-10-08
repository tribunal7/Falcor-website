'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

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
  const menuRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (!menu.open || !(event.target instanceof Node) || menu.contains(event.target)) return;
      // The first outside tap dismisses the menu without activating the page beneath it.
      event.preventDefault();
      event.stopPropagation();
      closeMenu();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menu.open) {
        event.preventDefault();
        closeMenu();
        menu.querySelector('summary')?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1051px)');
    const handleResize = () => {
      if (desktop.matches) closeMenu();
    };
    document.addEventListener('click', handleOutsideClick, true);
    document.addEventListener('keydown', handleKeyDown);
    desktop.addEventListener('change', handleResize);
    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
      document.removeEventListener('keydown', handleKeyDown);
      desktop.removeEventListener('change', handleResize);
    };
  }, []);

  return <>
    <div className="topbar"><div className="shell topbar-inner"><span>Premium Porcelain • $1.95/Sq. Ft.</span><span>Nationwide Delivery • Free on Orders Over 3,000 Sq. Ft.</span></div></div>
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link href="/" className="logo-link" aria-label="Falcor Surfaces home"><img src="/brand/falcor-logo.png" alt="Falcor Surfaces" className="logo"/></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
        <Link className="nav-cta" href="/request-quote/">Request a Quote</Link>
        <details className="mobile-menu" ref={menuRef}>
          <summary aria-label="Toggle menu">Menu</summary>
          <nav aria-label="Mobile navigation" onClick={(event) => {
            if (event.target instanceof Element && event.target.closest('a')) closeMenu();
          }}>{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}<Link className="mobile-menu-cta" href="/request-quote/">Request a Quote</Link></nav>
        </details>
      </div>
    </header>
    <div className="mobile-actions" aria-label="Quick contact actions"><Link href="/contact/">Contact to Order</Link><Link href="/request-quote/">Request Quote</Link></div>
  </>
}

