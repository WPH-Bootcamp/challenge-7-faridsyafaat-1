import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import EndToEnd from '../components/sections/EndToEnd';
import Services from '../components/sections/Services';
import SmartIT from '../components/sections/SmartIT';
import Industry from '../components/sections/Industry';
import Projects from '../components/sections/Projects';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <main
      className='
        min-h-screen
        bg-[#ffffff]
        text-[#0A0D12]
        dark:bg-[#000000]
        dark:text-[#FDFDFD]
        transition-colors
        duration-500
      '
    >
      <Navbar />
      <Hero />
      <About />
      <EndToEnd />
      <Services />
      <SmartIT />
      <Industry />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
