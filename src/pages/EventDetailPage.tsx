"use client";

import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoCarousel from "@/components/PhotoCarousel";
import { events } from "@/data/eventsData";

const categoryColors: Record<string, string> = {
  FLAGSHIP:    "bg-yellow-400 text-black",
  SPORTS:      "bg-green-400 text-black",
  TECHNICAL:   "bg-blue-500 text-white",
  CULTURAL:    "bg-pink-500 text-white",
  ACADEMIC:    "bg-purple-500 text-white",
  NETWORKING:  "bg-orange-400 text-black",
};

export default function EventDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [activeImg, setActiveImg] = useState(0);

  const event = events.find(e => e.slug === slug);
  const idx = events.findIndex(e => e.slug === slug);
  const prevEvent = idx > 0 ? events[idx - 1] : null;
  const nextEvent = idx < events.length - 1 ? events[idx + 1] : null;

  useEffect(() => {
    if (!event) navigate("/events");
    setActiveImg(0);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!event) return null;

  const prevImg = () => setActiveImg(i => Math.max(0, i - 1));
  const nextImg = () => setActiveImg(i => Math.min(event.images.length - 1, i + 1));

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen text-foreground transition-colors">

        {/* ─── HERO ─── */}
        <section className="relative pt-32 lg:pt-40 min-h-[85vh] flex flex-col justify-end overflow-hidden bg-black">
          {/* Background main image */}
          <div className="absolute inset-0">
            <img
              src={`/events/${event.images[activeImg]}`}
              alt={event.name}
              className="w-full h-full object-cover opacity-50 transition-opacity duration-500"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
            <div className="absolute inset-0 bg-[radial-gradient(var(--foreground)_1px,transparent_0)] bg-[length:24px_24px] opacity-[0.05]" />
          </div>

          {/* Image navigation */}
          {event.images.length > 1 && (
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between px-6 lg:px-12 pointer-events-none">
              <button
                onClick={prevImg}
                disabled={activeImg === 0}
                className="pointer-events-auto w-14 h-14 border-2 border-white/30 bg-black/50 backdrop-blur flex items-center justify-center text-white disabled:opacity-30 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImg}
                disabled={activeImg === event.images.length - 1}
                className="pointer-events-auto w-14 h-14 border-2 border-white/30 bg-black/50 backdrop-blur flex items-center justify-center text-white disabled:opacity-30 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}

          {/* Content */}
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-10"
            >
              <Link
                to="/events"
                className="flex items-center gap-2 text-[11px] font-black text-white/40 hover:text-white uppercase tracking-widest transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                ALL EVENTS
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">{event.shortName}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/* Category + type */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className={`px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase ${categoryColors[event.category] || "bg-yellow-400 text-black"}`}>
                  {event.category}
                </span>
                <span className="text-[11px] font-black text-yellow-400 tracking-[0.3em] uppercase">
                  {event.type}
                </span>
              </div>

              <h1
                className="font-space font-black text-white uppercase tracking-tighter mb-6"
                style={{ fontSize: "clamp(3rem,10vw,8rem)", lineHeight: 0.85 }}
              >
                {event.name}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-2 text-[12px] font-black text-white/50 uppercase tracking-widest">
                  <Calendar className="w-4 h-4 text-yellow-400" />
                  {event.displayDate}
                </div>
                <div className="flex items-center gap-2 text-[12px] font-black text-white/50 uppercase tracking-widest">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  {event.location}
                </div>
              </div>
            </motion.div>

            {/* Image dots */}
            {event.images.length > 1 && (
              <div className="flex gap-2 mt-8">
                {event.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-2.5 h-2.5 border border-white/40 transition-all ${i === activeImg ? "bg-yellow-400 border-yellow-400" : "bg-white/20"}`}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ─── CONTENT ─── */}
        <section ref={ref} className="py-24 lg:py-36">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

              {/* Main content */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-[3px] bg-primary transition-colors" />
                    <span className="text-[11px] font-black tracking-[0.45em] uppercase text-foreground/40 transition-colors">ABOUT THIS EVENT</span>
                  </div>

                  <p className="text-xl font-bold uppercase tracking-tight text-foreground/70 leading-relaxed mb-8 border-l-4 border-yellow-400 pl-6 transition-colors">
                    {event.desc}
                  </p>

                  <p className="text-base font-bold text-foreground/60 uppercase tracking-wide leading-relaxed transition-colors">
                    {event.fullDesc}
                  </p>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  {/* Highlights */}
                  {event.highlights && (
                    <div className="border-[3px] border-primary p-8 mb-8 transition-colors" style={{ boxShadow: "6px 6px 0 0 var(--primary)" }}>
                      <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-foreground/50 mb-6 transition-colors">KEY HIGHLIGHTS</h3>
                      <div className="space-y-4">
                        {event.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-4">
                            <div className="shrink-0 w-8 h-8 bg-yellow-400 flex items-center justify-center border-2 border-primary mt-0.5" style={{ boxShadow: "2px 2px 0 0 var(--primary)" }}>
                              <span className="text-[10px] font-black text-black">0{i + 1}</span>
                            </div>
                            <span className="text-sm font-black text-foreground uppercase tracking-wide leading-tight transition-colors">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quick info */}
                  <div className="bg-background p-8 border-[3px] border-primary transition-colors" style={{ boxShadow: "6px 6px 0 0 #facc15" }}>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-foreground/40 mb-6 transition-colors">EVENT INFO</h3>
                    <div className="space-y-5">
                      <div className="flex justify-between items-center pb-4 border-b border-primary/10 transition-colors">
                        <span className="text-[10px] font-black text-foreground/40 uppercase tracking-widest transition-colors">DATE</span>
                        <span className="text-sm font-black text-foreground uppercase transition-colors">{event.displayDate}</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-primary/10 transition-colors">
                        <span className="text-[10px] font-black text-foreground/40 uppercase tracking-widest transition-colors">TYPE</span>
                        <span className="text-sm font-black text-yellow-400 uppercase">{event.type}</span>
                      </div>
                      <div className="flex justify-between items-start pb-4 border-b border-primary/10 transition-colors">
                        <span className="text-[10px] font-black text-foreground/40 uppercase tracking-widest shrink-0 mt-1 transition-colors">VENUE</span>
                        <span className="text-sm font-black text-foreground uppercase text-right ml-4 transition-colors">{event.location}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black text-foreground/40 uppercase tracking-widest transition-colors">CATEGORY</span>
                        <span className={`px-3 py-1 text-[9px] font-black tracking-[0.2em] uppercase ${categoryColors[event.category] || "bg-yellow-400 text-black"}`}>
                          {event.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* ─── PHOTO GALLERY CAROUSEL ─── */}
            {event.images.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-24"
              >
                <PhotoCarousel
                  images={event.images}
                  eventName={event.name}
                  basePath="/events"
                />
              </motion.div>
            )}

            {/* ─── NAV: PREV / NEXT ─── */}
            <div className="mt-24 pt-12 border-t-4 border-primary transition-colors grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevEvent ? (
                <Link
                  to={`/events/${prevEvent.slug}`}
                  className="group flex items-center gap-6 p-8 border-[3px] border-primary hover:bg-foreground hover:text-background transition-colors"
                  style={{ boxShadow: "5px 5px 0 0 var(--primary)" }}
                >
                  <ArrowLeft className="w-6 h-6 text-foreground group-hover:text-yellow-400 transition-colors shrink-0" />
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-foreground/40 group-hover:text-background/40 transition-colors block mb-1">PREVIOUS EVENT</span>
                    <span className="text-base font-space font-black text-foreground group-hover:text-background uppercase tracking-tight transition-colors">{prevEvent.shortName}</span>
                  </div>
                </Link>
              ) : <div />}

              {nextEvent && (
                <Link
                  to={`/events/${nextEvent.slug}`}
                  className="group flex items-center justify-end gap-6 p-8 border-[3px] border-primary hover:bg-foreground hover:text-background transition-colors"
                  style={{ boxShadow: "5px 5px 0 0 var(--primary)" }}
                >
                  <div className="text-right">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-foreground/40 group-hover:text-background/40 transition-colors block mb-1">NEXT EVENT</span>
                    <span className="text-base font-space font-black text-foreground group-hover:text-background uppercase tracking-tight transition-colors">{nextEvent.shortName}</span>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-foreground group-hover:text-yellow-400 transition-colors shrink-0" />
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
