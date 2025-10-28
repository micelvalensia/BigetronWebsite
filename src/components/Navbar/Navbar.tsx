"use client"

import Link from "next/link";
import LogoNav from "../SVG/LogoNav";
import Mobile from "./mobile/Mobile";

export default function Sidebar() {
    const navItems1 = [
        { label: "TEAMS", to: "/teams" },
        { label: "ABOUT", to: "/" },
        { label: "NEWS & EVENTS", to: "/" },
    ];

    const navItems2 = [
        { label: "MATCHES", to: "/" },
        { label: "SPONSORS", to: "/" },
        { label: "CONTACT", to: "/" }
    ];
  return (
    <header className="w-full shadow-lg bg-[#242424] fixed z-50">
      {/* Mobile Only */}
      <div className="md:hidden">
        <Mobile />
      </div>

      {/* Desktop Only */}
      <div className="hidden md:flex flex-col relative">
        <div className="w-full max-w-8xl flex items-center shadow-xl justify-between px-16 py-4">
          <div className="flex items-center gap-5">
            <span>Lorem Ipsum</span>
            <div className="w-5 h-5 rounded-full bg-neutral-600" />
            <div className="w-5 h-5 rounded-full bg-neutral-600" />
            <div className="w-5 h-5 rounded-full bg-neutral-600" />
            <div className="w-5 h-5 rounded-full bg-neutral-600" />
          </div>
          <div className="flex gap-5">
            <div className="w-5 h-5 rounded-full bg-neutral-600" />
            <span>Lorem Ipsum</span>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-0">
          <LogoNav />
        </div>

        <nav className="flex items-center justify-between py-6 px-20 font-anton tracking-widest">
          <div className="flex items-center gap-24">
            {navItems1.map((item, i) => (
                <Link href={item.to} key={i} className="text-2xl font-bold group relative">
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
            ))}

          </div>
          <div className="flex items-center gap-24">
            {navItems2.map((item, i) => (
                <Link href={item.to} key={i} className="text-2xl font-bold group relative">
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
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
