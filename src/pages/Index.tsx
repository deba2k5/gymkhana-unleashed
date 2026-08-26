import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SocietiesSection from "@/components/SocietiesSection";
import EventsSection from "@/components/EventsSection";
import NewsSection from "@/components/NewsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Seo from "@/seo/Seo";
import { seoRoutes } from "@/seo/seoConfig";

const Index = () => (
  <div className="min-h-screen bg-transparent">
    <Seo {...seoRoutes.home} />
    <Navbar />

    <HeroSection />
    <AboutSection />
    <SocietiesSection />
    <EventsSection />
    <NewsSection />
    <FaqSection />

    <Footer />
  </div>
);

export default Index;