import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const renderBlogContent = (content: string) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-900" {...props} />
        ),
        h4: ({ node, ...props }) => (
          <h4 className="text-xl font-semibold mt-6 mb-3 text-gray-900" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="mb-5 leading-relaxed text-gray-700" {...props} />
        ),
        a: ({ node, ...props }) => (
          <a
            className="text-blue-600 underline underline-offset-4 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc pl-6 mb-5 space-y-2 text-gray-700" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal pl-6 mb-5 space-y-2 text-gray-700" {...props} />
        ),
        li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
        strong: ({ node, ...props }) => (
          <strong className="font-semibold text-gray-900" {...props} />
        ),
        em: ({ node, ...props }) => <em className="italic" {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote
            className="border-l-4 border-blue-500 bg-blue-50 pl-4 pr-3 py-2 my-5 italic text-gray-700"
            {...props}
          />
        ),
        code: ({ node, className, children, ...props }: any) => {
          const isInline = !className;
          return isInline ? (
            <code className="bg-gray-100 text-pink-600 px-1.5 py-0.5 rounded text-sm" {...props}>
              {children}
            </code>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        pre: ({ node, ...props }) => (
          <pre
            className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-5 text-sm"
            {...props}
          />
        ),
        hr: () => <hr className="my-8 border-gray-200" />,
        img: ({ node, ...props }) => (
          <img className="rounded-lg my-5 max-w-full h-auto" loading="lazy" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
