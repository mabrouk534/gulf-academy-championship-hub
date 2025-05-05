
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Registration from "./pages/Registration";
import Schedule from "./pages/Schedule";
import Matches from "./pages/Matches";
import Standings from "./pages/Standings";
import TopScorers from "./pages/TopScorers";
import Disciplinary from "./pages/Disciplinary";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/top-scorers" element={<TopScorers />} />
          <Route path="/disciplinary" element={<Disciplinary />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
