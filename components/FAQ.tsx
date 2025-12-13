'use client'
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How accurate is the transcription?",
    answer: "ProxyHorn uses the latest Gemini 2.5 architecture, delivering up to 99.9% accuracy on clear audio. Even with accents or background noise, our adaptive models perform significantly better than industry standards."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade 256-bit encryption for all file transfers and storage. Your files are automatically deleted from our servers after 24 hours unless you choose to save them to your private dashboard."
  },
  {
    question: "What languages do you support?",
    answer: "We currently support over 40 languages including English, Spanish, French, German, Mandarin, Japanese, and Portuguese, with auto-language detection enabled by default."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, our plans are flexible. You can upgrade, downgrade, or cancel your subscription at any time directly from your account settings. No hidden fees."
  },
  {
    question: "What is 'Smart Optimization'?",
    answer: "Unlike basic transcription, Smart Optimization uses LLMs to rewrite your content. It can turn a rambling meeting into a bulleted list of action items, or a video transcript into a polished blog post."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-dark-900 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-xl overflow-hidden transition-all duration-300 border ${
                openIndex === index ? 'border-neon-blue/30 bg-white/5' : 'border-white/5'
              }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-medium text-lg ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-neon-blue flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;