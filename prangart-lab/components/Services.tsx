'use client';

import {
  Compass,
  Fingerprint,
  Instagram,
  Monitor,
  Palette,
  Play,
  type LucideIcon,
} from 'lucide-react';
import { services } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const iconMap: Record<string, LucideIcon> = {
  Fingerprint,
  Palette,
  Play,
  Monitor,
  Instagram,
  Compass,
};

export default function Services() {
  return (
    <section id="services" className="relative border-b border-offwhite/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              What we
              <br />
              <span className="italic text-terracotta">do best.</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const featured = service.featured;
            return (
              <Reveal
                key={service.title}
                delay={i * 0.06}
                className={
                  featured ? 'md:col-span-1 lg:col-span-2 lg:row-span-2' : ''
                }
              >
                <article
                  className={`group relative h-full overflow-hidden rounded-2xl border border-offwhite/10 bg-offwhite/[0.02] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-terracotta/50 hover:bg-offwhite/[0.04] ${
                    featured ? 'min-h-[280px] lg:min-h-[400px]' : 'min-h-[220px]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-offwhite/10 bg-charcoal text-terracotta transition-colors group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-charcoal">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-2xl text-offwhite/20">
                      0{i + 1}
                    </span>
                  </div>

                  <h3
                    className={`mt-8 font-display tracking-tight text-offwhite ${
                      featured ? 'text-3xl md:text-4xl' : 'text-2xl'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mt-3 leading-relaxed text-offwhite/60 ${
                      featured ? 'max-w-md text-base' : 'text-sm'
                    }`}
                  >
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
