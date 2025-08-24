import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
// import { AuthorizedLayout } from "./components/layout/AuthorizedLayout";
// import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
// import BlogPage from "./pages/BlogPage";
// import ContactPage from "./pages/ContactPage";
import InvestorsPage from "./pages/InvestorsPage";
import PartnershipPage from "./pages/PartnershipPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
// import DashboardPage from "./pages/DashboardPage";
// import ToolsPage from "./pages/ToolsPage";
// import SubscriptionPage from "./pages/SubscriptionPage";
// import TeamPage from "./pages/TeamPage";
// import HelpPage from "./pages/HelpPage";
// import FeedbackPage from "./pages/FeedbackPage";
import FundraisingPage from "./pages/FundraisingPage";
// import ProfilePage from "./pages/ProfilePage";
// import SettingsPage from "./pages/SettingsPage";
// import NotificationsPage from "./pages/NotificationsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>

          

          {/* Unauthorized Routes */}
          {/* <Route path="/" element={<Layout><HomePage /></Layout>} /> */}
          <Route path="/" element={<Layout><AboutPage /></Layout>} />
           {/* <Route path="/blog" element={<Layout><BlogPage /></Layout>} /> */}
           {/* <Route path="/contact" element={<Layout><ContactPage /></Layout>} /> */}
           <Route path="/investors" element={<Layout><InvestorsPage /></Layout>} />
           <Route path="/partnership" element={<Layout><PartnershipPage /></Layout>} />
           <Route path="/fundraising" element={<Layout><FundraisingPage /></Layout>} />

           
           <Route path="/signin" element={<SignInPage />} />
           <Route path="/signup" element={<SignUpPage />} />
           <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          
          {/* Authorized Routes */}
          {/* <Route path="/dashboard" element={<AuthorizedLayout><DashboardPage /></AuthorizedLayout>} />
          <Route path="/tools" element={<AuthorizedLayout><ToolsPage /></AuthorizedLayout>} />
          <Route path="/subscription" element={<AuthorizedLayout><SubscriptionPage /></AuthorizedLayout>} />
          <Route path="/team" element={<AuthorizedLayout><TeamPage /></AuthorizedLayout>} />
           <Route path="/help" element={<AuthorizedLayout><HelpPage /></AuthorizedLayout>} />
           <Route path="/feedback" element={<AuthorizedLayout><FeedbackPage /></AuthorizedLayout>} />
           <Route path="/profile" element={<AuthorizedLayout><ProfilePage /></AuthorizedLayout>} />
           <Route path="/settings" element={<AuthorizedLayout><SettingsPage /></AuthorizedLayout>} />
           <Route path="/notifications" element={<AuthorizedLayout><NotificationsPage /></AuthorizedLayout>} /> */}

           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;