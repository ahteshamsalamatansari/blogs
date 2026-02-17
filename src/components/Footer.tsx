'use strict';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-background border-t border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <span className="text-xl font-bold tracking-tighter text-on-surface font-sans">AHTESHAM</span>
          <p className="text-[13px] text-on-surface-variant/80">
            © {new Date().getFullYear()} Ahtesham Editorial. All rights reserved.
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <Link href="/" className="text-[14px] text-on-surface-variant hover:text-primary transition-colors duration-300 font-medium">
            Home
          </Link>
          <Link href="/blog" className="text-[14px] text-on-surface-variant hover:text-primary transition-colors duration-300 font-medium">
            Archive
          </Link>
          <Link href="/about" className="text-[14px] text-on-surface-variant hover:text-primary transition-colors duration-300 font-medium">
            About
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/ahteshamsalamat" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary hover:scale-105 transition-all"
            title="GitHub"
          >
            <span className="material-symbols-outlined text-[20px]">code</span>
          </a>
          <a 
            href="https://linkedin.com/in/ahtesham-salamat-ansari" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary hover:scale-105 transition-all"
            title="LinkedIn"
          >
            <span className="material-symbols-outlined text-[20px]">alternate_email</span>
          </a>
          <a 
            href="mailto:ahteshamsalamat@gmail.com" 
            className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary hover:scale-105 transition-all"
            title="Email"
          >
            <span className="material-symbols-outlined text-[20px]">mail</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
