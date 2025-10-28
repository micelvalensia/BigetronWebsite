"use client"
import { useState, useEffect } from "react";
import LogoNav from "@/components/SVG/LogoNav";
import Link from "next/link";

export default function Mobile() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

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
    
    // Cleanup
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  const handleClose = () => {
    setIsNavOpen(false);
    console.log("yes")
    setTimeout(() => {
      setShouldRender(false);
    }, 700);
  };

  const handleOpen = () => {
    setShouldRender(true);
    setTimeout(() => {
      setIsNavOpen(true);
    }, 10);
  };

  return (
    <div className="relative md:hidden">
      {/* Logo Navigation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20 pointer-events-auto">
        <LogoNav handleClick={handleOpen} />
      </div>

      {/* Mobile Navigation Overlay */}
      {shouldRender && (
        <div className="fixed inset-0 z-50">
          {/* Animated Backdrop */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br from-red-950 via-black to-red-900 transition-all duration-700 ease-in-out ${
              isNavOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`} 
          />
          
          {/* Expanding Circle Effect */}
          <div 
            className={`absolute top-0 right-0 w-[150vmax] h-[150vmax] rounded-full bg-gradient-radial from-red-600/20 to-transparent transition-all duration-1000 ease-out ${
              isNavOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`} 
            style={{ transformOrigin: 'top right' }} 
          />

          {/* Content Container */}
          <div className={`relative h-full flex flex-col justify-between p-6 md:p-8 transition-all duration-500 ${
            isNavOpen ? 'opacity-100' : 'opacity-0'
          }`}>
            
            {/* Close Button - Top Right */}
            <div className={`flex justify-end transition-all duration-700 delay-100 ${
              isNavOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
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
            </div>

            {/* Navigation Menu - Center */}
            <nav className="flex-1 flex items-center justify-center overflow-y-auto">
              <ul className="space-y-4 md:space-y-6">
                {navItems.map((item, i) => (
                  <li
                    key={i}
                    className={`overflow-hidden transition-all duration-700 ease-out ${
                      isNavOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}
                    style={{ transitionDelay: `${200 + i * 100}ms` }}
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
                            {char}
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
                            {char}
                          </span>
                        ))}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer Info - Bottom */}
            <div className={`flex justify-between items-end text-white/60 text-xs md:text-sm transition-all duration-700 delay-500 ${
              isNavOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="space-y-1">
                <p className="font-semibold text-white/80">BIGETRON</p>
                <p>Programmed to Win</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}