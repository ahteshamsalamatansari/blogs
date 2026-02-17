import { MDXRemote } from 'next-mdx-remote/rsc';
import CodeBlock from '@/components/CodeBlock';
import remarkGfm from 'remark-gfm';

interface MdxContentProps {
  source: string;
}

// Custom components mapping for MDX compilation
const mdxComponents = {
  // Headings
  h1: ({ children, ...props }: any) => {
    const id = children ? String(children).toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') : '';
    return (
      <h1 
        id={id}
        className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight mt-12 mb-6 font-sans leading-tight scroll-mt-24" 
        {...props} 
      >
        {children}
      </h1>
    );
  },
  h2: ({ children, ...props }: any) => {
    const id = children ? String(children).toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') : '';
    return (
      <h2 
        id={id}
        className="text-2xl md:text-3xl font-bold text-on-surface tracking-tight mt-12 mb-4 font-sans leading-snug scroll-mt-24" 
        {...props} 
      >
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: any) => {
    const id = children ? String(children).toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') : '';
    return (
      <h3 
        id={id}
        className="text-xl md:text-2xl font-semibold text-on-surface tracking-tight mt-8 mb-3 font-sans leading-snug scroll-mt-24" 
        {...props} 
      >
        {children}
      </h3>
    );
  },
  
  // Paragraphs & Lists
  p: (props: any) => (
    <p 
      className="text-lg text-on-surface-variant/90 leading-[1.8] mb-6 font-sans" 
      {...props} 
    />
  ),
  ul: (props: any) => (
    <ul 
      className="list-disc pl-6 space-y-3 mb-6 text-lg text-on-surface-variant/90 leading-[1.8]" 
      {...props} 
    />
  ),
  ol: (props: any) => (
    <ol 
      className="list-decimal pl-6 space-y-3 mb-6 text-lg text-on-surface-variant/90 leading-[1.8]" 
      {...props} 
    />
  ),
  li: (props: any) => (
    <li 
      className="pl-1" 
      {...props} 
    />
  ),
  
  // Quotes
  blockquote: (props: any) => (
    <blockquote 
      className="my-10 pl-8 border-l-4 border-primary py-2 text-xl italic text-on-surface leading-[1.6] bg-surface-container-low/30 rounded-r-md pr-4" 
      {...props} 
    />
  ),
  
  // Custom code element mapping
  pre: (props: any) => <>{props.children}</>,
  
  code: ({ className, children, ...props }: any) => {
    const isBlock = className && className.startsWith('language-');
    if (isBlock) {
      return (
        <CodeBlock className={className}>
          {children}
        </CodeBlock>
      );
    }
    return (
      <code 
        className="px-1.5 py-0.5 bg-surface-container text-primary font-mono text-[14px] rounded" 
        {...props}
      >
        {children}
      </code>
    );
  },
  
  // Links
  a: (props: any) => (
    <a 
      className="text-primary border-b border-primary/20 hover:border-primary transition-colors font-medium" 
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props} 
    />
  ),
  
  // Inline media & tables
  img: (props: any) => (
    <span className="block my-10 overflow-hidden rounded-lg">
      <img className="w-full h-auto object-cover" {...props} />
      {props.alt && (
        <span className="block mt-4 text-center text-sm italic text-on-surface-variant/70 font-sans">
          {props.alt}
        </span>
      )}
    </span>
  ),
  
  table: (props: any) => (
    <div className="overflow-x-auto my-8 border border-outline-variant/30 rounded-lg">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-surface-container-high font-semibold text-on-surface" {...props} />,
  tbody: (props: any) => <tbody className="divide-y divide-outline-variant/20" {...props} />,
  tr: (props: any) => <tr className="hover:bg-surface-container-low/40 transition-colors" {...props} />,
  th: (props: any) => <th className="px-6 py-4 font-sans font-medium" {...props} />,
  td: (props: any) => <td className="px-6 py-4 text-on-surface-variant font-sans" {...props} />,
};

export default function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="reading-container font-sans prose prose-neutral max-w-none">
      <MDXRemote 
        source={source} 
        components={mdxComponents} 
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [],
          }
        }}
      />
    </div>
  );
}
