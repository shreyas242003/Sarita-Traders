"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { products } from "@/lib/data";

const categories = [
  { id: "all", name: "All Products", icon: "⚙️" },
  { id: "nuts", name: "Nuts", icon: "🔩" },
  { id: "bolts", name: "Bolts", icon: "🔧" },
  { id: "industrial-fasteners", name: "Industrial Fasteners", icon: "⚡" },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.categoryId === activeCategory);

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Product Range
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Precision-engineered fastening solutions designed for the most
            demanding industrial applications
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-slate-900 text-white shadow-lg scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className="mr-2 text-lg">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" layout>
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {product.name}
                      </h3>
                      {product.isFeatured && (
                        <span className="ml-3 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {product.longDescription}
                    </p>
                  </div>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <span className="mr-2">📋</span>
                    Specifications
                  </h4>
                  <ul className="space-y-2">
                    {Object.entries(product.specifications).map(
                      ([key, value], specIndex) => (
                        <li
                          key={specIndex}
                          className="text-sm text-slate-600 flex items-start"
                        >
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span>
                            <strong className="text-slate-700">{key}:</strong>{" "}
                            {value}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* Search Tags */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <span className="mr-2">🏷️</span>
                    Keywords
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.searchTags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-slate-200">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={scrollToContact}
                  >
                    Request Quote
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Our engineering team specializes in creating bespoke fastening
              solutions for unique industrial requirements. From prototype to
              full-scale production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Discuss Custom Requirements</Button>
              <Button variant="outline" size="lg">
                Download Product Catalog
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
