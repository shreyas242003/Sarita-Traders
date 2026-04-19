"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { companyInfo, contactInfo } from "@/lib/data";
import { getActiveCategories } from "@/data/categories";

const activeCategories = getActiveCategories();

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3  mb-4">
              <Image
                src="/large.png"
                alt="Sarita Traders"
                width={70}
                height={50}
                className="h-8 w-auto invert "
              />

              <div>
                <h3 className="text-xl font-bold">{companyInfo.name}</h3>
                <p className="text-slate-400 text-sm">{companyInfo.tagline}</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              {companyInfo.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {companyInfo.certifications.map((cert, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-2">
              {activeCategories.map((category) => (
                <li key={category.id}>
                  <span className="text-slate-300 hover:text-white transition-colors text-left block">
                    {category.title}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-slate-300">
              <p>{contactInfo.phone1}</p>
              <p>{contactInfo.email}</p>
              <div className="text-sm">
                <p>{contactInfo.address.street}</p>
                <p>
                  {contactInfo.address.city}, {contactInfo.address.state}
                </p>
                <p>
                  {contactInfo.address.country} - {contactInfo.address.pincode}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <button className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </button>
            <button className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
