import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/CustomCursor";
import { AtmosphericBackground } from "@/components/AtmosphericBackground";

import Loader from "@/components/Loader";

import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import SocietiesPage from "./pages/SocietiesPage.tsx";
import MembersPage from "./pages/MembersPage.tsx";
import OathPage from "./pages/OathPage.tsx";
import EventsPage from "./pages/EventsPage.tsx";
import EventDetailPage from "./pages/EventDetailPage.tsx";
import AwardsPage from "./pages/AwardsPage.tsx";
import MemberDetailPage from "./pages/MemberDetailPage.tsx";
import SelectCollegePage from "./pages/SelectCollegePage.tsx";
import UemComingSoonPage from "./pages/uem/UemComingSoonPage.tsx";

const queryClient = new QueryClient();

const COLLEGE_KEY = "gymkhana_college";

const AppRoutes = () => {
  const navigate = useNavigate();
  const [collegeChosen, setCollegeChosen] = useState(() => {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem(COLLEGE_KEY) !== null;
  });

  const handleSelectCollege = (college: "iem" | "uem") => {
    sessionStorage.setItem(COLLEGE_KEY, college);
    setCollegeChosen(true);
    if (college === "uem") navigate("/uem");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          collegeChosen ? (
            <Index />
          ) : (
            <SelectCollegePage onSelect={handleSelectCollege} />
          )
        }
      />
      <Route path="/oath" element={<OathPage />} />
      <Route path="/societies" element={<SocietiesPage />} />
      <Route path="/members" element={<MembersPage />} />
      <Route path="/members/:slug" element={<MemberDetailPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/:slug" element={<EventDetailPage />} />
      <Route path="/awards" element={<AwardsPage />} />

      {/* UEM — all sections coming soon */}
      <Route path="/uem" element={<UemComingSoonPage section="Home" />} />
      <Route path="/uem/oath" element={<UemComingSoonPage section="Oath" />} />
      <Route path="/uem/societies" element={<UemComingSoonPage section="Societies" />} />
      <Route path="/uem/members" element={<UemComingSoonPage section="Members" />} />
      <Route path="/uem/members/:slug" element={<UemComingSoonPage section="Members" />} />
      <Route path="/uem/events" element={<UemComingSoonPage section="Events" />} />
      <Route path="/uem/events/:slug" element={<UemComingSoonPage section="Events" />} />
      <Route path="/uem/awards" element={<UemComingSoonPage section="Awards" />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  const [loading, setLoading] = useState(() => {
    // Only show the intro splash once per browser session, and only on the homepage.
    if (typeof window === "undefined") return false;
    if (window.location.pathname !== "/") return false;
    return sessionStorage.getItem("gymkhana_intro_played") !== "1";
  });

  const finishLoading = () => {
    sessionStorage.setItem("gymkhana_intro_played", "1");
    setLoading(false);
  };

  // ✅ SHOW LOADER FIRST
  if (loading) return <Loader onFinish={finishLoading} />;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" attribute="class">
        <AtmosphericBackground />
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <CustomCursor />

          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>

        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
