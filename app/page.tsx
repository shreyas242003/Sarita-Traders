"use client";

import { useState } from "react";
import ProductCatalog from "@/components/product/ProductCatalog";
import AboutSection from "@/components/sections/AboutSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import BrandsSection from "@/components/sections/BrandsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

type QuoteRequest = {
  title: string;
  description: string;
  categoryId: string;
};

export default function Home() {
  const [quoteRequest, setQuoteRequest] = useState<QuoteRequest | null>(null);

  const handleRequestQuote = (request: QuoteRequest) => {
    setQuoteRequest(request);
  };

  return (
    <main className="min-h-screen bg-white">
      <ProductCatalog onRequestQuote={handleRequestQuote} />
      <BrandsSection />
      <WhyUsSection />
      <AboutSection />

      <ReviewsSection />
      <FAQSection />
      <ContactSection initialQuoteRequest={quoteRequest} />
      <Footer />
    </main>
  );
}
