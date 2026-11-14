import Reveal from './ui/Reveal';
import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-terracotta py-24 text-charcoal md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #0F0F0F 0%, transparent 40%), radial-gradient(circle at 80% 80%, #0F0F0F 0%, transparent 40%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-charcoal/70">
            <span className="h-px w-8 bg-charcoal/70" aria-hidden />
            Let&apos;s create
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.95] tracking-tight">
            Have a project
            <br />
            in <span className="italic">mind?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-base text-charcoal/80 md:text-lg">
            Tell us what you&apos;re dreaming up. We&apos;ll come back with a
            thoughtful plan — not a sales pitch.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@prangart.lab"
              className="group inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-4 text-sm font-medium text-offwhite transition hover:bg-black"
            >
              hello@prangart.lab
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="https://wa.me/628977250597"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/40 px-7 py-4 text-sm font-medium text-charcoal transition hover:border-charcoal"
            >
              Let&apos;s Talk on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
