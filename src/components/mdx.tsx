import type { AnchorHTMLAttributes, HTMLAttributes } from 'react';

export const mdxComponents = {
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} className="text-pine underline">
      {props.children}
    </a>
  ),
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className="mt-10 font-serif text-3xl text-ink" />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className="mt-8 font-serif text-2xl text-ink" />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="list-disc pl-6" />
  )
};
