import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import StripHoezenPage from "./pages/StripHoezenPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AdviceDetailPage from "./pages/AdviceDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import ShippingPage from "./pages/ShippingPage";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./contexts/CartContext";

const queryClient = new QueryClient();

// Component to handle scroll to top on route changes
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/striphoezen" element={<StripHoezenPage />} />
            <Route path="/striphoezen/:slug" element={<ProductDetailPage />} />
            <Route path="/advies/:slug" element={<AdviceDetailPage />} />
            <Route path="/winkelmandje" element={<CartPage />} />
            <Route path="/bestellen" element={<CheckoutPage />} />
            <Route path="/algemene-voorwaarden" element={<TermsPage />} />
            <Route path="/privacybeleid" element={<PrivacyPage />} />
            <Route path="/levering" element={<ShippingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
