'use strict';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Image / SVG Placeholder */}
        <div className="w-48 h-48 rounded-xl bg-surface-container flex-shrink-0 flex items-center justify-center border border-outline-variant/30 select-none">
          <span className="material-symbols-outlined text-primary text-[72px]">person</span>
        </div>

        {/* Profile Content */}
        <div className="flex-grow space-y-6 text-center md:text-left">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight font-sans">
              Ahtesham Salamat Ansari
            </h1>
            <p className="text-primary font-medium mt-1 font-sans">
              AI Engineer | Generative AI & Data Intelligence Solutions
            </p>
          </div>
          
          <div className="text-on-surface-variant/90 space-y-4 leading-[1.8] font-sans text-base">
            <p>
              I am an AI Engineer with over 3 years of experience building production-grade Generative AI applications, large language model (LLM) integrations, retrieval-augmented generation (RAG) systems, and distributed data intelligence pipelines.
            </p>
            <p>
              My expertise bridges the gap between complex machine learning implementations and solid business outcomes, designing systems that automate research workflows, optimize operations, and process millions of data points with latency and accuracy guarantees.
            </p>
          </div>

          {/* Contact Details */}
          <div className="pt-6 border-t border-outline-variant/30 flex flex-col md:flex-row md:items-center gap-6 text-sm font-sans">
            <div>
              <span className="font-bold text-on-surface uppercase tracking-wider block text-[10px] mb-1">Location</span>
              <span className="text-on-surface-variant font-medium">India (GMT+5:30) • Remote</span>
            </div>
            <div>
              <span className="font-bold text-on-surface uppercase tracking-wider block text-[10px] mb-1">Email</span>
              <a href="mailto:ahteshamsalamat@gmail.com" className="text-primary font-medium hover:border-b hover:border-primary transition-colors">
                ahteshamsalamat@gmail.com
              </a>
            </div>
            <div>
              <span className="font-bold text-on-surface uppercase tracking-wider block text-[10px] mb-1">Socials</span>
              <div className="flex gap-3 justify-center md:justify-start mt-1">
                <a 
                  href="https://linkedin.com/in/ahtesham-salamat-ansari" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary font-medium hover:border-b hover:border-primary transition-colors"
                >
                  LinkedIn
                </a>
                <span className="text-outline-variant">|</span>
                <a 
                  href="https://github.com/ahteshamsalamat" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary font-medium hover:border-b hover:border-primary transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
