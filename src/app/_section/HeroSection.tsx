"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="bg-[radial-gradient(circle,#9E0B04_23%,#700802_61%,#410500_100%)] min-h-screen 3xl:min-h-[105vh] overflow-hidden flex justify-center relative">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:mt-10 relative md:max-w-7xl">
        
        {/* Main Title */}
        <motion.h1 
          className="font-anton text-[#F6EEE1] text-8xl md:text-[13rem] text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <motion.span 
            className="inline-block tracking-wide md:tracking-[3rem]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut"
            }}
          >
            BIGETRO
          </motion.span>
          <motion.span 
            className="inline-block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut"
            }}
          >
            N
          </motion.span>
        </motion.h1>

        {/* Mobile Subtitle */}
        <motion.div 
          className="flex items-center justify-between md:hidden mb-[60%] font-anton"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut"
          }}
        >
          <span>BY VITALITY</span>
          <div className="flex flex-col ml-44">
            <span>PROGRAMMED</span>
            <span>TO WIN</span>
          </div>
        </motion.div>

        {/* Desktop Subtitle */}
        <motion.div 
          className="hidden absolute left-1/2 -translate-x-1/2 top-[55%] w-[45em] md:flex justify-between font-anton text-4xl tracking-widest"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.8,
            ease: "easeOut"
          }}
        >
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 1,
              ease: "easeOut"
            }}
          >
            BY VITALITY
          </motion.span>
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 1.2,
              ease: "easeOut"
            }}
          >
            <span>PROGRAMMED</span>
            <span>TO WIN</span>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 top-[46%] md:bottom-0 md:top-auto w-[120vw] md:w-[50vw]"
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.4,
            ease: "easeOut"
          }}
        >
          <Image
            alt="hero section"
            src="/assets/hero.png"
            width={850}
            height={839}
            sizes="60vw"
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* Bottom Gradient Overlay */}
      <motion.div 
        className="w-full absolute bottom-0 left-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_30%,rgba(0,0,0,100)_100%)] h-[30%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 1,
          delay: 1,
          ease: "easeIn"
        }}
      />
    </div>
  );
}