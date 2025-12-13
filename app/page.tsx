import FAQ from '@/components/FAQ';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import TrustedBy from '@/components/TrustedBy';
import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white selection:bg-neon-blue selection:text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default Home;