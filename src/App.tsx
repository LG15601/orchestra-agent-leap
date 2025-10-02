import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Rediriger toutes les anciennes routes vers la page d'accueil */}
          <Route path="/admin" element={<Navigate to="/" replace />} />
          <Route path="/commercial" element={<Navigate to="/" replace />} />
          <Route path="/gestion" element={<Navigate to="/" replace />} />
          <Route path="/support" element={<Navigate to="/" replace />} />
          <Route path="/marketing" element={<Navigate to="/" replace />} />
          <Route path="/liste-attente" element={<Navigate to="/" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
