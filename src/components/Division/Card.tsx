"use client"
import { useState } from "react";
import Image from "next/image";

interface MLCardProps {
  title?: string;
  image?: string;
  hoverImage?: string;
  isActive?: boolean;
}

export default function MLCard({ 
  title = "MOBILE LEGENDS", 
  image = "/assets/mobilelegens.jpg",
  hoverImage = "/assets/mobile.png",
  isActive = true
}: MLCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0.5, y: 0.5 });
  };

  const rotateX = (mousePosition.y - 0.5) * -20;
  const rotateY = (mousePosition.x - 0.5) * 20;

  return (
    <div 
      className="w-full h-full rounded-xl overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => isActive && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-300 ease-out"
        style={{
          transform: isActive && isHovered 
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)` 
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Default State - mobilelegens.jpg dengan overlay gradient */}
        <div 
          className="absolute inset-0 transition-opacity duration-500"
          style={{ transform: "translateZ(20px)" }}
        >
          <Image
            alt={title}
            src={image}
            fill
            className={`object-cover transition-all duration-500 ${
              isActive && isHovered ? 'grayscale-0' : 'grayscale'
            }`}
          />
          {/* Overlay gradient untuk memberikan depth */}
          <div className={`absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 ${
            isActive && isHovered ? 'opacity-0' : 'opacity-100'
          }`} />
          
          {/* Text overlay pada default state */}
          <div className={`absolute inset-0 flex items-center justify-center pb-8 transition-opacity duration-500 ${
            isActive && isHovered ? 'opacity-0' : 'opacity-100'
          }`}>
            <h2 className="text-white text-2xl md:text-4xl font-black tracking-wider drop-shadow-2xl text-center px-4 font-anton">
              {title}
            </h2>
          </div>
        </div>

        {/* Hover State - mobile.png Image */}
        {isActive && (
          <div 
            className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transform: "translateZ(40px)" }}
          >
            <Image
              alt={title}
              src={hoverImage}
              width={200}
              height={200}
              className="object-contain scale-150"
            />
          </div>
        )}

        {/* Shine Effect on Hover */}
        {isActive && isHovered && (
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
              transform: "translateZ(60px)",
            }}
          />
        )}

        {/* Border Glow on Hover */}
        <div 
          className={`absolute inset-0 rounded-xl transition-all duration-500 pointer-events-none ${
            isActive && isHovered ? 'shadow-[0_0_30px_rgba(226,0,0,0.6)]' : 'shadow-none'
          }`}
          style={{ transform: "translateZ(50px)" }}
        />
      </div>
    </div>
  );
}