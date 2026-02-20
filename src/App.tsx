import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StripHoezenPage from "./pages/StripHoezenPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AdviceDetailPage from "./pages/AdviceDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./contexts/CartContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/striphoezen" element={<StripHoezenPage />} />
            <Route path="/striphoezen/:slug" element={<ProductDetailPage />} />
            <Route path="/advies/:slug" element={<AdviceDetailPage />} />
            <Route path="/winkelmandje" element={<CartPage />} />
            <Route path="/bestellen" element={<CheckoutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
