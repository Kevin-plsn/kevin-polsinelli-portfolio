import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Entreprise from "./pages/Entreprise";
import NotFound from "./pages/NotFound";
import Experiences from "./pages/Experiences";
import APRR from "./pages/APRR";
import Skyepharma from "./pages/Skyepharma";
import Sytral from "./pages/Sytral";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import MagellanSagtPage from "./pages/MagellanSagt";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/entreprise" element={<Entreprise />} />
            <Route path="/skyepharma" element={<Skyepharma />} />
            <Route path="/aprr" element={<APRR />} />
            <Route path="/sytral" element={<Sytral />} />
            <Route path="/magellan-sagt" element={<MagellanSagtPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
