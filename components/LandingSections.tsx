
import React, { useState } from 'react';

// --- WhatsApp Config ---
const WHATSAPP_NUMBER = "919382082728"; 
const getWAUrl = (msg: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

// --- Marquee Banner ---
export const MarqueeBanner: React.FC = () => (
  <div className="bg-neon-blue text-black font-bungee py-2 overflow-hidden border-y-4 border-black">
    <div className="marquee flex gap-8 whitespace-nowrap">
      <span>SRM ADMISSION 2026 IS LIVE • GET DIRECT CSE SEATS • 100% PLACEMENT VIBE • NO CAP COUNSELLING • SRMJEEE PREP TIPS • </span>
      <span>SRM ADMISSION 2026 IS LIVE • GET DIRECT CSE SEATS • 100% PLACEMENT VIBE • NO CAP COUNSELLING • SRMJEEE PREP TIPS • </span>
    </div>
  </div>
);

// --- Guidance Animation ---
export const GuidanceIllustration: React.FC = () => {
  return (
    <div className="relative w-full aspect-square flex items-center justify-center p-8">
      <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[60px] animate-pulse"></div>
      <div className="absolute w-48 h-48 border-2 border-dashed border-blue-400/30 rounded-full animate-spin-slow"></div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(255,255,255,0.3)] neo-brutalism -rotate-6">🤳</div>
        <span className="text-[10px] font-black uppercase tracking-tighter bg-white text-black px-2 py-0.5 rounded rotate-3">Student</span>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group">
        <div className="w-20 h-20 bg-srm-gold rounded-full flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(255,215,0,0.4)] neo-brutalism rotate-6">🧠</div>
        <span className="text-[10px] font-black uppercase tracking-tighter bg-srm-gold text-black px-2 py-0.5 rounded -rotate-3">The GOAT Mentor</span>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white text-black p-3 rounded-2xl shadow-xl text-[10px] font-bold border-2 border-black rotate-3">"Can I get CSE?"</div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-white p-3 rounded-2xl shadow-xl text-[10px] font-bold border-2 border-white -rotate-3">"I'll secure it for you."</div>
    </div>
  );
};

// --- Navigation ---
export const Navigation: React.FC<{ onCTA: () => void }> = ({ onCTA }) => {
  return (
    <nav className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-neon-blue text-black rounded-xl flex items-center justify-center font-black text-xl rotate-12 neo-brutalism">S</div>
            <span className="font-bungee text-lg hidden sm:block tracking-tighter">SRM <span className="text-neon-blue">2026</span></span>
          </div>
          <div className="hidden lg:flex gap-8">
            {['About', 'Criteria', 'Fees', 'Cutoffs', 'Placements'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-neon-blue transition-all">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href={getWAUrl("Hi, I need SRM 2026 admission counseling.")} className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all">
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
            <button onClick={onCTA} className="bg-white text-black px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest neo-brutalism">Apply Now</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// --- Hero ---
export const Hero: React.FC<{ onPrimaryCTA: () => void }> = ({ onPrimaryCTA }) => {
  return (
    <section id="hero" className="relative pt-12 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8">
            <span className="text-[10px] font-black text-neon-blue uppercase tracking-[0.3em]">SRM Admission 2026 • Live Updates</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
            SRM ADMISSION <span className="text-neon-blue">2026.</span>
          </h1>
          <p className="text-lg text-slate-400 font-medium mb-12 max-w-xl leading-relaxed">
            Your gateway to <strong>Kattankulathur</strong> and beyond. Don't let your rank define your future. Expert guidance for SRMJEEE, direct seats, and management quota.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <button onClick={onPrimaryCTA} className="bg-neon-blue text-black px-10 py-5 rounded-2xl font-black text-lg neo-brutalism uppercase">Check My Eligibility</button>
            <a href={getWAUrl("I want to book a free SRM 2026 counseling session.")} className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
              Book Free Counseling
            </a>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-full max-w-md p-1 bg-white/5 rounded-[40px] border border-white/10 glass shadow-2xl">
            <div className="p-8 bg-[#020617] rounded-[36px]">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Counseling Stats</span>
                <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div><span className="text-[10px] font-bold text-red-500 uppercase">Live</span></div>
              </div>
              <GuidanceIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- About SRM ---
export const AboutSRM: React.FC = () => (
  <section id="about" className="py-24 bg-white text-black rounded-[60px]">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-black mb-8 tracking-tighter">WHY SRM <span className="text-blue-600">IST?</span></h2>
          <p className="text-slate-600 font-bold mb-8 leading-relaxed">
            SRM Institute of Science and Technology is one of India's top-ranked deemed universities (NAAC A++ Grade). With world-class infrastructure and a legacy of producing industry leaders, SRM is more than just a college—it's an ecosystem for innovators.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 rounded-3xl border-2 border-black">
              <h4 className="font-black text-2xl">NIRF #18</h4>
              <p className="text-xs uppercase font-bold text-slate-400">University Category</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-3xl border-2 border-black">
              <h4 className="font-black text-2xl">400+ Acres</h4>
              <p className="text-xs uppercase font-bold text-slate-400">Main Campus Area</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: "Kattankulathur", tag: "Main Campus", desc: "The hub of engineering excellence." },
            { name: "Ramapuram", tag: "Chennai City", desc: "Prime location for tech exposure." },
            { name: "Vadapalani", tag: "Business Hub", desc: "Integrated with urban dynamics." },
            { name: "Delhi-NCR", tag: "North Hub", desc: "Best for northern regional access." }
          ].map(c => (
            <div key={c.name} className="p-6 bg-white border-4 border-black rounded-3xl neo-brutalism">
              <span className="text-[10px] font-black text-blue-600 uppercase mb-2 block">{c.tag}</span>
              <h3 className="text-xl font-black mb-2">{c.name}</h3>
              <p className="text-xs font-medium text-slate-500">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// --- Parent Emotional Section ---
export const ParentEmotionalSection: React.FC = () => (
  <section className="py-24 bg-slate-900 overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <div className="inline-block p-4 bg-white/5 rounded-full mb-8">
        <span className="text-srm-gold text-2xl">👨‍👩‍👧‍👦</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">WORRIED ABOUT <span className="text-srm-gold">PRIVATE FEES?</span></h2>
      <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
        We understand. Education is the biggest investment of your life. While SRM fees might seem high, the <strong>Placement ROI (Return on Investment)</strong> is what matters. 
        Most students in CSE/IT branches recover their entire 4-year tuition within 1.5 to 2 years of starting their careers.
      </p>
      <div className="bg-white/5 border border-white/10 p-12 rounded-[40px] glass">
        <h4 className="text-neon-blue font-black mb-4 uppercase tracking-widest text-sm">Cost vs Future Value</h4>
        <div className="flex flex-col md:flex-row justify-around gap-8 text-left">
          <div>
            <p className="text-slate-500 font-bold uppercase text-xs mb-2">Avg. Fees (4 Years)</p>
            <p className="text-3xl font-black">₹16L - 20L</p>
          </div>
          <div className="h-px md:h-12 w-full md:w-px bg-white/10"></div>
          <div>
            <p className="text-slate-500 font-bold uppercase text-xs mb-2">Avg. CSE Package</p>
            <p className="text-3xl font-black">₹10.5L / Yr</p>
          </div>
          <div className="h-px md:h-12 w-full md:w-px bg-white/10"></div>
          <div>
            <p className="text-slate-500 font-bold uppercase text-xs mb-2">Career Longevity</p>
            <p className="text-3xl font-black">LIFETIME</p>
          </div>
        </div>
        <a href={getWAUrl("I am a parent. I want to discuss the budget and fees for SRM 2026.")} className="mt-12 inline-block bg-white text-black px-12 py-5 rounded-2xl font-black text-sm uppercase neo-brutalism">Talk to Parent Advisor</a>
      </div>
    </div>
  </section>
);

// --- Eligibility & Cutoffs ---
export const Eligibility: React.FC = () => (
  <section id="criteria" className="py-24 bg-white text-black">
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-20">
        <h2 className="text-5xl font-black tracking-tighter mb-4">ELIGIBILITY <br/> <span className="text-blue-600">B.TECH 2026.</span></h2>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black shrink-0">01</div>
              <div>
                <h4 className="font-black text-lg">Academic Grind</h4>
                <p className="text-slate-500 font-bold">10+2 with Physics, Chemistry, and Mathematics (PCM). Minimum 60% aggregate for Main Campus; 50% for others.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black shrink-0">02</div>
              <div>
                <h4 className="font-black text-lg">The Entrance Gate</h4>
                <p className="text-slate-500 font-bold">Mandatory appearance in SRMJEEE 2026. Phase 1 & 2 are high priority.</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-10 rounded-[40px] border-4 border-black neo-brutalism">
            <h3 className="font-black text-2xl mb-6">DIRECT ADMISSION?</h3>
            <p className="text-slate-600 font-bold mb-8">Missed the rank? Limited seats are available under Management/Direct Quota for high-intent candidates. Don't wait until seats are full.</p>
            <a href={getWAUrl("I want to know about SRM 2026 direct admission process.")} className="text-blue-600 font-black uppercase tracking-widest text-xs flex items-center gap-2">Secure My Seat <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Cutoff Analysis Table ---
export const Cutoffs: React.FC = () => (
  <section id="cutoffs" className="py-24 bg-slate-50 text-black">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-5xl font-black mb-16 tracking-tighter text-center">SRMJEEE 2026 <span className="text-blue-600">CUTOFFS.</span></h2>
      <div className="overflow-x-auto">
        <table className="w-full border-4 border-black bg-white rounded-3xl overflow-hidden font-bold">
          <thead className="bg-black text-white text-[10px] uppercase tracking-widest">
            <tr>
              <th className="p-6 text-left">Specialization</th>
              <th className="p-6 text-left">Main Campus Rank</th>
              <th className="p-6 text-left">Others Campus Rank</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-black">
            {[
              { b: "Computer Science (CSE)", ktr: "1,500 - 9,500", oth: "10,000 - 35,000" },
              { b: "AI & Machine Learning", ktr: "2,000 - 11,000", oth: "15,000 - 40,000" },
              { b: "Cyber Security", ktr: "5,000 - 15,000", oth: "20,000 - 45,000" },
              { b: "Electronics (ECE)", ktr: "15,000 - 25,000", oth: "30,000 - 55,000" },
              { b: "Core Branches", ktr: "25,000+", oth: "Any Rank" }
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="p-6 font-black">{row.b}</td>
                <td className="p-6 text-blue-600">{row.ktr}</td>
                <td className="p-6 text-slate-400">{row.oth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-8 text-center text-slate-500 font-bold text-sm italic">*Estimated ranges based on previous year trends. Competitive ranks fluctuate.</p>
    </div>
  </section>
);

// --- Fees Section ---
export const FeesSection: React.FC = () => (
  <section id="fees" className="py-24 bg-black text-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-black mb-8 tracking-tighter">THE <span className="text-neon-blue">FEES.</span></h2>
          <div className="space-y-4">
             <div className="p-8 border-2 border-white/10 rounded-[30px] glass">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-black text-xl">CSE & Specializations</h4>
                  <span className="bg-neon-blue text-black px-4 py-1 rounded-full text-[10px] font-black uppercase">Most Popular</span>
                </div>
                <p className="text-3xl font-black mb-2">₹4,50,000 - ₹5,00,000 <span className="text-sm text-slate-500">/ per yr</span></p>
                <p className="text-xs text-slate-500 font-bold">Includes main campus premium labs and industry tie-ups.</p>
             </div>
             <div className="p-8 border-2 border-white/10 rounded-[30px] glass">
                <h4 className="font-black text-xl mb-4">Core Engineering</h4>
                <p className="text-3xl font-black mb-2">₹2,50,000 - ₹3,50,000 <span className="text-sm text-slate-500">/ per yr</span></p>
                <p className="text-xs text-slate-500 font-bold">Mechanical, Civil, Automobile, etc.</p>
             </div>
          </div>
        </div>
        <div className="bg-neon-blue p-12 rounded-[60px] text-black neo-brutalism">
          <h3 className="font-black text-3xl mb-6">SCHOLARSHIPS 🎓</h3>
          <ul className="space-y-4 font-bold mb-8">
            <li className="flex gap-3">✅ <strong>100% Fee Waiver:</strong> Top 100 SRMJEEE Ranks</li>
            <li className="flex gap-3">✅ <strong>75% Fee Waiver:</strong> Ranks 101 - 500</li>
            <li className="flex gap-3">✅ <strong>50% Fee Waiver:</strong> Ranks 501 - 1,000</li>
            <li className="flex gap-3">✅ <strong>State/Board Toppers:</strong> Special Direct Waivers</li>
          </ul>
          <a href={getWAUrl("I want to check my scholarship eligibility for SRM 2026.")} className="block text-center bg-black text-neon-blue py-5 rounded-2xl font-black uppercase text-xs">Check My Scholarship Tier</a>
        </div>
      </div>
    </div>
  </section>
);

// --- Placements Section ---
export const Placements: React.FC = () => (
  <section id="placements" className="py-24 bg-white text-black">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black mb-4 tracking-tighter">PLACEMENT <span className="text-blue-600">RECORDS.</span></h2>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Where world-class talent meets global opportunities</p>
      </div>
      <div className="grid md:grid-cols-4 gap-6 mb-20">
        {[
          { v: "₹1.1 CR", t: "Highest Package", c: "International" },
          { v: "₹10.5L", t: "Avg. CSE Package", c: "Domestic" },
          { v: "1,200+", t: "Top Recruiters", c: "On-Campus" },
          { v: "10,000+", t: "Offers Made", c: "2024 Batch" }
        ].map(s => (
          <div key={s.t} className="p-8 bg-slate-50 border-4 border-black rounded-[40px] text-center neo-brutalism">
            <h4 className="text-3xl font-black mb-1">{s.v}</h4>
            <p className="text-xs font-black uppercase text-blue-600 mb-2">{s.t}</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase">{s.c}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
        {['Google', 'Microsoft', 'Amazon', 'TCS', 'Cognizant', 'Wipro', 'Infosys', 'Adobe'].map(brand => (
          <span key={brand} className="text-4xl font-black tracking-tighter">{brand}</span>
        ))}
      </div>
    </div>
  </section>
);

// --- Testimonials ---
export const Testimonials: React.FC = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-widest text-slate-400">Student Voices</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Rahul S.", year: "2023 Grad", text: "Got into Amazon with a 45LPA package. The coding environment at KTR is insane!" },
          { name: "Sneha V.", year: "3rd Year", text: "The research opportunities here allowed me to publish a paper in my 2nd year. SRM is worth every penny." },
          { name: "Priya D.", year: "Parent", text: "Initially worried about the fee, but seeing my son's growth and eventual placement in TCS Digital, I'm satisfied." }
        ].map((t, i) => (
          <div key={i} className="p-10 bg-white border-2 border-black rounded-[40px] shadow-[8px_8px_0_rgba(0,0,0,1)]">
            <p className="text-lg font-bold mb-6 italic">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
              <div>
                <h5 className="font-black text-sm">{t.name}</h5>
                <p className="text-[10px] uppercase font-bold text-slate-400">{t.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Lead Capture ---
export const LeadCapture: React.FC<{ onCTA: () => void }> = ({ onCTA }) => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-5xl mx-auto bg-neon-blue rounded-[60px] p-12 lg:p-24 text-black relative overflow-hidden neo-brutalism">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none rotate-12">
          <i className="fab fa-whatsapp text-[200px]"></i>
        </div>
        <div className="text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">THE ADMISSION <br/> FAST-PASS.</h2>
          <p className="text-xl font-bold mb-12 max-w-xl mx-auto opacity-70">
            Unsure about your SRMJEEE rank or budget? Let our experts match you to the right campus and branch.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button onClick={onCTA} className="bg-black text-white px-12 py-6 rounded-2xl font-black text-xl uppercase tracking-tighter hover:scale-105 transition-all">Take College Match Test</button>
            <a href={getWAUrl("Hi, I want to take the college match test for SRM 2026.")} className="bg-white text-black px-12 py-6 rounded-2xl font-black text-xl uppercase tracking-tighter flex items-center justify-center gap-4 hover:scale-105 transition-all">
              <i className="fab fa-whatsapp text-3xl"></i> WhatsApp Counselor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- FAQ ---
export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
    { q: "Is SRMJEEE mandatory for admission?", a: "Yes, for the majority of merit-based seats, SRMJEEE is mandatory. However, limited seats under Management Quota can be secured based on academic performance." },
    { q: "Can I get SRM without JEE Main?", a: "Absolutely. SRM has its own entrance exam (SRMJEEE). You don't need a high JEE Main score, but high scores can sometimes help in direct interviews." },
    { q: "What rank is required for CSE Main Campus?", a: "To be safe, aim for a rank under 10,000. CSE with specializations like AI/ML are also highly sought after." },
    { q: "Which campus is considered the best?", a: "Kattankulathur (Main Campus) is the most prestigious with the best research labs and infrastructure." }
  ];

  return (
    <section id="faq" className="py-24 bg-white text-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl font-black tracking-tighter text-center mb-16 uppercase italic underline">The Intel.</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-4 border-black rounded-[30px] overflow-hidden">
              <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)} className="w-full text-left p-8 flex justify-between items-center font-black text-xl hover:bg-slate-50 transition-colors">
                {faq.q}
                <i className={`fas fa-${openIdx === idx ? 'minus' : 'plus'} transition-transform`}></i>
              </button>
              {openIdx === idx && <div className="px-8 pb-8 text-slate-500 font-bold leading-relaxed">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Lead Modal ---
export const LeadModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-white text-black w-full max-w-xl rounded-[40px] neo-brutalism overflow-hidden animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-8 right-8 text-gray-400 hover:text-black z-10"><i className="fas fa-times text-2xl"></i></button>
        {!submitted ? (
          <div className="p-12">
            <h3 className="text-4xl font-black mb-4 tracking-tighter uppercase">Apply Now.</h3>
            <p className="text-slate-500 font-bold mb-10 leading-tight uppercase tracking-widest text-[10px]">Seats filling fast for Main Campus CSE</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input required type="text" className="w-full border-4 border-black rounded-2xl p-5 bg-slate-50 outline-none font-black" placeholder="Full Name" />
              <input required type="tel" className="w-full border-4 border-black rounded-2xl p-5 bg-slate-50 outline-none font-black" placeholder="WhatsApp Number" />
              <select className="w-full border-4 border-black rounded-2xl p-5 bg-slate-50 outline-none font-black uppercase text-xs tracking-widest">
                <option>Interested Branch</option>
                <option>CSE @ Kattankulathur</option>
                <option>ECE @ Ramapuram</option>
                <option>Direct Admission / MQ</option>
              </select>
              <button type="submit" className="w-full bg-neon-blue text-black py-6 rounded-2xl font-black text-xl uppercase neo-brutalism">Start Counseling</button>
            </form>
          </div>
        ) : (
          <div className="p-20 text-center">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl neo-brutalism"><i className="fas fa-check"></i></div>
            <h3 className="text-4xl font-black mb-4 tracking-tighter">VIBE CHECKED.</h3>
            <p className="text-slate-500 font-bold">An advisor will call you within 2 hours. Keep your phone handy!</p>
            <button onClick={onClose} className="mt-10 bg-black text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs">Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Footer ---
export const Footer: React.FC = () => (
  <footer className="bg-black text-white py-24 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-16">
      <div className="col-span-2">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 bg-neon-blue text-black rounded-xl flex items-center justify-center font-black text-2xl rotate-12 neo-brutalism">S</div>
          <span className="font-bungee text-2xl tracking-tighter">SRM <span className="text-neon-blue">2026</span></span>
        </div>
        <p className="text-slate-500 max-w-sm font-medium mb-10 leading-relaxed">
          Independent admission portal for SRM IST. Helping students since 2018. Get verified info on cutoffs, fees, and direct admission routes.
        </p>
      </div>
      <div>
        <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-[10px] text-neon-blue">Quick Links</h4>
        <ul className="space-y-4 text-slate-500 font-bold text-sm">
          <li><a href="#about" className="hover:text-white">About Campus</a></li>
          <li><a href="#fees" className="hover:text-white">Fee Structure</a></li>
          <li><a href="#cutoffs" className="hover:text-white">Cutoff 2026</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-[10px] text-neon-blue">Support</h4>
        <ul className="space-y-4 text-slate-500 font-bold text-sm">
          <li><a href={getWAUrl("I have an urgent admission query.")} className="hover:text-white">WhatsApp 24/7</a></li>
          <li><a href="#" className="hover:text-white">Admission Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="mt-20 pt-8 border-t border-white/5 text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-700">
      © 2026 SRM ADMISSION HUB. NOT AFFILIATED WITH SRM IST OFFICIAL PORTAL.
    </div>
  </footer>
);

export const Scholarships = () => null;
