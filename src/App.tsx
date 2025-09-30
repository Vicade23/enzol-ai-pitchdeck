import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import AboutPage from "./pages/AboutPage";
import InvestorsPage from "./pages/InvestorsPage";
import PartnershipPage from "./pages/PartnershipPage";
import FundraisingPage from "./pages/FundraisingPage";
import ApplyPartnershipPage from "./pages/ApplyPartnershipPage";
import ContactInvestmentTeamPage from "./pages/ContactInvestmentTeamPage";
import PartnershipGuidePage from "./pages/PartnershipGuidePage";
import ViewFinancialDataPage from "./pages/ViewFinancialDataPage";
import ViewPitchDeckPage from "./pages/ViewPitchDeckPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><AboutPage /></Layout>} />
           <Route path="/investors" element={<Layout><InvestorsPage /></Layout>} />
           <Route path="/partnership" element={<Layout><PartnershipPage /></Layout>} />
           <Route path="/fundraising" element={<Layout><FundraisingPage /></Layout>} />
           <Route path="/apply-partnership" element={<Layout><ApplyPartnershipPage /></Layout>} />
           <Route path="/contact-investment-team" element={<Layout><ContactInvestmentTeamPage /></Layout>} />
           <Route path="/partnership-guide" element={<Layout><PartnershipGuidePage /></Layout>} />
           <Route path="/view-financial-data" element={<Layout><ViewFinancialDataPage /></Layout>} />
           <Route path="/view-pitch-deck" element={<Layout><ViewPitchDeckPage /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;