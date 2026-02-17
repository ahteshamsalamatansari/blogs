'use strict';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined text-primary text-[32px]">menu_book</span>
          <span className="text-2xl font-bold tracking-tighter text-on-surface font-sans">AHTESHAM</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          <Link 
            href="/" 
            className="text-[14px] tracking-wide text-on-surface-variant hover:text-primary transition-colors duration-200 font-medium"
          >
            Home
          </Link>
          <Link 
            href="/blog" 
            className="text-[14px] tracking-wide text-on-surface-variant hover:text-primary transition-colors duration-200 font-medium"
          >
            Archive
          </Link>
          <Link 
            href="/about" 
            className="text-[14px] tracking-wide text-on-surface-variant hover:text-primary transition-colors duration-200 font-medium"
          >
            About
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <Link href="/blog" className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform">search</span>
          </Link>
          <div className="text-on-surface-variant hover:text-primary transition-colors hidden sm:block">
            <span className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform">bookmarks</span>
          </div>
        </div>
      </div>
    </header>
  );
}
