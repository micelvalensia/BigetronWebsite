"use client"

import { dataNews } from "@/components/data/data";
import { NewsCard } from "@/components/News/NewsCard";
import { AnimatePresence, motion } from "framer-motion";

export function NewsPage() {
  return (
    <div className="min-h-screen relative py-10 px-4 bg-linear-to-b from-[#E30613] from-0% to-[#212121] to-68%">
      {/* Header */}
      <div className="text-center flex flex-col gap-8 items-center justify-center text-white font-anton tracking-widest relative z-10 mb-8 mt-8 md:mt-16">
        <span className="text-3xl md:text-6xl tracking-wider">
          News & Events
        </span>
        <div className="w-32 md:w-48 border-2 border-white/30"></div>
      </div>
      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto items-center gap-4 md:gap-6">
        <AnimatePresence mode="wait">
            {dataNews.map((data, i) => (
                <motion.div key={i} initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.3, ease: "easeInOut", delay: 0.2 * i}} viewport={{once: true}}>
                    <NewsCard data={data} />
                </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
