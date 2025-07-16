import 'react';

declare module 'react' {
  interface FormHTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T> {
    netlify?: boolean | string;
    'data-netlify'?: boolean | string;
    'data-netlify-honeypot'?: string;
  }
}
