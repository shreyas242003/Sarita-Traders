"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Product } from "@/data/products";

type QuoteRequest = {
  title: string;
  description: string;
  categoryId: string;
};

interface ProductCardProps {
  product: Product;
  className?: string;
  onRequestQuote?: (request: QuoteRequest) => void;
}

const stockStatusColors: Record<string, string> = {
  "in-stock": "bg-green-100 text-green-800",
  "low-stock": "bg-yellow-100 text-yellow-800",
  "out-of-stock": "bg-red-100 text-red-800",
  "made-to-order": "bg-blue-100 text-blue-800",
};

const stockStatusLabels: Record<string, string> = {
  "in-stock": "In Stock",
  "low-stock": "Low Stock",
  "out-of-stock": "Out of Stock",
  "made-to-order": "Made to Order",
};

export default function ProductCard({
  product,
  className = "",
  onRequestQuote,
}: ProductCardProps) {
  const handleEnquire = () => {
    if (onRequestQuote) {
      onRequestQuote({
        title: product.name,
        description: product.shortDescription,
        categoryId: product.categoryId,
      });
    }

    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <motion.div
      className={`bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden group ${className}`}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow:
          "0 25px 30px -5px rgb(0 0 0 / 0.15), 0 10px 15px -6px rgb(0 0 0 / 0.1)",
        borderColor: "rgb(71 85 105 / 0.4)",
      }}
      whileTap={{ scale: 0.98 }} // Better mobile touch feedback
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1], // Professional easing
      }}
      layout
    >
      {/* Product Image */}
      <div className="relative h-48 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
            onError={(e) => {
              // Fallback to placeholder image
              e.currentTarget.src = "/products/placeholder.svg";
            }}
          />
        </motion.div>

        {/* Featured Badge */}
        {product.isFeatured && (
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 bg-slate-900 text-white text-xs font-medium rounded">
              Featured
            </span>
          </div>
        )}

        {/* Stock Status Badge */}
        <div className="absolute top-2 right-2">
          <span
            className={`px-2 py-1 text-xs font-medium rounded ${stockStatusColors[product.stockStatus]}`}
          >
            {stockStatusLabels[product.stockStatus]}
          </span>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-5">
        {/* Product Name */}
        <motion.h3
          className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors"
          layoutId={`product-title-${product.id}`}
        >
          {product.name}
        </motion.h3>

        {/* Short Description */}
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Key Specifications */}
        <div className="space-y-2 mb-5">
          <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
            Specifications
          </h4>
          <div className="grid grid-cols-1 gap-1 text-xs">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="text-slate-500">{key}:</span>
                <span className="text-slate-900 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="flex items-center justify-between mb-4 text-xs text-slate-500">
          <div>
            {product.minOrderQuantity && (
              <span>Min Order: {product.minOrderQuantity} pcs</span>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={handleEnquire}
          className="w-full bg-slate-900 text-white py-3 px-4 rounded-lg text-sm font-medium transition-all hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 min-h-[44px] touch-manipulation"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          Request Quote
          <motion.svg
            className="inline ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </motion.svg>
        </motion.button>
      </div>
    </motion.div>
  );
}
