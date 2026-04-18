"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import { companyInfo, stats } from "@/lib/data";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-900 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-600 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Established {companyInfo.established} • ISO 9001:2015 Certified
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Pune’s Trusted
              <span className="block text-slate-600">
                Plumbing & Hardware Hub
              </span>
              <span className="block bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Fasteners
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Leading manufacturer of high-quality industrial fasteners, serving
              diverse industries with precision-engineered solutions for over 25
              years.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button size="lg" onClick={scrollToProducts}>
                Explore Products
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
              <Button variant="outline" size="lg" onClick={scrollToContact}>
                Get Custom Quote
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 shadow-2xl"
                whileHover={{
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Logo Display */}
                <div className="flex items-center justify-center h-64 sm:h-80">
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src="/large.png"
                      alt="Sarita Traders Logo"
                      width={120}
                      height={120}
                      className="mx-auto mb-6 drop-shadow-lg"
                      priority
                    />
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      {companyInfo.name}
                    </h2>
                    <p className="text-slate-600 font-medium">
                      {companyInfo.tagline}
                    </p>
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="text-2xl">⚡</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-slate-900 rounded-2xl shadow-lg flex items-center justify-center"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="text-2xl text-white">🔩</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-2 bg-slate-400 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
