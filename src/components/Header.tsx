'use strict';

import Link from 'next/link';

function TerminalMark({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="m7 9 3 3-3 3" />
      <path d="M13 15h4" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300">
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-8 lg:px-margin-desktop h-16 sm:h-20 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex min-w-0 items-center gap-2 hover:opacity-80 transition-opacity" aria-label="Ahtesham Salamat Ansari home">
          <span className="text-lg sm:text-2xl font-bold text-on-surface font-sans">AHTESHAM</span>
          <TerminalMark className="h-6 w-6 shrink-0 text-primary sm:h-7 sm:w-7" />
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
        <div className="flex items-center gap-4 sm:gap-6">
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
