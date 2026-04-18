"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

const navigation = [
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToContact = () => {
    scrollToSection("#contact");
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/large.png"
              alt="Sarita Traders"
              width={40}
              height={40}
              className="h-10 w-auto rounded-full bg-transparent p-1 shadow-sm"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">
                Sarita Traders
              </span>
              <span className="text-xs text-slate-600 leading-none">
                Supply Leaders
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={scrollToContact}>
              Get Quote
            </Button>
            <Button size="sm" onClick={scrollToContact}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
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
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-slate-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-slate-700 font-medium hover:text-slate-900"
                  whileHover={{ x: 4 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={scrollToContact}
                >
                  Get Quote
                </Button>
                <Button className="w-full" onClick={scrollToContact}>
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
