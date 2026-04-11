"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle, MessageCircle, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "How can I join a society?",
    answer: "You can apply through the individual society pages or attend their recruitment drives held at the beginning of each semester. Follow our Instagram for live updates on recruitment windows."
  },
  {
    question: "Is there a registration fee for Gymkhana events?",
    answer: "Most flagship technical and cultural events have a nominal registration fee for external participants, while many internal workshops and seminars are free for IEM students."
  },
  {
    question: "Can I be a member of multiple societies?",
    answer: "Yes, you can be a member of multiple societies as long as you can manage the time commitments. We encourage inter-disciplinary participation!"
  },
  {
    question: "Who should I contact for event sponsorship?",
    answer: "Please reach out to our Public Relations and Marketing team at sponsorship@iemgymkhana.in with your proposal."
  },
  {
    question: "How are leadership roles selected in Gymkhana?",
    answer: "Leadership roles (Heads, Secretaries, etc.) are selected through a multi-stage process involving peer voting, society head recommendations, and interviews with the faculty committee."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-32 bg-white border-t-[4px] border-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Header & CTA */}
          <div className="lg:sticky lg:top-40">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-[3px] bg-black" />
              <span className="text-[11px] font-black tracking-[0.45em] uppercase text-black/50">
                HELP CENTER
              </span>
            </div>
            
            <h2 className="font-space font-black tracking-tighter text-black mb-8" style={{ fontSize: "clamp(3.5rem,8vw,7rem)", lineHeight: 0.85 }}>
              COMMON <br />
              <span className="text-outline">QUERIES.</span>
            </h2>
            
            <p className="text-lg font-bold text-black/60 uppercase tracking-widest leading-relaxed max-w-md mb-12">
              Everything you need to know about joining, participating, and leading within the IEM Gymkhana ecosystem.
            </p>
            
            <div className="p-8 border-[3px] border-black bg-yellow-400 brutalist-shadow relative overflow-hidden group">
              <div className="relative z-10 flex flex-col gap-6">
                <div className="w-12 h-12 border-[3px] border-black bg-white flex items-center justify-center text-black">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-space font-black text-black uppercase tracking-tight mb-2">Still have questions?</h3>
                  <p className="text-sm font-bold text-black/70 mb-8">Can't find what you're looking for? Our team is active 24/7 on our Discord and Instagram channels.</p>
                  <a 
                    href="mailto:help@iemgymkhana.in" 
                    className="inline-flex items-center gap-2 font-space font-black text-[12px] uppercase tracking-[0.15em] text-white px-6 h-12 border-[3px] border-black bg-black transition-all hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_#000]"
                  >
                    Contact Support
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="space-y-4 pt-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border-[3px] border-black bg-white transition-all duration-300 ${isOpen ? 'brutalist-shadow' : 'hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]'}`}
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6"
                  >
                    <span className="text-lg md:text-2xl font-space font-black text-black uppercase tracking-tight leading-tight">
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-10 h-10 border-[3px] border-black flex items-center justify-center transition-all ${isOpen ? 'bg-yellow-400 text-black rotate-180' : 'bg-transparent text-black'}`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 md:px-8 pb-8 pt-0">
                      <p className="text-black/70 text-base md:text-lg font-bold leading-relaxed border-t-[3px] border-black/10 pt-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
