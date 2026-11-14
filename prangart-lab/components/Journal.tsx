import { articles } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { ArrowUpRight } from 'lucide-react';

export default function Journal() {
  return (
    <section id="journal" className="relative border-b border-offwhite/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Journal"
            title={
              <>
                Notes from
                <br />
                <span className="italic text-terracotta">the studio.</span>
              </>
            }
          />
          <a
            href="#journal"
            className="group inline-flex items-center gap-2 text-sm font-medium text-offwhite/70 transition hover:text-terracotta"
          >
            Read All Articles
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <article className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 transition-opacity group-hover:opacity-0" />
                </div>
                <div className="mt-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-offwhite/50">
                  <span className="rounded-full border border-offwhite/15 px-3 py-1 text-terracotta">
                    {a.category}
                  </span>
                  <span>{a.readTime}</span>
                  <span>·</span>
                  <span>{a.date}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl leading-tight text-offwhite transition-colors group-hover:text-terracotta">
                  {a.title}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
