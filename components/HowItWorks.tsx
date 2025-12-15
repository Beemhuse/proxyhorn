import React from 'react';
import { UploadCloud, Sparkles, FileCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    icon: <UploadCloud className="w-8 h-8 text-neon-blue" />,
    title: "1. Upload Media",
    description: "Drag & drop your audio or video files. We support MP3, WAV, MP4, and MOV formats up to 4GB."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-neon-purple" />,
    title: "2. AI Processing",
    description: "Our neural engine analyzes speech patterns, identifies speakers, and corrects grammar instantly."
  },
  {
    icon: <FileCheck className="w-8 h-8 text-pink-500" />,
    title: "3. Export Result",
    description: "Download accurate transcripts, summaries, or SEO-ready blog posts in your preferred format."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            From Chaos to <span className="text-gradient">Clarity</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A seamless workflow designed for efficiency. No complex setups, just pure productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-pink-500/20 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="glass-card p-8 rounded-2xl h-full hover:bg-white/5 transition-colors duration-300 border border-white/5 hover:border-white/10 group">
                <div className="w-16 h-16 rounded-2xl bg-[#0a0a0f] border border-white/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{step.title}</h3>
                <p className="text-gray-400 text-center leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <Link href="https:app.proxyhorn.com" className="inline-flex items-center text-neon-blue font-bold hover:text-white transition-colors">
             Start your first transcription <ArrowRight className="ml-2 w-4 h-4" />
           </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;