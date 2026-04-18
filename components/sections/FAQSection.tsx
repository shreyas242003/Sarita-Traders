"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question:
      "I don't know the technical name of the broken part. How can I buy a replacement?",
    answer:
      "Don't worry at all! You don't need to know the names. Just click a photo of the broken tap, pipe, or lock on your phone and show it to us (or send it on WhatsApp). Our owner has 27 years of experience and will instantly know exactly what you need.",
  },
  {
    question:
      "My expensive bathroom taps have white, hard-water stains. How do I clean them?",
    answer:
      "Please do not use harsh toilet acids on your taps, it will burn the shine! We sell gentle, special liquid cleaners and polish made specifically to remove hard water stains safely. We can also give you small tap filters (aerators) to catch dirt before it comes out.",
  },
  {
    question:
      "My kitchen sink is completely blocked. Do I need to call a plumber immediately?",
    answer:
      'Not always. We have simple DIY (Do-It-Yourself) solutions. For small blocks, we have safe drain-cleaning powders. For tough blocks, we sell flexible "drain springs" that you can easily push down the pipe to pull out hair and garbage yourself in 5 minutes.',
  },
  {
    question:
      "My tap is dripping water constantly. Do I have to buy a brand new tap?",
    answer:
      "Usually, no! Most of the time, a dripping tap just needs a new rubber washer or a small inner part that costs very little. Come to Sarita Traders first; our rule is to always help you fix your old item cheaply before ever suggesting you buy a new one.",
  },
  {
    question:
      "I need strong cleaning supplies for my daily housekeeping. Do you sell those?",
    answer:
      "Yes, we are a one-stop shop for housekeeping. We stock heavy-duty floor cleaners, toilet acids, high-quality bathroom wipers, hard brushes for cement stains, and microfiber cloths to keep your home sparkling clean.",
  },
  {
    question:
      "I want to hang pictures and fix loose furniture. Can I buy items in small quantities?",
    answer:
      "Absolutely. We don't just sell in bulk. Whether you need just 10 screws with wall plugs (gitti), sticky hooks that won't damage your paint, or a small tube of Fevicol for a loose cabinet drawer, we are happy to help you with your small home projects.",
  },
  {
    question:
      "I ride a two-wheeler and avoid the main market because of heavy traffic. Is your shop easy to visit?",
    answer:
      "Very easy! Our shop is perfectly located right on the edge of the market with open space in front. You don't need to enter the crowded lanes. Just drive up, stay on your vehicle, and we will hand over your packed items in under 2 minutes.",
  },
  {
    question:
      "I don't know much about hardware. How do I know I am getting the right quality and price?",
    answer:
      "At Sarita Traders, we have built our name on 27 years of honesty. We will clearly explain the difference between a cheap temporary fix and a long-lasting premium product. We treat every homemaker like family—we will never let you buy something you don't actually need.",
  },

  {
    question: "I am not sure which fitting or chemical I need. Can you help?",
    answer:
      "Absolutely. For 27 years, our founder has been providing expert technical guidance to Pune homeowners and contractors. Bring a photo of your leakage, broken part, or architectural plan, and we will give you the exact, most cost-effective solution.",
  },
  {
    question: "What if a specific part or brand is not listed on your website?",
    answer:
      'Our website showcases our highest-demand items, but our true inventory is massive. Through our "Endless Aisle" network, we can source over 10,000+ premium items from our partner warehouses within 24 hours. Just send us a photo of what you are looking for.',
  },
  {
    question: "Do you offer wholesale pricing for contractors and plumbers?",
    answer:
      "Yes, we have a dedicated Priority Partner program for civil contractors, plumbers, and interior designers. This includes wholesale volume discounts, priority sourcing, and express site loading. Contact us to set up your trade account.",
  },
  {
    question: "What is your return policy for unused site materials?",
    answer:
      "We understand that BOQs (Bill of Quantities) change during a project. For our registered contractor partners, we offer a hassle-free return and exchange policy on unused, undamaged standard materials. We want to be your backend inventory partner, not a burden.",
  },

  {
    question: "Do you deliver directly to construction sites?",
    answer:
      "Yes. For bulk orders and our Priority Partners, we arrange fast, site-to-site delivery via trusted local logistics partners like Porter and Borzo, ensuring your labor never sits idle waiting for materials.",
  },
  {
    question: "What brands and categories do you specialize in?",
    answer:
      "We stock premium, authentic materials across Plumbing (CPVC, UPVC, SWR), Sanitary Ware (Jaquar, standard ceramics), Architectural Hardware (Godrej locks, hinges), Adhesives (Pidilite, Dr. Fixit), Power Tool accessories, and heavy-duty cleaning chemicals.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Find answers to common questions about our products and services
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: "rgb(248 250 252)" }}
              >
                <span className="text-lg font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <motion.svg
                  className="w-5 h-5 text-slate-500 flex-shrink-0"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
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
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 border-t border-slate-100">
                      <p className="text-slate-600 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-slate-600 mb-6">
              Our technical team is ready to help with your specific
              requirements
            </p>
            <motion.button
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Experts
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
