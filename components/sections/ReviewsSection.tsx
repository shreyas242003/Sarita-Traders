"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Meera Joshi",
    role: "Homeowner",
    avatar: "MJ",
    rating: 5,
    review:
      "I brought in a broken tap thinking I needed to buy an expensive new one. The owner just gave me a ₹20 spare part and explained how to fix it myself. You rarely find this kind of honest advice anymore.",
  },
  {
    name: "Rajesh Patil",
    role: "Civil Contractor",
    avatar: "RP",
    rating: 5,
    review:
      "The WhatsApp ordering and 2-minute drive-through pickup is a game changer. My tempo doesn't get stuck in Kasba Peth traffic, and my site labor never sits idle waiting for materials.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Interior Designer",
    avatar: "SK",
    rating: 5,
    review:
      "If they don't have a specific premium architectural fitting on the shelf, they source it for me within 24 hours. 100% genuine brands and zero headaches for my high-end clients.",
  },
  {
    name: "Amit Sharma",
    role: "Plumber",
    avatar: "AS",
    rating: 5,
    review:
      "I have been buying materials from here for over 15 years. They always understand exactly what technical part I need, and the wholesale pricing for trade partners is excellent.",
  },
];

const getStarIcons = (count: number) => {
  return Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`text-sm ${index < count ? "text-amber-400" : "text-slate-300"}`}
    >
      ★
    </span>
  ));
};

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const durationMs = 4500;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, durationMs);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slide = carousel.children[activeIndex] as HTMLElement | null;
    if (slide) {
      const offset =
        slide.offsetLeft - (carousel.offsetWidth - slide.offsetWidth) / 2;
      carousel.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    setProgress(0);
    let rafId: number;
    const startTime = performance.now();

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const nextProgress = Math.min(100, (elapsed / durationMs) * 100);
      setProgress(nextProgress);
      if (nextProgress < 100) {
        rafId = window.requestAnimationFrame(updateProgress);
      }
    };

    rafId = window.requestAnimationFrame(updateProgress);
    return () => window.cancelAnimationFrame(rafId);
  }, [activeIndex]);

  return (
    <section id="reviews" className="py-20  text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-amber-500 mb-3">
            Customer Love
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold  text-slate-900 mb-4">
            Real Reviews from Happy Customers
          </h2>
          <p className="text-base sm:text-lg text-slate-900 max-w-2xl mx-auto">
            See why homeowners, contractors, and designers trust Sarita Traders
            for quality, speed, and expert service.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute -left-10 top-1/2 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />

          <div
            ref={carouselRef}
            className="relative flex gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory"
          >
            {reviews.map((review, index) => (
              <motion.article
                key={review.name}
                className="snap-center shrink-0 w-[calc(100%-2rem)] sm:w-[80%] md:w-[45%] lg:w-[34%] xl:w-[30%] bg-slate-900/95 border border-white/10 rounded-3xl p-7 shadow-2xl shadow-slate-950/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-amber-400 via-orange-400 to-pink-500 text-lg font-bold text-slate-950 shadow-lg shadow-orange-500/20">
                      {review.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {review.name}
                      </h3>
                      <p className="text-sm text-slate-400">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {getStarIcons(review.rating)}
                  </div>
                </div>

                <div className="max-h-44 overflow-y-auto pr-1 text-slate-300 leading-relaxed text-base">
                  <p>“{review.review}”</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-full bg-slate-800/70 h-2">
            <div
              className="h-2 rounded-full bg-amber-300 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-center items-center gap-3 mt-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  activeIndex === index
                    ? "bg-amber-300 shadow-[0_0_0_6px_rgba(251,191,36,0.12)]"
                    : "bg-slate-700"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
