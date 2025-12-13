'use client'
import React, { useState, useRef } from 'react';
import { Upload, Play, FileText, CheckCircle, Loader2, Sparkles, Wand2 } from 'lucide-react';

const DemoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'transcribe' | 'optimize'>('transcribe');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>('');
  const [inputText, setInputText] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // For audio demo
  // const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (!file) return;

  //   if (file.size > 2 * 1024 * 1024) { // 2MB limit for demo
  //     alert("Demo limit: Please upload an audio file smaller than 2MB.");
  //     return;
  //   }

  //   setFileName(file.name);
  //   setLoading(true);
  //   setResult('');

  //   try {
  //     const reader = new FileReader();
  //     reader.onloadend = async () => {
  //       const base64String = (reader.result as string).split(',')[1];
  //       const res = await transcribeAudio(base64String, file.type);
  //       if (res.success) {
  //         setResult(res.text);
  //         setInputText(res.text); // Pre-fill optimize tab
  //       } else {
  //         setResult(`Error: ${res.error}`);
  //       }
  //       setLoading(false);
  //     };
  //     reader.readAsDataURL(file);
  //   } catch (err) {
  //     setResult("Failed to process file.");
  //     setLoading(false);
  //   }
  // };

  // For text optimization demo
  // const handleOptimize = async (mode: 'summary' | 'action_items' | 'blog_post') => {
  //   if (!inputText) return;
  //   setLoading(true);
  //   const res = await optimizeText({ text: inputText, mode });
  //   if (res.success) {
  //     setResult(res.text);
  //   } else {
  //     setResult(`Error: ${res.error}`);
  //   }
  //   setLoading(false);
  // };

  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-dark-800">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full filter blur-[120px] pointer-events-none" />

       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Experience <span className="text-gradient">ProxyHorn</span>
            </h2>
            <p className="text-gray-400">Try our AI engine live directly in your browser.</p>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Tabs */}
            <div className="flex border-b border-white/10">
              <button
                onClick={() => { setActiveTab('transcribe'); setResult(''); }}
                className={`flex-1 py-4 text-center font-medium transition-colors flex items-center justify-center gap-2 ${
                  activeTab === 'transcribe' ? 'bg-white/5 text-neon-blue' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Upload className="w-4 h-4" /> Transcribe Audio
              </button>
              <button
                onClick={() => { setActiveTab('optimize'); setResult(''); }}
                className={`flex-1 py-4 text-center font-medium transition-colors flex items-center justify-center gap-2 ${
                  activeTab === 'optimize' ? 'bg-white/5 text-neon-purple' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Wand2 className="w-4 h-4" /> Optimize Text
              </button>
            </div>

            <div className="p-6 md:p-10 min-h-[400px] flex flex-col">
              
              {/* Transcribe Tab Content */}
              {activeTab === 'transcribe' && (
                <div className="flex flex-col h-full gap-6">
                  <div className="border-2 border-dashed border-gray-700 rounded-xl p-10 flex flex-col items-center justify-center text-center hover:border-neon-blue/50 transition-colors bg-black/20">
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      // onChange={handleFileChange} 
                      accept="audio/*"
                      className="hidden" 
                    />
                    <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                      {loading ? <Loader2 className="w-8 h-8 text-neon-blue animate-spin" /> : <Upload className="w-8 h-8 text-gray-400" />}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {fileName ? fileName : "Drop your audio file here"}
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">MP3, WAV, M4A up to 2MB (Demo Limit)</p>
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      disabled={loading}
                      className="px-6 py-2 bg-neon-blue text-black font-bold rounded-lg hover:bg-cyan-300 transition-colors"
                    >
                      {loading ? 'Processing...' : 'Select File'}
                    </button>
                  </div>
                </div>
              )}

              {/* Optimize Tab Content */}
              {activeTab === 'optimize' && (
                <div className="flex flex-col h-full gap-6">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Paste your rough draft or transcript</label>
                    <textarea 
                      className="w-full h-40 bg-black/30 border border-white/10 rounded-xl p-4 text-gray-300 focus:outline-none focus:border-neon-purple/50 resize-none"
                      placeholder="Paste text here to optimize..."
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button 
                      // onClick={() => handleOptimize('summary')}
                      disabled={loading || !inputText}
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-neon-purple/50 text-sm font-medium text-gray-300 flex items-center gap-2 transition-all disabled:opacity-50"
                    >
                      <FileText className="w-4 h-4" /> Summarize
                    </button>
                    <button 
                      // onClick={() => handleOptimize('action_items')}
                      disabled={loading || !inputText}
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-neon-purple/50 text-sm font-medium text-gray-300 flex items-center gap-2 transition-all disabled:opacity-50"
                    >
                      <CheckCircle className="w-4 h-4" /> Action Items
                    </button>
                    <button 
                      // onClick={() => handleOptimize('blog_post')}
                      disabled={loading || !inputText}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-neon-purple to-pink-500 text-white text-sm font-bold flex items-center gap-2 hover:shadow-lg transition-all disabled:opacity-50"
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                      {loading ? 'Optimizing...' : 'Convert to Blog Post'}
                    </button>
                  </div>
                </div>
              )}

              {/* Results Area */}
              {result && (
                <div className="mt-8 animate-fade-in">
                  <div className="flex items-center justify-between mb-2">
                     <h4 className="text-sm font-semibold text-neon-blue uppercase tracking-wider">Output Result</h4>
                     <button 
                       onClick={() => navigator.clipboard.writeText(result)}
                       className="text-xs text-gray-400 hover:text-white"
                     >
                       Copy Text
                     </button>
                  </div>
                  <div className="bg-black/40 rounded-xl p-6 border border-white/5 max-h-60 overflow-y-auto whitespace-pre-wrap text-gray-300 font-mono text-sm">
                    {result}
                  </div>
                </div>
              )}
            </div>
          </div>
       </div>
    </section>
  );
};

export default DemoSection;