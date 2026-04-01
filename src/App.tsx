import { Routes, Route } from "react-router-dom";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import ScrollToTop from "@/components/ScrollToTop";

import HomePage from "@/pages/HomePage";
import StretchCeilingsPage from "@/pages/StretchCeilingsPage";
import PricingPage from "@/pages/PricingPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ContactPage from "@/pages/ContactPage";
import AboutPage from "@/pages/AboutPage";
import LivingRoomPage from "@/pages/LivingRoomPage";
import BathroomPage from "@/pages/BathroomPage";
import KitchenPage from "@/pages/KitchenPage";
import MikvehPage from "@/pages/MikvehPage";
import MattePage from "@/pages/MattePage";
import GlossyPage from "@/pages/GlossyPage";
import LightedCeilingPage from "@/pages/LightedCeilingPage";
import AcousticPage from "@/pages/AcousticPage";
import PrintedPage from "@/pages/PrintedPage";
import LEDStripPage from "@/pages/LEDStripPage";
import MagneticTrackPage from "@/pages/MagneticTrackPage";
import VsDrywallPage from "@/pages/VsDrywallPage";
import GuidePage from "@/pages/GuidePage";
import RepairPage from "@/pages/RepairPage";
import BarrisolPage from "@/pages/BarrisolPage";
import BusinessPage from "@/pages/BusinessPage";
import ArchitectsPage from "@/pages/ArchitectsPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stretch-ceilings" element={<StretchCeilingsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/stretch-ceiling-living-room" element={<LivingRoomPage />} />
          <Route path="/stretch-ceiling-bathroom" element={<BathroomPage />} />
          <Route path="/stretch-ceiling-kitchen" element={<KitchenPage />} />
          <Route path="/stretch-ceiling-mikveh" element={<MikvehPage />} />
          <Route path="/stretch-ceiling-matte" element={<MattePage />} />
          <Route path="/stretch-ceiling-glossy" element={<GlossyPage />} />
          <Route path="/lighted-stretch-ceiling" element={<LightedCeilingPage />} />
          <Route path="/acoustic-stretch-ceiling" element={<AcousticPage />} />
          <Route path="/printed-stretch-ceiling" element={<PrintedPage />} />
          <Route path="/stretch-ceiling-led-strip" element={<LEDStripPage />} />
          <Route path="/stretch-ceiling-magnetic-track" element={<MagneticTrackPage />} />
          <Route path="/stretch-ceiling-vs-drywall" element={<VsDrywallPage />} />
          <Route path="/stretch-ceiling-guide" element={<GuidePage />} />
          <Route path="/stretch-ceiling-repair" element={<RepairPage />} />
          <Route path="/barrisol" element={<BarrisolPage />} />
          <Route path="/stretch-ceilings-for-business" element={<BusinessPage />} />
          <Route path="/stretch-ceilings-for-architects" element={<ArchitectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
      <StickyMobileCTA />
    </>
  );
}
