import React from 'react';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

 const plans: PricingPlan[] = [
    {
      name: "Free",
      price: "$0",
      description: "Basic transcription for occasional use",
      features: [
        "5 hours of transcription per month",
        "2 languages supported",
        "Basic punctuation & formatting",
        "Standard accuracy",
        "24 hour support",
      ],
      highlighted: false,
      cta: "Get Started",
    },
    {
      name: "Creator Pro",
      price: "$12",
      period: "per month",
      description: "Advanced features for regular users",
      features: [
        "25 hours of transcription per month",
        "10 languages supported",
        "Advanced punctuation & formatting",
        "Speaker identification",
        "Timestamping",
        "Enhanced accuracy",
        "Priority support",
      ],
    highlighted: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "per month",
      description: "Maximum power for professionals",
      features: [
        "Unlimited transcription",
        "All languages supported",
        "Premium formatting & punctuation",
        "Advanced speaker identification",
        "Precise timestamping",
        "Maximum accuracy with AI enhancement",
        "Noise reduction",
        "24/7 dedicated support",
        "Custom API access",
      ],
      highlighted: false,
      cta: "Contact Sales",
    },
  ];
const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-gray-400">Choose the plan that fits your workflow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 flex flex-col transition-transform duration-300 hover:scale-[1.02] ${
                plan.highlighted
                  ? 'bg-[#13131f] border border-neon-purple shadow-[0_0_30px_rgba(188,19,254,0.15)]'
                  : 'glass-card'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-neon-blue to-neon-purple text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                <p className="text-gray-400 text-sm mt-2">{plan.description}</p>
              </div>

              <div className="flex-grow mb-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${plan.highlighted ? 'bg-neon-purple' : 'bg-gray-700'}`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  plan.highlighted
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;