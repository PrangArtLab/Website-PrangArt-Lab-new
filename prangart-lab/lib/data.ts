export type Service = {
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    icon: 'Fingerprint',
    title: 'Brand Identity',
    description:
      'Strategic visual systems — logos, typography, and voice — engineered to make brands unmistakable.',
    featured: true,
  },
  {
    icon: 'Palette',
    title: 'Illustration',
    description:
      'Custom illustration worlds, editorial pieces, and character design with handcrafted care.',
  },
  {
    icon: 'Play',
    title: 'Motion Graphics',
    description:
      'Kinetic type, animated explainers, and branded motion that give stories momentum.',
  },
  {
    icon: 'Monitor',
    title: 'Web Design',
    description:
      'Editorial-grade websites and interactive experiences built on modern, accessible foundations.',
  },
  {
    icon: 'Instagram',
    title: 'Social Media Content',
    description:
      'Scroll-stopping visual content systems designed for consistency and conversation.',
  },
  {
    icon: 'Compass',
    title: 'Art Direction',
    description:
      'End-to-end creative direction — from concept boards to the final frame — aligned to your vision.',
  },
];

export type Project = {
  id: number;
  title: string;
  category: 'Branding' | 'Illustration' | 'Motion' | 'Web';
  year: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Kanaya Coffee',
    category: 'Branding',
    year: '2024',
    image: 'https://picsum.photos/seed/kanaya-coffee/900/700',
  },
  {
    id: 2,
    title: 'Aurora Visuals',
    category: 'Illustration',
    year: '2024',
    image: 'https://picsum.photos/seed/aurora-visuals/900/700',
  },
  {
    id: 3,
    title: 'Motion Reel Vol.02',
    category: 'Motion',
    year: '2024',
    image: 'https://picsum.photos/seed/motion-reel/900/700',
  },
  {
    id: 4,
    title: 'Borneo Folklore',
    category: 'Illustration',
    year: '2023',
    image: 'https://picsum.photos/seed/borneo-folklore/900/700',
  },
  {
    id: 5,
    title: 'Studio Sola',
    category: 'Branding',
    year: '2023',
    image: 'https://picsum.photos/seed/studio-sola/900/700',
  },
  {
    id: 6,
    title: 'Terra Interactive',
    category: 'Web',
    year: '2023',
    image: 'https://picsum.photos/seed/terra-interactive/900/700',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We dive deep into your world — audience, market, and ambition — before a single pixel is drawn.',
  },
  {
    number: '02',
    title: 'Define',
    description:
      'Together we shape the strategy: positioning, direction, and the visual principles that will guide us.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'We craft, iterate, and refine. Every detail is intentional — from the first sketch to the final render.',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'You receive a polished, documented system — ready to launch, scale, and stay timeless.',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'PrangArt Lab translated our messy vision into a brand identity that feels genuinely ours. The process was calm, thoughtful, and alive.',
    name: 'Adi Pramudya',
    role: 'Founder',
    company: 'Kanaya Coffee',
    avatar: 'https://i.pravatar.cc/120?img=12',
  },
  {
    quote:
      'The illustration system they built became the backbone of our entire campaign. Every asset feels crafted, not templated.',
    name: 'Maria Halim',
    role: 'Marketing Lead',
    company: 'Aurora Visuals',
    avatar: 'https://i.pravatar.cc/120?img=32',
  },
  {
    quote:
      'Working with PrangArt Lab feels like collaborating with artists who actually understand business. Rare combination.',
    name: 'Rendra Wibowo',
    role: 'Creative Director',
    company: 'Terra Interactive',
    avatar: 'https://i.pravatar.cc/120?img=8',
  },
];

export type Article = {
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
};

export const articles: Article[] = [
  {
    title: 'Why Brand Systems Beat Brand Logos',
    category: 'Branding',
    readTime: '5 min read',
    date: 'Mar 12, 2024',
    image: 'https://picsum.photos/seed/journal-brand/800/600',
  },
  {
    title: 'The Slow Craft of Illustration in a Fast World',
    category: 'Illustration',
    readTime: '7 min read',
    date: 'Feb 28, 2024',
    image: 'https://picsum.photos/seed/journal-craft/800/600',
  },
  {
    title: 'Motion as a Language, Not a Decoration',
    category: 'Motion',
    readTime: '4 min read',
    date: 'Feb 10, 2024',
    image: 'https://picsum.photos/seed/journal-motion/800/600',
  },
];
