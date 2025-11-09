"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoNav from "@/components/SVG/LogoNav";
import Link from "next/link";
import { backdropVariants, circleVariants, closeButtonVariants, contentVariants, footerVariants, navContainerVariants, navItemVariants } from "./variants";

export default function Mobile() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { label: "TEAMS", to: "/teams" },
    { label: "ABOUT", to: "/" },
    { label: "NEWS & EVENTS", to: "/" },
    { label: "MATCHES", to: "/" },
    { label: "SPONSORS", to: "/" },
    { label: "CONTACT", to: "/" }
  ];

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  const handleClose = () => {
    setIsNavOpen(false);
  };

  const handleOpen = () => {
    console.log("tertekan");
    setIsNavOpen(true);
  };


  return (
    <div className="relative md:hidden">
      {/* Logo Navigation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20 pointer-events-auto">
        <LogoNav handleClick={handleOpen} />
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div 
            className="fixed inset-0 z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Animated Backdrop */}
            <motion.div 
              variants={backdropVariants}
              className="absolute inset-0 bg-linear-to-br from-red-950 via-black to-red-900"
            />
            
            {/* Expanding Circle Effect */}
            <motion.div 
              variants={circleVariants}
              className="absolute top-0 right-0 w-[150vmax] h-[150vmax] rounded-full bg-gradient-radial from-red-600/20 to-transparent"
              style={{ transformOrigin: 'top right' }} 
            />

            {/* Content Container */}
            <motion.div 
              variants={contentVariants}
              className="relative h-full flex flex-col justify-between p-6 md:p-8"
            >
              
              {/* Close Button - Top Right */}
              <motion.div 
                variants={closeButtonVariants}
                className="flex justify-end"
              >
                <button
                  onClick={handleClose}
                  className="relative w-12 h-12 group"
                  aria-label="Close menu"
                >
                  <span className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <span className="absolute w-6 h-0.5 bg-white rotate-45 transition-all duration-300 group-hover:rotate-135" />
                    <span className="absolute w-6 h-0.5 bg-white -rotate-45 transition-all duration-300 group-hover:-rotate-135" />
                  </div>
                </button>
              </motion.div>

              {/* Navigation Menu - Center */}
              <nav className="flex-1 flex items-center justify-center overflow-y-auto">
                <motion.ul 
                  className="space-y-4 md:space-y-6"
                  variants={navContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {navItems.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={navItemVariants}
                      className="overflow-hidden"
                    >
                      <Link
                        href={item.to}
                        onClick={handleClose}
                        className="group relative block text-3xl sm:text-4xl font-black text-white/90 hover:text-white transition-all duration-500"
                      >
                        <span className="relative inline-block overflow-hidden">
                          {item.label.split('').map((char, idx) => (
                            <span
                              key={idx}
                              className="inline-block transition-transform duration-500 group-hover:-translate-y-full"
                              style={{ transitionDelay: `${idx * 30}ms` }}
                            >
                              {char === ' ' ? '\u00A0' : char}
                            </span>
                          ))}
                        </span>
                        <span className="absolute inset-0 flex overflow-hidden">
                          {item.label.split('').map((char, idx) => (
                            <span
                              key={idx}
                              className="inline-block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-red-500"
                              style={{ transitionDelay: `${idx * 30}ms` }}
                            >
                              {char === ' ' ? '\u00A0' : char}
                            </span>
                          ))}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>

              {/* Footer Info - Bottom */}
              <motion.div 
                variants={footerVariants}
                className="flex justify-between items-end text-white/60 text-xs md:text-sm"
              >
                <div className="space-y-1">
                  <p className="font-semibold text-white/80">BIGETRON</p>
                  <p>Programmed to Win</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}