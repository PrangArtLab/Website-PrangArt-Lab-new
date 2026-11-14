import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import FeaturedWork from '@/components/FeaturedWork';
import About from '@/components/About';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Journal from '@/components/Journal';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative z-[2]">
        <Hero />
        <Marquee />
        <Services />
        <FeaturedWork />
        <About />
        <Process />
        <Testimonials />
        <Journal />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
