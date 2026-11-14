'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';

const filters: Array<'All' | Project['category']> = [
  'All',
  'Branding',
  'Illustration',
  'Motion',
  'Web',
];

export default function FeaturedWork() {
  const [active, setActive] = useState<(typeof filters)[number]>('All');

  const visible = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="work" className="relative border-b border-offwhite/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title={
              <>
                Stories we&apos;ve
                <br />
                <span className="italic text-terracotta">shaped.</span>
              </>
            }
          />

          <div
            role="tablist"
            aria-label="Filter projects"
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active === f
                    ? 'bg-terracotta text-charcoal'
                    : 'border border-offwhite/15 text-offwhite/70 hover:border-offwhite/40 hover:text-offwhite'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-offwhite/10 bg-offwhite/[0.02]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category} project`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
                  <div className="absolute inset-0 flex items-end justify-between p-6">
                    <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                      <p className="text-[11px] uppercase tracking-[0.25em] text-terracotta">
                        {project.category} · {project.year}
                      </p>
                      <h3 className="mt-2 font-display text-2xl text-offwhite">
                        {project.title}
                      </h3>
                    </div>
                    <span
                      aria-hidden
                      className="flex h-11 w-11 translate-y-4 items-center justify-center rounded-full border border-offwhite/30 bg-charcoal/60 opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <ArrowUpRight className="h-4 w-4 text-offwhite" />
                    </span>
                  </div>
                </div>
                <span className="sr-only">View case study for {project.title}</span>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="mt-16 text-center text-offwhite/50">
            No projects in this category yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
