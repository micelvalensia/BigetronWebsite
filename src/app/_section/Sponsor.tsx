"use client"

import { sponsors } from "@/components/data/data";
import { SponsorCard } from "@/components/Sponosor/SponsorCard";
import { AnimatePresence, motion } from "framer-motion";

export function SponsorComp() {
  return (
    <div className="w-full bg-linear-to-b from-[#1a1a1a] to-[#212121] py-12 md:py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-800 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wider mb-2">
            OUR SPONSORS
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
        </div>

        {/* Sponsors Grid */}
        <div className="flex flex-wrap gap-6 md:gap-8 items-center justify-center">
          <AnimatePresence>
            {sponsors.map((data, i) => (
              <motion.div key={i} initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.3, ease: "easeInOut", delay: 0.2 * i}} viewport={{once: true}}>
                <SponsorCard data={data} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm md:text-base">
            Powered by our amazing partners
          </p>
        </div>
      </div>
    </div>
  );
}
