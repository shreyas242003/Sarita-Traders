"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import CategorySection from "./CategorySection";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { categories, getActiveCategories } from "@/data/categories";
import {
  products,
  searchProducts,
  getProductsByCategory,
} from "@/data/products";

type QuoteRequest = {
  title: string;
  description: string;
  categoryId: string;
};

interface ProductCatalogProps {
  onRequestQuote: (request: QuoteRequest) => void;
}

export default function ProductCatalog({
  onRequestQuote,
}: ProductCatalogProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const activeCategories = getActiveCategories();

  // Simulate loading for demo purposes
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading simulation

    return () => clearTimeout(loadingTimer);
  }, []);

  // Filtered products based on search and category
  const filteredProducts = useMemo(() => {
    let results = searchQuery
      ? searchProducts(searchQuery)
      : products.filter((p) => p.isActive);

    if (activeCategory !== "all") {
      results = results.filter(
        (product) => product.categoryId === activeCategory,
      );
    }

    return results;
  }, [searchQuery, activeCategory]);

  // Products grouped by category for display
  const productsByCategory = useMemo(() => {
    if (searchQuery) {
      // When searching, show all matching products regardless of category structure
      return [
        {
          category: {
            id: "search-results",
            title: `Search Results`,
            description: `Found ${filteredProducts.length} product${filteredProducts.length !== 1 ? "s" : ""} matching "${searchQuery}"`,
            icon: "🔍",
            sortOrder: 0,
            isActive: true,
          },
          products: filteredProducts,
        },
      ];
    }

    if (activeCategory === "all") {
      // Show all categories with their products
      return activeCategories
        .map((category) => ({
          category,
          products: getProductsByCategory(category.id),
        }))
        .filter((item) => item.products.length > 0);
    } else {
      // Show only selected category
      const category = categories.find((c) => c.id === activeCategory);
      if (category) {
        return [
          {
            category,
            products: filteredProducts,
          },
        ];
      }
    }

    return [];
  }, [searchQuery, activeCategory, filteredProducts, activeCategories]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Reset category filter when searching
    if (query && activeCategory !== "all") {
      setActiveCategory("all");
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Clear search when selecting specific category
    if (categoryId !== "all" && searchQuery) {
      setSearchQuery("");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <LoadingScreen
        isLoading={isLoading}
        message="Initializing product catalog..."
      />

      <Navigation
        onSearch={handleSearch}
        onCategorySelect={handleCategorySelect}
        searchQuery={searchQuery}
        activeCategory={activeCategory}
      />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Pune’s Trusted
              <span className="block text-slate-600">
                Plumbing & Hardware Hub
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl text-slate-800 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Legacy of 27 Years. Skip market traffic. Drive-through loading
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-8 border-t border-slate-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">
                  {activeCategories.length}
                </div>
                <div className="text-sm text-slate-600">Product Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">
                  {products.filter((p) => p.isActive).length}+
                </div>
                <div className="text-sm text-slate-600">Products Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">25+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">
                  Genuine Brands
                </div>
                <div className="text-sm text-slate-600">Retail & Wholesale</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Summary */}
        {(searchQuery || activeCategory !== "all") && (
          <motion.section
            className="py-8 bg-slate-50 border-b border-slate-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <h2 className="text-lg font-semibold text-slate-900">
                    {searchQuery ? (
                      <>Search Results for "{searchQuery}"</>
                    ) : (
                      <>
                        Showing{" "}
                        {categories.find((c) => c.id === activeCategory)
                          ?.title || "All Products"}
                      </>
                    )}
                  </h2>
                  <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">
                    {filteredProducts.length} product
                    {filteredProducts.length !== 1 ? "s" : ""}
                  </span>
                </div>

                {(searchQuery || activeCategory !== "all") && (
                  <motion.button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                    }}
                    className="text-sm text-slate-600 hover:text-slate-900 flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Clear Filters
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                )}
              </div>
            </div>
          </motion.section>
        )}

        {/* Product Sections */}
        <AnimatePresence mode="wait">
          {productsByCategory.length > 0 ? (
            <motion.div key="products">
              {productsByCategory.map((item) => (
                <CategorySection
                  key={`${item.category.id}-${searchQuery}-${activeCategory}`}
                  category={item.category}
                  products={item.products}
                  isActive={activeCategory === item.category.id}
                  onRequestQuote={onRequestQuote}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              className="py-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  No products found
                </h3>
                <p className="text-slate-600 mb-6">
                  {searchQuery
                    ? `No products match your search for "${searchQuery}". Try different keywords or browse our categories.`
                    : "No products available in this category at the moment."}
                </p>
                <motion.button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse All Products
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
