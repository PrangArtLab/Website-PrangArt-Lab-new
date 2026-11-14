import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { ArrowUpRight } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Years of Craft' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '20+', label: 'Happy Clients' },
];

export default function About() {
  return (
    <section id="about" className="relative border-b border-offwhite/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://picsum.photos/seed/prangart-studio/900/1100"
                alt="Inside the PrangArt Lab studio"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="The Studio"
              title={
                <>
                  Artists with a
                  <br />
                  <span className="italic text-terracotta">point of view.</span>
                </>
              }
            />

            <Reveal delay={0.1}>
              <p className="mt-8 text-base leading-relaxed text-offwhite/70">
                PrangArt Lab was born from a simple belief: great design should
                feel inevitable, not decorative. We&apos;re a small, deliberate
                team of designers, illustrators, and motion artists who treat
                every project as a story waiting to be told well.
              </p>
              <p className="mt-4 text-base leading-relaxed text-offwhite/70">
                We work with founders and creative leaders who care about the
                details — because that&apos;s where the difference lives.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-offwhite/10 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-display text-4xl text-terracotta md:text-5xl">
                      {stat.value}
                    </dt>
                    <dd className="mt-2 text-xs uppercase tracking-wider text-offwhite/50">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="#contact"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-offwhite transition hover:text-terracotta"
              >
                Meet the Team
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
