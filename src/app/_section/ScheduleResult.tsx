"use client";

import { ScheduleCard } from "@/components/ScheduleResultCard/SchedulCard";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ResultCard } from "@/components/ScheduleResultCard/ResultCard";
import { dataResult, dataUpcoming } from "@/components/data/data";

export function ScheduleResult() {
  const [active, setActive] = useState<string>("upcoming");
  return (
    <div className="py-10 px-4 bg-[#212121] min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="text-center flex flex-col gap-8 items-center justify-center text-white font-anton tracking-widest relative z-10 mb-8">
        <span className="text-3xl md:text-6xl tracking-wider">
          Schedule & Result
        </span>
        <div className="w-32 md:w-48 border-2 border-white/30"></div>
      </div>

      {/* Button Toggle */}
      <div className="flex gap-2 sm:gap-3 mb-8">
        <button
          onClick={() => setActive("upcoming")}
          className={`text-base sm:text-xl md:text-2xl px-5 sm:px-7 py-2 rounded-full text-white transition-all duration-300 ${
            active === "upcoming"
              ? "bg-[#E30613] font-semibold shadow-[inset_0_4px_8px_rgba(0,0,0,0.4),inset_0_-2px_4px_rgba(255,255,255,0.1)]"
              : ""
          }`}
        >
          UPCOMING
        </button>
        <button
          onClick={() => setActive("result")}
          className={`text-base sm:text-xl md:text-2xl px-5 sm:px-7 py-2 rounded-full text-white transition-all duration-300 ${
            active === "result"
              ? "bg-[#E30613] font-semibold shadow-[inset_0_4px_8px_rgba(0,0,0,0.4),inset_0_-2px_4px_rgba(255,255,255,0.1)]"
              : ""
          }`}
        >
          RESULTS
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full gap-4 md:gap-6 overflow-auto max-h-[65vh]">
        <AnimatePresence mode="wait">
          {active === "upcoming" &&
            dataUpcoming.map((data, i) => (
              <motion.div
                key={`upcoming-${data.enemy}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 * i,
                  ease: "easeOut",
                }}
              >
                <ScheduleCard data={data} />
              </motion.div>
            ))}
          {active === "result" &&
            dataResult.map((data, i) => (
              <motion.div
                key={`result-${data.enemy}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 * i,
                  ease: "easeOut",
                }}
              >
                <ResultCard data={data} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
