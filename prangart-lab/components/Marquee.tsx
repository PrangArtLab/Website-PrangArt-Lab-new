const items = ['BRANDING', 'ILLUSTRATION', 'MOTION', 'DIGITAL', 'ART DIRECTION', 'WEB'];

export default function Marquee() {
  const strip = (
    <div className="flex shrink-0 items-center">
      {items.map((text) => (
        <span key={`${text}-1`} className="flex items-center gap-8 px-8">
          <span>{text}</span>
          <span className="text-terracotta">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-hidden
      className="relative z-[2] overflow-hidden border-y border-offwhite/10 bg-charcoal py-8"
    >
      <div className="flex w-max animate-marquee font-display text-4xl tracking-tight text-offwhite/40 md:text-6xl">
        {strip}
        {strip}
      </div>
    </section>
  );
}
