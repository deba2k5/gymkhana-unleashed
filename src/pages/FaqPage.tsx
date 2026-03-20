import { useState } from "react";
import { Plus, Minus, HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background dot-grid font-sans selection:bg-blue-100">
      <Navbar />
      
      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 md:py-48">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Column: Header & CTA */}
          <div className="lg:sticky lg:top-48">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-100">
              Help Center
            </div>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-gray-900 mb-8 leading-[0.85]">
              COMMON <br /><span className="text-gray-300">QUERIES.</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-lg mb-12">
              Everything you need to know about joining, participating, and leading within the IEM Gymkhana ecosystem.
            </p>
            
            <div className="p-8 premium-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-6">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">Still have questions?</h3>
                <p className="text-sm text-gray-500 font-medium mb-8">Can't find what you're looking for? Our team is active 24/7 on our Discord and Instagram channels.</p>
                <a 
                  href="mailto:help@iemgymkhana.in" 
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 hover:text-gray-900 transition-colors group"
                >
                  Contact Support
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`premium-card transition-all duration-300 ${isOpen ? 'ring-2 ring-blue-600' : 'hover:border-gray-300'}`}
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left p-8 flex items-center justify-between gap-6"
                  >
                    <span className="text-lg md:text-xl font-black text-gray-900 tracking-tight leading-tight">
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-gray-50 text-gray-400'}`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-8 pb-8 pt-0">
                      <p className="text-gray-500 text-lg font-medium leading-relaxed border-t border-gray-50 pt-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Background branding */}
            <div className="pt-20 opacity-10 flex justify-center lg:justify-start">
               <HelpCircle className="w-40 h-40 text-gray-400" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FaqPage;
