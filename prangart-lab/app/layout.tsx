import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import CustomCursor from '@/components/CustomCursor';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://prangart-lab.com'),
  title: {
    default: 'PrangArt Lab — Creative Studio for Bold Brands',
    template: '%s | PrangArt Lab',
  },
  description:
    'PrangArt Lab is an independent creative studio crafting brand identities, illustrations, motion, and digital experiences that move people.',
  keywords: [
    'creative studio',
    'branding',
    'illustration',
    'motion design',
    'digital agency',
    'PrangArt Lab',
  ],
  authors: [{ name: 'PrangArt Lab' }],
  openGraph: {
    title: 'PrangArt Lab — Creative Studio',
    description:
      'We craft visual stories that move people. Branding · Illustration · Motion · Digital.',
    type: 'website',
    locale: 'en_US',
    siteName: 'PrangArt Lab',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'PrangArt Lab' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrangArt Lab — Creative Studio',
    description: 'We craft visual stories that move people.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <body className="relative min-h-screen bg-charcoal font-sans text-offwhite antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
