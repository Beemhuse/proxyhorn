import React from 'react';
import { Bot, Zap, Globe, Lock, Sliders, Layers } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'AI-Powered Accuracy',
    description: 'Leveraging Gemini 2.5 Flash for industry-leading transcription accuracy across diverse accents.',
    icon: <Bot className="w-6 h-6 text-neon-blue" />,
  },
  {
    title: 'Smart Optimization',
    description: 'Automatically remove filler words, correct grammar, and structure messy thoughts into clean prose.',
    icon: <Zap className="w-6 h-6 text-neon-purple" />,
  },
  {
    title: 'Multi-Language Support',
    description: 'Instantly translate and transcribe content in over 40 languages with native-level fluency.',
    icon: <Globe className="w-6 h-6 text-pink-500" />,
  },
  {
    title: 'Enterprise Security',
    description: 'Your data is encrypted at rest and in transit. We prioritize privacy and data sovereignty.',
    icon: <Lock className="w-6 h-6 text-green-400" />,
  },
  {
    title: 'Custom Formatting',
    description: 'Export to Markdown, JSON, SRT, or PDF tailored to your specific workflow needs.',
    icon: <Sliders className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: 'Content Repurposing',
    description: 'Turn a single video into a blog post, a tweet thread, and a LinkedIn summary instantly.',
    icon: <Layers className="w-6 h-6 text-orange-400" />,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            More Than Just <span className="text-gradient">Transcription</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ProxyHorn is a complete content engine. We don't just type what you say; we understand it and make it useful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:border-white/20 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;