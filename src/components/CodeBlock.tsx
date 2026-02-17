'use strict';

'use client';

import { useState, useEffect } from 'react';
import Prism from 'prismjs';

// Import the languages we want to support
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  
  // Trigger Prism highlighting on mount and when content changes
  useEffect(() => {
    Prism.highlightAll();
  }, [children]);

  // Extract text content from children
  const getCodeText = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return node.toString();
    if (Array.isArray(node)) return node.map(getCodeText).join('');
    if (node && typeof node === 'object' && 'props' in node) {
      const props = (node as any).props;
      return getCodeText(props ? props.children : '');
    }
    return '';
  };

  const codeText = getCodeText(children).trim();
  const language = className ? className.replace(/language-/, '') : '';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  return (
    <div className="relative group my-8 rounded-lg overflow-hidden border border-outline-variant/20 bg-surface-container-low">
      {/* Copy Button (absolute overlay, visible on hover) */}
      <button 
        onClick={handleCopy}
        className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/80 hover:bg-background border border-outline-variant/30 text-on-surface-variant/80 hover:text-primary rounded px-2.5 py-1.5 text-xs font-sans font-medium flex items-center gap-1 cursor-pointer shadow-sm select-none z-10"
        title="Copy Code"
      >
        <span className="material-symbols-outlined text-[14px]">{copied ? 'done' : 'content_copy'}</span>
        {copied ? 'Copied!' : 'Copy'}
      </button>
      
      {/* Code Area */}
      <pre className="overflow-x-auto p-6 text-on-surface font-mono text-[14px] leading-[1.6]">
        <code className={className || 'language-text'}>{children}</code>
      </pre>
    </div>
  );
}
