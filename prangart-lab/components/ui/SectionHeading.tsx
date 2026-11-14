import Reveal from './Reveal';
import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  className = '',
}: Props) {
  return (
    <Reveal className={className}>
      <div className={align === 'center' ? 'text-center' : ''}>
        <span
          className={`inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-terracotta ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <span className="h-px w-8 bg-terracotta" aria-hidden />
          {eyebrow}
        </span>
        <h2 className="mt-6 font-display text-4xl leading-[0.95] tracking-tight text-offwhite sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}
