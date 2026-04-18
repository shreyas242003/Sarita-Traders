"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { categories } from "@/data/categories";

interface NavigationProps {
  onSearch: (query: string) => void;
  onCategorySelect: (categoryId: string) => void;
  searchQuery: string;
  activeCategory: string;
}

const menuLinks = [
  { name: "About Us", href: "#about" },
  { name: "Why Us", href: "#why-us" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navigation({
  onSearch,
  onCategorySelect,
  searchQuery,
  activeCategory,
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state
      setIsScrolled(currentScrollY > 10);

      // Hide/show navbar based on scroll direction (optional smooth behavior)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold - hide nav
        setIsNavVisible(false);
      } else {
        // Scrolling up or at top - show nav
        setIsNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleCategorySelect = (categoryId: string) => {
    onCategorySelect(categoryId);
    setIsCategoryDropdownOpen(false);

    // Smooth scroll to category section
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 64; // Height of the fixed navigation (h-16 = 64px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200"
          : "bg-white shadow-sm"
      }`}
      initial={{ y: -100 }}
      animate={{
        y: isNavVisible ? 0 : -100,
      }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1], // Professional easing
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Desktop Logo */}
          <motion.div
            className="hidden lg:flex items-center space-x-3 flex-shrink-0"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/large.png"
              alt="Ojas Industries"
              width={150}
              height={60}
              className="h-10 w-auto object-contain border-0"
            />
          </motion.div>

          {/* Mobile Logo Centered */}
          <motion.div
            className="lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/large.png"
              alt="Ojas Industries"
              width={170}
              height={120}
              className="h-12 w-auto object-contain border-0"
            />
          </motion.div>

          {/* Center: Search Bar & Category Filter - Desktop */}
          <div className="hidden lg:flex items-center space-x-3 flex-1 max-w-2xl mx-6">
            {/* Category Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() =>
                  setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                }
                className={`flex items-center px-4 py-2 rounded-lg border-4 border-yellow-300 transition-all ${
                  isCategoryDropdownOpen
                    ? "border-slate-400 bg-slate-50"
                    : "border-slate-300 hover:border-slate-400"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm font-medium text-slate-700 min-w-0">
                  {activeCategory === "all"
                    ? " Select Categories"
                    : categories.find((c) => c.id === activeCategory)?.title ||
                      "All Categories"}
                </span>
                <motion.svg
                  className="ml-2 w-4 h-4 text-slate-500"
                  animate={{ rotate: isCategoryDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {isCategoryDropdownOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl shadow-yellow-100 border border-slate-200 py-2 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.button
                      onClick={() => handleCategorySelect("all")}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                        activeCategory === "all"
                          ? "bg-slate-100 text-slate-900 font-medium"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      All Categories
                    </motion.button>
                    {categories.map((category) => (
                      <motion.button
                        key={category.id}
                        onClick={() => handleCategorySelect(category.id)}
                        className={`w-full px-4 py-2 text-left text-sm transition-colors flex items-center ${
                          activeCategory === category.id
                            ? "bg-slate-100 text-slate-900 font-medium"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                        whileHover={{ x: 4 }}
                      >
                        <span className="mr-2">{category.icon}</span>
                        {category.title}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search Bar */}
            <div className="relative flex-1">
              <motion.div
                className={`relative transition-all duration-200 ${
                  isSearchFocused ? "transform scale-105" : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="Search products, materials, specifications..."
                  value={searchQuery}
                  onChange={(e) => onSearch(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg transition-all focus:outline-none ${
                    isSearchFocused
                      ? "border-slate-400 shadow-md"
                      : "border-slate-300 hover:border-slate-400"
                  }`}
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                {searchQuery && (
                  <motion.button
                    onClick={() => onSearch("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      className="w-4 h-4"
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
              </motion.div>
            </div>
          </div>

          {/* Right: Menu Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            {menuLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-slate-700 hover:text-slate-900 font-medium text-sm transition-colors px-2 py-1"
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
              >
                {link.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <motion.span
                className={`w-4 h-0.5 bg-slate-700 transition-all ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <motion.span
                className={`w-4 h-0.5 bg-slate-700 transition-all ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <motion.span
                className={`w-4 h-0.5 bg-slate-700 transition-all ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-slate-200 bg-white"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 py-6 space-y-6 max-h-[70vh] overflow-y-auto">
                {/* Mobile Search */}
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => onSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-400"
                    />
                    <svg
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>

                  {/* Mobile Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Filter by Category
                    </label>
                    <select
                      value={activeCategory}
                      onChange={(e) => handleCategorySelect(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-400"
                    >
                      <option value="all">Select Categories</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Mobile Menu Links */}
                <div className="space-y-2">
                  {menuLinks.map((link) => (
                    <motion.button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="block w-full text-left py-3 text-slate-700 font-medium hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
