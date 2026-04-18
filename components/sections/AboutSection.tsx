"use client";

import { motion } from "framer-motion";
import { companyInfo } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              About {companyInfo.name}
            </motion.h2>

            <motion.p
              className="text-lg text-slate-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {companyInfo.description}
            </motion.p>

            {/* <motion.p
              className="text-slate-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Founded in {companyInfo.established}, we have evolved from a small precision workshop to one of India's leading fastener manufacturers. Our state-of-the-art facility combines traditional craftsmanship with cutting-edge technology to deliver products that meet the most stringent quality requirements.
            </motion.p> */}

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  25+
                </div>
                <div className="text-sm text-slate-600">
                  Years of Excellence
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  10M+
                </div>
                <div className="text-sm text-slate-600">Products Sold</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Our Certifications
              </h3>
              <div className="space-y-4">
                {companyInfo.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-3 bg-slate-50 rounded-lg"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="font-medium text-slate-900">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
