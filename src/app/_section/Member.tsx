"use client"
import { useState, useRef } from "react";
import MLCard from "@/components/Division/Card";
import { members } from "@/components/data/data";

export default function Members() {
  const [activeIndex, setActiveIndex] = useState(1); 
  const [dragStart, setDragStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = clientX - dragStart;
    
    // Threshold untuk trigger swipe (minimal 50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe ke kanan - geser ke kiri (prev) dengan infinite loop
        setActiveIndex(prev => prev === 0 ? members.length - 1 : prev - 1);
      } else {
        // Swipe ke kiri - geser ke kanan (next) dengan infinite loop
        setActiveIndex(prev => prev === members.length - 1 ? 0 : prev + 1);
      }
    }
    
    setIsDragging(false);
    setDragStart(0);
  };

  const getCardStyle = (diff: number) => {    
    if (diff === 0) {
      // Kartu tengah (utama)
      return "absolute left-1/2 -translate-x-1/2 bottom-[250px] w-[75vw] md:w-[20vw] h-96 md:h-[500px] z-10 scale-100 opacity-100";
    } else if (diff === -1) {
      // Kartu kiri
      return "absolute left-1/2 -translate-x-1/2 bottom-[-100px] w-[75vw] md:w-[20vw] h-96 md:h-[500px] z-[5] scale-45 opacity-100 -translate-x-[120%] md:-translate-x-[138%] -rotate-[65deg]";
    } else if (diff === 1) {
      // Kartu kanan
      return "absolute left-1/2 -translate-x-1/2 bottom-[-100px] w-[75vw] md:w-[20vw] h-96 md:h-[500px] z-[5] scale-45 opacity-100 translate-x-[20%] md:translate-x-[38%] rotate-[65deg]";
    } else {
      // Kartu tersembunyi
      return "absolute left-1/2 -translate-x-1/2 bottom-[250px] w-[75vw] md:w-[20vw] h-96 md:h-[500px] opacity-0 pointer-events-none scale-50";
    }
  };

  return (
    <div className="relative pt-10">
      <div className="w-full absolute top-0 left-0 bg-[linear-gradient(to_top,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] h-[40%] z-0"></div>
      
      <div className="flex flex-col min-h-[80vh] md:min-h-[90dvh]">
        <div className="text-center flex gap-8 items-center text-white font-anton tracking-widest relative z-10">
          <div className="w-full h-1 border-white"></div>
          <span className="text-5xl md:text-7xl tracking-widest">
            Members
          </span>
          <div className="w-full h-1 border-white"></div>
        </div>

        <div className="mt-10 flex items-end justify-center overflow-hidden flex-1">
          <div className="max-w-5xl w-5xl relative">
            <div className="w-[200%] h-[450px] md:w-full md:h-[450px] [background:radial-gradient(at_58%,#730903,#410500)] border-t-30 border-r-30 border-l-30 border-black right-[50%] md:right-0 rounded-tl-full rounded-tr-full relative">
              
              {/* Background decorations */}
              <div className="absolute bg-black w-4 h-[215px] rotate-130 left-36 top-24"></div>
              <div className="absolute bg-black w-4 h-[215px] -rotate-130 right-36 top-24"></div>
              
              {/* Concentric circles */}
              <div className="w-[60%] h-[60%] bg-[#FE7373] absolute bottom-0 left-1/2 z-20 -translate-x-1/2 rounded-tl-full rounded-tr-full"></div>
              <div className="w-[45%] h-[45%] bg-[#5D5D5D] absolute bottom-0 left-1/2 z-20 -translate-x-1/2 rounded-tl-full rounded-tr-full"></div>
              <div className="w-[38%] h-[38%] bg-[#242424] absolute bottom-0 left-1/2 z-20 -translate-x-1/2 rounded-tl-full rounded-tr-full"></div>
              <div className="w-[28%] h-[28%] bg-[#700802] absolute bottom-0 left-1/2 z-40 -translate-x-1/2 rounded-tl-full rounded-tr-full"></div>
              <div className="absolute w-14 h-14 left-1/2 -translate-x-1/2 bottom-28 z-30 bg-[#323232] [clip-path:polygon(39%_0,65%_0,100%_100%,0%_100%)]"></div>

              {/* Cards dengan Drag */}
              <div
                ref={dragRef}
                className="absolute -inset-16"
                onMouseDown={handleDragStart}
                onMouseUp={handleDragEnd}
                onMouseLeave={() => setIsDragging(false)}
                onTouchStart={handleDragStart}
                onTouchEnd={handleDragEnd}
              >
                {members.map((card, index) => {
                  const isActive = index === activeIndex;
                  let diff = index - activeIndex;

                   if (diff > members.length / 2) {
                    diff -= members.length;
                  } else if (diff < -members.length / 2) {
                    diff += members.length;
                  }
                  const isVisible = Math.abs(diff) <= 1;
                  
                  if (!isVisible) return null;
                  
                  return (
                    <div
                      key={card.id}
                      className={`${getCardStyle(diff)} rounded-xl overflow-hidden transition-all duration-700 ease-in-out ${
                        isActive ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer bg-[#212121]'
                      }`}
                      onClick={() => !isActive && setActiveIndex(index)}
                    >
                      {isActive ? (
                        <MLCard 
                          title={card.title}
                          image={card.image}
                          hoverImage={card.hoverImage}
                          isActive={isActive}
                        />
                      ) : (
                        <div className="w-full h-full bg-[#212121] flex items-center justify-center top-0">
                          <span className="text-white/50 text-sm font-bold">{card.title}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}