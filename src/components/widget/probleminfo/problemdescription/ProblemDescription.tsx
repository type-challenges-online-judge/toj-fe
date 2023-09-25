import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ProblemDescriptionWrapperStyle } from './ProblemDescription.css';

interface ProblemDescriptionProps {
  description: string;
}

const customStyle = {
  ...base16AteliersulphurpoolLight,
  'code[class*="language-"]': {
    ...base16AteliersulphurpoolLight['code[class*="language-"]'],
    padding: '5px',
    fontSize: '1.2rem',
  },
  'pre[class*="language-"]': {
    ...base16AteliersulphurpoolLight['pre[class*="language-"]'],
    padding: '5px',
    fontSize: '1.2rem',
  },
};

const ProblemDescription = ({ description }: ProblemDescriptionProps) => {
  return (
    <div className={ProblemDescriptionWrapperStyle}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            const match = /language-(\w+)/.exec(className !== undefined ? className : '');
            // if (!inline && match)
            if (inline === false && match !== null) {
              return (
                <SyntaxHighlighter {...props} style={customStyle} language={match[1]} PreTag="div">
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              );
            }
            // else if (inline)
            else if (inline === true) {
              // 인라인 코드에 대한 신텍스 하이라이팅 적용
              return (
                <SyntaxHighlighter
                  {...props}
                  style={customStyle}
                  language="typescript"
                  PreTag="span"
                >
                  {String(children)}
                </SyntaxHighlighter>
              );
            } else {
              return (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            }
          },
        }}
      >
        {description}
      </ReactMarkdown>
    </div>
  );
};

export default ProblemDescription;
