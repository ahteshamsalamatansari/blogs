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

function GitHubLogo({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.82 1.31 3.51 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}

function LinkedInLogo({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.67H9.34V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.53V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full py-12 sm:py-16 bg-background border-t border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-8 lg:px-margin-desktop flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <span className="flex items-center gap-2 text-xl font-bold text-on-surface font-sans">
            AHTESHAM
            <TerminalMark className="h-6 w-6 text-primary" />
          </span>
          <p className="text-center text-[13px] text-on-surface-variant/80 md:text-left">
            © {new Date().getFullYear()} Ahtesham Salamat Ansari. All rights reserved.
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
            aria-label="GitHub"
          >
            <GitHubLogo className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com/in/ahtesham-salamat-ansari" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary hover:scale-105 transition-all"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <LinkedInLogo className="h-5 w-5" />
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
