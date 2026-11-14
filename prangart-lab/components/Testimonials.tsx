import { testimonials } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="relative border-b border-offwhite/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Trusted by
              <br />
              <span className="italic text-terracotta">good people.</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-offwhite/10 bg-offwhite/[0.02] p-8 transition-colors hover:border-terracotta/40">
                <Quote className="h-6 w-6 text-terracotta" aria-hidden />
                <blockquote className="mt-6 flex-1 text-base leading-relaxed text-offwhite/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-offwhite/10 pt-6">
                  <img
                    src={t.avatar}
                    alt={`Portrait of ${t.name}`}
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium text-offwhite">{t.name}</div>
                    <div className="text-xs text-offwhite/50">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
