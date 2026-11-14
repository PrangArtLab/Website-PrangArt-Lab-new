import { processSteps } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

export default function Process() {
  return (
    <section className="relative border-b border-offwhite/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              A clear process,
              <br />
              <span className="italic text-terracotta">quietly powerful.</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-offwhite/10 bg-offwhite/10 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div className="group h-full bg-charcoal p-8 transition-colors hover:bg-offwhite/[0.03]">
                <span className="font-display text-5xl text-terracotta/80 transition-colors group-hover:text-terracotta md:text-6xl">
                  {step.number}
                </span>
                <h3 className="mt-6 font-display text-2xl text-offwhite">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-offwhite/60">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
