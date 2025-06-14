
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EntreprisePage from "./pages/Entreprise";
import NotFound from "./pages/NotFound";
import ExperiencesPage from "./pages/Experiences";
import APRRPage from "./pages/APRR";
import SkyepharmaPage from "./pages/Skyepharma";
import SytralPage from "./pages/Sytral";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";
import SkillsPage from "./pages/Skills";
import MagellanSagtPage from "./pages/MagellanSagt";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/entreprise" element={<EntreprisePage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/aprr" element={<APRRPage />} />
          <Route path="/skyepharma" element={<SkyepharmaPage />} />
          <Route path="/sytral" element={<SytralPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/magellan-sagt" element={<MagellanSagtPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
