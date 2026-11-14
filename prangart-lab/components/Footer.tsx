import Link from 'next/link';
import { ArrowUp, ArrowUpRight, Instagram, Linkedin, Dribbble, Figma } from 'lucide-react';

const sitemap = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'Behance', href: 'https://behance.net', icon: Figma },
  { label: 'Dribbble', href: 'https://dribbble.com', icon: Dribbble },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="relative z-[2] border-t border-offwhite/10 bg-charcoal pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="font-display text-3xl text-offwhite">
              PrangArt<span className="text-terracotta">.</span>Lab
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-offwhite/60">
              An independent creative studio crafting visual stories that move
              people. Based in Samarinda, working worldwide.
            </p>

            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.25em] text-offwhite/40">
                Newsletter
              </p>
              <form
                className="mt-3 flex max-w-sm items-center gap-2 rounded-full border border-offwhite/15 bg-offwhite/[0.03] p-1"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="you@studio.com"
                  className="w-full rounded-full bg-transparent px-4 py-2.5 text-sm text-offwhite placeholder:text-offwhite/40 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="shrink-0 rounded-full bg-terracotta p-2.5 text-charcoal transition hover:bg-offwhite"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Sitemap */}
          <nav aria-label="Sitemap" className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.25em] text-offwhite/40">
              Sitemap
            </p>
            <ul className="mt-4 space-y-3">
              {sitemap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-offwhite/70 transition hover:text-terracotta"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-offwhite/40">
              Follow
            </p>
            <ul className="mt-4 space-y-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-offwhite/70 transition hover:text-terracotta"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-offwhite/10 py-8 text-xs text-offwhite/40 md:flex-row">
          <p>
            © {new Date().getFullYear()} PrangArt Lab. All rights reserved.
          </p>
          <p>
            Designed &amp; built in-house · Samarinda, Indonesia
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full border border-offwhite/15 px-4 py-2 text-offwhite/70 transition hover:border-terracotta hover:text-terracotta"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
