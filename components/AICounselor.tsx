
import React, { useState, useRef, useEffect } from 'react';
import { getCounselingResponse } from '../services/geminiService';

export const AICounselor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    { role: 'ai', text: 'Yo! I\'m your SRM 2026 AI Counselor. 🤖 Confused about cutoffs or campuses? Ask me anything! If I tweak out, just hit the WhatsApp button below.' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!query.trim()) return;
    
    const userQuery = query;
    setMessages(prev => [...prev, { role: 'user', text: userQuery }]);
    setQuery('');
    setLoading(true);

    const aiResponse = await getCounselingResponse(userQuery, { campus: 'SRMIST', year: 2026 });
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-6 w-80 sm:w-96 bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-4 border-black overflow-hidden flex flex-col h-[550px] animate-in slide-in-from-bottom-10 duration-500">
          <div className="bg-black p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neon-blue rounded-xl flex items-center justify-center text-black font-black text-xl rotate-6">
                🤖
              </div>
              <div>
                <h4 className="font-black text-xs uppercase tracking-widest">SRM AI BOT</h4>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[8px] font-black uppercase tracking-widest opacity-60">Status: Vibe-Checked</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 w-8 h-8 rounded-full flex items-center justify-center transition-all">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed font-bold ${
                  msg.role === 'user' 
                    ? 'bg-black text-white rounded-tr-none' 
                    : 'bg-white border-2 border-black text-black rounded-tl-none shadow-[4px_4px_0_rgba(0,0,0,1)]'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border-2 border-black p-4 rounded-2xl rounded-tl-none shadow-[4px_4px_0_rgba(0,0,0,1)] flex gap-1">
                  <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t-2 border-black space-y-3">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..." 
                className="flex-1 border-2 border-black rounded-xl px-4 py-3 text-xs focus:outline-none focus:bg-slate-50 font-bold"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="bg-black text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-slate-800 transition-all disabled:opacity-50"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <a 
              href="https://wa.me/919382082728?text=Yo!%20The%20AI%20bot%20sent%20me.%20I%20need%20human%20help%20with%20SRM%202026."
              target="_blank"
              className="w-full bg-green-500 text-white py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-green-600 transition-all border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)]"
            >
              <i className="fab fa-whatsapp"></i> Talk to a Human Expert
            </a>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-neon-blue text-black w-16 h-16 rounded-[24px] shadow-2xl hover:scale-110 transition-all flex items-center justify-center border-4 border-black relative group overflow-hidden neo-brutalism"
      >
        {isOpen ? <i className="fas fa-chevron-down text-xl relative z-10"></i> : <i className="fas fa-comment-dots text-2xl relative z-10"></i>}
      </button>
    </div>
  );
};
