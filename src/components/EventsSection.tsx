import { useEffect, useRef } from "react";
import { ArrowUpRight, MapPin, Clock } from "lucide-react";

// Separated featured event from the rest for distinct styling
const featuredEvent = { 
  id: "01", 
  name: "IEMPACT 2024", 
  date: "Mar 25", 
  desc: "Our flagship cultural extravaganza featuring national artists, intense inter-college competitions, and unforgettable nights. The biggest event of the year.", 
  type: "Flagship Cultural",
  location: "Main Campus Grounds",
  time: "6:00 PM onwards"
};

const events = [
  { id: "02", name: "Innovacion", date: "Apr 15", desc: "Annual tech fest pushing the boundaries of student engineering and applied research.", type: "Technical" },
  { id: "03", name: "Campus Marathon", date: "May 02", desc: "The annual 5K run promoting student fitness, mental health, and community unity.", type: "Athletics" },
  { id: "04", name: "Film Festival", date: "May 10", desc: "A weekend dedicated to student cinema, photography exhibitions, and storytelling.", type: "Creative" },
  { id: "05", name: "Alumni Summit", date: "Aug 20", desc: "Bridging generations of IEM graduates with current students through networking.", type: "Networking" },
];

const EventsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("animate-reveal-up");
      }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll("[data-reveal]").forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.1}s`;
      (el as HTMLElement).style.opacity = "0";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="events" ref={ref} className="relative py-24 md:py-40 bg-white border-t border-gray-100 dot-grid overflow-hidden">

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div data-reveal className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-4">
              Upcoming <span className="text-gray-400">Events.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              Mark your calendars. Here's what's happening around campus.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group">
            See all events
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Featured Event - Spans 2 columns, Dark striking contrast */}
          <div 
            data-reveal 
            className="md:col-span-2 group relative overflow-hidden bg-gray-900 rounded-[2rem] p-8 md:p-12 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer flex flex-col justify-between min-h-[400px]"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none transition-all duration-700 group-hover:bg-blue-500/30" />
            
            <div className="relative z-10 flex justify-between items-start mb-8">
              <span className="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/20">
                Featured • {featuredEvent.type}
              </span>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-white group-hover:text-gray-900 text-white transition-all duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-end gap-6 mb-6">
                <div>
                  <h3 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-2">
                    {featuredEvent.name}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-300 font-medium text-sm md:text-base">
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {featuredEvent.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredEvent.time}</span>
                  </div>
                </div>
                <div className="bg-white text-gray-900 rounded-2xl px-6 py-4 text-center md:ml-auto shrink-0 shadow-lg">
                  <span className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Date</span>
                  <span className="block text-2xl font-black">{featuredEvent.date}</span>
                </div>
              </div>
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                {featuredEvent.desc}
              </p>
            </div>
          </div>

          {/* Standard Event Cards */}
          {events.map((ev) => {
            const [month, day] = ev.date.split(" ");
            return (
              <div
                key={ev.id}
                data-reveal
                className="premium-card p-8 group flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[4rem] -z-0 transition-colors duration-500 group-hover:bg-blue-50/50" />
                
                <div className="relative z-10 flex items-start gap-5 mb-8">
                  {/* Calendar Tear-off style date */}
                  <div className="flex flex-col items-center justify-center bg-gray-50 rounded-2xl p-3 border border-gray-100 min-w-[72px] shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-300">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-blue-100 mb-0.5">{month}</span>
                    <span className="text-2xl font-black text-gray-900 group-hover:text-white">{day}</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1.5 block">
                      {ev.type}
                    </span>
                    <h3 className="text-xl font-black text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {ev.name}
                    </h3>
                  </div>
                </div>
                
                <p className="relative z-10 text-gray-500 font-medium leading-relaxed flex-1">
                  {ev.desc}
                </p>

                <div className="relative z-10 mt-8 flex items-center gap-2 text-xs font-black text-gray-900 group-hover:text-blue-600 transition-colors uppercase tracking-widest">
                  View Details
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default EventsSection;
