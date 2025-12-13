import React from 'react';

const brands = [
  "TechFlow", "AudioScribe", "PodcastPro", "MediaMatrix", "ContentLabs"
];

const TrustedBy: React.FC = () => {
  return (
    <section className="py-10 border-y border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
          Trusted by next-gen creators at
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100 duration-500">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-gray-500/50"></div>
              <span className="text-xl font-display font-bold text-white">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;