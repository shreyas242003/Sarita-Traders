"use client";

import { motion } from "framer-motion";
import { Category } from "@/data/categories";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

type QuoteRequest = {
  title: string;
  description: string;
  categoryId: string;
};

interface CategorySectionProps {
  category: Category;
  products: Product[];
  isActive?: boolean;
  onRequestQuote: (request: QuoteRequest) => void;
}

export default function CategorySection({
  category,
  products,
  isActive = false,
  onRequestQuote,
}: CategorySectionProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <motion.section
      id={`category-${category.id}`}
      className="py-16 scroll-mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1], // Professional easing curve
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 transition-all ${
              isActive
                ? "bg-slate-900 text-white shadow-lg scale-105"
                : "bg-slate-100 text-slate-700"
            }`}
            animate={isActive ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="mr-2 text-lg">{category.icon}</span>
            {category.title}
            <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
              {products.length} product{products.length !== 1 ? "s" : ""}
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {category.title}
          </motion.h2>

          <motion.p
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {category.description}
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          layout
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1 + (index % 4) * 0.1,
              }}
              viewport={{ once: true }}
              layout
            >
              <ProductCard product={product} onRequestQuote={onRequestQuote} />
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Products Highlight */}
        {products.some((p) => p.isFeatured) && (
          <motion.div
            className="mt-12 p-6 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl border border-slate-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">⭐</span>
              <h3 className="text-xl font-bold text-slate-900">
                Featured Products in {category.title}
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
              {products
                .filter((p) => p.isFeatured)
                .slice(0, 6)
                .map((product) => (
                  <div key={product.id} className="flex items-center">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-2 flex-shrink-0" />
                    <span className="text-slate-700 truncate">
                      {product.name}
                    </span>
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
