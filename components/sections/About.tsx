'use client';

import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { companyInfo, stats } from '@/lib/data';

const capabilities = [
  {
    icon: '🎯',
    title: 'Precision Manufacturing',
    description: 'State-of-the-art CNC machines and quality control systems ensuring micron-level precision in every component.'
  },
  {
    icon: '🔬',
    title: 'Advanced Materials',
    description: 'Premium grade stainless steel, carbon steel, and specialty alloys sourced from certified suppliers worldwide.'
  },
  {
    icon: '⚡',
    title: 'Rapid Prototyping',
    description: 'Quick turnaround from concept to prototype, enabling faster product development and market entry.'
  },
  {
    icon: '📊',
    title: 'Quality Assurance',
    description: 'Comprehensive testing protocols including tensile strength, corrosion resistance, and dimensional accuracy.'
  },
  {
    icon: '🌍',
    title: 'Global Standards',
    description: 'Compliance with international standards including ISO, DIN, ASTM, and BIS for global market acceptance.'
  },
  {
    icon: '🚀',
    title: 'Scalable Production',
    description: 'Flexible manufacturing capacity from small batches to high-volume production runs up to millions of units.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
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
            Engineering Excellence Since {companyInfo.established}
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {companyInfo.description}
          </motion.p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Built on a Foundation of Trust
            </h3>
            <div className="space-y-4 text-slate-600">
              <p>
                Founded in {companyInfo.established}, Ojas Industries began as a small precision manufacturing workshop with a vision to deliver world-class fastening solutions to Indian industries.
              </p>
              <p>
                Over the decades, we have evolved into a leading manufacturer, serving clients across construction, automotive, aerospace, and heavy engineering sectors. Our commitment to quality and innovation has earned us the trust of industry leaders worldwide.
              </p>
              <p>
                Today, we operate from a state-of-the-art facility equipped with advanced CNC machines, automated quality control systems, and a team of skilled engineers dedicated to pushing the boundaries of precision manufacturing.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card padding="lg" className="bg-white shadow-xl">
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Our Certifications</h4>
              <div className="space-y-4">
                {companyInfo.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-3 bg-slate-50 rounded-lg"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-slate-900">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          id="capabilities"
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Our Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="text-center h-full">
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {capability.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {capability.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-slate-300 text-lg">
              Our commitment to excellence reflected in numbers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-slate-300 text-sm sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

