import React from 'react';
import { ArrowRight, Mic, FileText, Zap, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in-up border border-white/10">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-blue"></span>
          </span>
          <span className="text-sm font-medium text-gray-300">V2.5 Now Live: 99.9% Accuracy</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 leading-tight">
          Transcribe Reality. <br />
          <span className="text-gradient">Optimize Meaning.</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10 leading-relaxed">
          Stop wasting hours on manual transcription. ProxyHorn leverages next-gen AI to transform audio and video into structured, actionable content in seconds.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#pricing"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full hover:shadow-[0_0_20px_rgba(188,19,254,0.5)] hover:scale-105"
          >
            Start Creating Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-300 transition-all duration-200 glass-card rounded-full hover:bg-white/5 hover:text-white border border-white/5 hover:border-white/20"
          >
            <Play className="mr-2 w-4 h-4 fill-current" />
            See How It Works
          </a>
        </div>

        {/* Floating Icons Visualization */}
        <div className="mt-20 relative h-32 md:h-48 max-w-4xl mx-auto opacity-80">
           <div className="absolute left-[15%] top-0 animate-bounce delay-100 p-4 rounded-2xl glass-card border border-neon-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
              <Mic className="w-8 h-8 text-neon-blue" />
           </div>
           <div className="absolute left-1/2 -translate-x-1/2 top-12 animate-bounce delay-300 p-5 rounded-2xl glass-card border border-neon-purple/30 shadow-[0_0_15px_rgba(188,19,254,0.2)] bg-dark-800/80 z-10">
             <Zap className="w-10 h-10 text-neon-purple" />
           </div>
           <div className="absolute right-[15%] top-0 animate-bounce delay-500 p-4 rounded-2xl glass-card border border-pink-500/30 shadow-[0_0_15px_rgba(255,0,255,0.2)]">
             <FileText className="w-8 h-8 text-pink-500" />
           </div>
           
           <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;