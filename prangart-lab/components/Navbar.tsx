'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-offwhite/10 bg-charcoal/80 backdrop-blur-md'
            : 'border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            href="/"
            aria-label="PrangArt Lab home"
            className="font-display text-2xl tracking-tight text-offwhite"
          >
            PrangArt<span className="text-terracotta">.</span>Lab
          </Link>

          <ul className="hidden items-center gap-9 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-offwhite/70 transition-colors hover:text-offwhite"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-sm font-medium text-charcoal transition hover:bg-offwhite"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-offwhite md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-2xl text-offwhite">
                PrangArt<span className="text-terracotta">.</span>Lab
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-offwhite"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              }}
              className="flex flex-col gap-2 px-6 pt-16"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block font-display text-5xl text-offwhite transition-colors hover:text-terracotta"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <div className="absolute inset-x-6 bottom-10">
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-full bg-terracotta px-6 py-4 text-charcoal"
              >
                <span className="font-medium">Start a Project</span>
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
