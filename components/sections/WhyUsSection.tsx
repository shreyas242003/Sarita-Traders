"use client";

import { motion } from "framer-motion";
import {
  Handshake,
  Truck,
  Banknote,
  ClipboardList,
  Droplet,
  Shield,
} from "lucide-react";

const reasons = [
  {
    icon: <Handshake className="text-amber-500" size={36} />,
    title: "No Hassle Returns",
    description:
      "Unused, standard shelf items can be returned happily. (Applicable on certain products only)",
  },
  {
    icon: <Truck className="text-amber-500" size={36} />,
    title: "Site Delivery",
    description:
      "Fast and reliable delivery directly to your construction or renovation site.",
  },
  {
    icon: <Banknote className="text-amber-500" size={36} />,
    title: "Wholesale Pricing",
    description:
      "Competitive wholesale rates for contractors, builders, and repeat customers.",
  },
  {
    icon: <ClipboardList className="text-amber-500" size={36} />,
    title: "Express Loading",
    description:
      "Labor sitting idle? Skip the market traffic. WhatsApp your material list, stay on your vehicle, and we will load your order in under 2 minutes.",
  },
  {
    icon: <Droplet className="text-amber-500" size={36} />,
    title: "Leakage Panic",
    description:
      "Don't panic. Bring a photo of your broken fitting and get our Instant Fix-It Kits with the exact washers, tapes, and tools to stop the flood.",
  },
  {
    icon: <Shield className="text-amber-500" size={36} />,
    title: "Quality Assurance",
    description:
      "Authentic brands and materials guaranteed (Exceptions: Wear, tear, or failures caused by incorrect site application are not covered under replacement policies)",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 bg-white">
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
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Why Choose Sarita Traders?
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We combine decades of manufacturing expertise with cutting-edge
            technology to deliver fastening solutions that exceed expectations.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Experience the Sarita Traders Difference?
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Sarita Traders for
              everything from urgent home repairs to massive site projects
            </p>
            <motion.button
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
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
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
