'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-24">
      {/* Ambient background orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-terracotta/20 blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-cream/[0.07] blur-[120px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-7xl px-6 lg:px-10"
      >
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-offwhite/15 bg-offwhite/5 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-offwhite/70"
        >
          <Sparkles className="h-3 w-3 text-terracotta" />
          Creative Studio · Samarinda, ID
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-[clamp(2.8rem,9vw,8.5rem)] leading-[0.92] tracking-tight text-offwhite"
        >
          We craft visual
          <br />
          stories that <span className="italic text-terracotta">move</span>
          <br />
          people.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-10 max-w-xl text-base leading-relaxed text-offwhite/60 sm:text-lg"
        >
          PrangArt Lab is an independent creative studio turning bold ideas into
          brands, illustrations, and motion that feel alive.
        </motion.p>

        <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-offwhite px-7 py-4 text-sm font-medium text-charcoal transition hover:bg-terracotta"
          >
            View Our Work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-offwhite/20 px-7 py-4 text-sm font-medium text-offwhite transition hover:border-terracotta hover:text-terracotta"
          >
            Book a Call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-offwhite/40"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
