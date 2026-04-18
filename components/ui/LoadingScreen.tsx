"use client";

import { motion, AnimatePresence } from "framer-motion";
import LoadingSpinner from "./LoadingSpinner";

interface LoadingScreenProps {
  isLoading: boolean;
  message?: string;
}

export default function LoadingScreen({
  isLoading,
  message = "Loading...",
}: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-600 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-700 rounded-full blur-3xl" />
          </div>

          {/* Loading Content */}
          <motion.div
            className="relative text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Logo and Company Name */}
            <motion.div
              className="mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔩</span>
                </div>
                <div className="text-left">
                  <h1 className="text-2xl font-bold text-white">
                    Sarita Traders
                  </h1>
                  <p className="text-slate-300 text-sm">
                    Complete Hardware Solutions
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Rotating Nut */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
              }}
            >
              <LoadingSpinner size="lg" className="text-white mb-6" />
            </motion.div>

            {/* Loading Message */}
            <motion.p
              className="text-slate-300 text-lg font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {message}
            </motion.p>

            {/* Loading Dots */}
            <motion.div
              className="flex justify-center space-x-2 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 bg-slate-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
