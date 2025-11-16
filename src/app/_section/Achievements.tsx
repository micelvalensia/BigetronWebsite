"use client";

import { useRef, useState } from "react";
import { AchievementCard } from "@/components/Achievements/AchievementsCard";
import { cards } from "@/components/data/data";

export function Achievements() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [dragStart, setDragStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const clientX =
      "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = clientX - dragStart;

    // Threshold untuk trigger swipe (minimal 50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe ke kanan - geser ke kiri (prev) dengan infinite loop
        setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
      } else {
        // Swipe ke kiri - geser ke kanan (next) dengan infinite loop
        setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
      }
    }

    setIsDragging(false);
    setDragStart(0);
  };

  const getCardStyle = (diff: number) => {
    if (diff === 0) {
      // Kartu tengah (utama)
      return "absolute left-1/2 -translate-x-1/2 w-[80vw] bottom-0 md:w-[25vw] h-120 md:h-[550px] z-10 scale-100 opacity-100";
    } else if (diff === -1) {
      // Kartu kiri
      return "absolute left-1/2 -translate-x-1/2 bottom-0 w-[75vw] md:w-[20vw] h-96 md:h-[400px] z-[5] scale-100 opacity-100 -translate-x-[120%] md:-translate-x-[138%]";
    } else if (diff === 1) {
      // Kartu kanan
      return "absolute left-1/2 -translate-x-1/2 bottom-0 w-[75vw] md:w-[20vw] h-96 md:h-[400px] z-[5] scale-100 opacity-100 translate-x-[20%] md:translate-x-[38%]";
    } else {
      // Kartu tersembunyi
      return "absolute left-1/2 -translate-x-1/2 bottom-[250px] w-[75vw] md:w-[20vw] h-96 md:h-[500px] opacity-0 pointer-events-none scale-50";
    }
  };

  return (
    <div className="h-auto bg-linear-to-b from-[#1a1a1a] to-[#212121] py-12 relative">
      {/* Header */}
      <div className="text-center flex flex-col gap-8 items-center text-white font-anton tracking-widest mb-8 mt-8 md:mt-16">
        <span className="text-3xl md:text-6xl tracking-wider">
          Achievements
        </span>
        <div className="w-32 md:w-48 border-2 border-white/30"></div>
      </div>

      {/* Wrapper */}
      <div className="relative max-w-6xl mx-auto px-6 h-[60vh] mb-8 md:mb-16">
        {/* CONTENT */}
        <div
          ref={dragRef}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          className="flex gap-6 overflow-x-hidden h-full px-2"
        >
          {cards.map((card, index) => {
            const isActive = index === activeIndex;
            let diff = index - activeIndex;

            if (diff > cards.length / 2) {
              diff -= cards.length;
            } else if (diff < -cards.length / 2) {
              diff += cards.length;
            }
            const isVisible = Math.abs(diff) <= 1;

            if (!isVisible) return null;

            return (
              <div
                key={card.id}
                className={`${getCardStyle(
                  diff
                )} rounded-xl overflow-hidden transition-all duration-700 ease-in-out ${
                  isActive
                    ? "cursor-grab active:cursor-grabbing"
                    : "cursor-pointer bg-[#212121]"
                }`}
                onClick={() => !isActive && setActiveIndex(index)}
              >
                {isActive ? (
                  <AchievementCard data={card} />
                ) : (
                  <div className="w-full h-full bg-[#212121] flex items-center justify-center top-0">
                    <span className="text-white/50 text-sm font-bold">
                      {card.title}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
