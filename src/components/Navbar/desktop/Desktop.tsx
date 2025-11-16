import LogoNav from "@/components/SVG/LogoNav";
import { navItems1, navItems2 } from "../navdata";
import Link from "next/link";

export function Desktop() {
  return (
    <>
      <div className="w-full max-w-8xl flex items-center shadow-xl justify-between px-16 py-4">
        <div className="flex items-center gap-5">
          <span>Bigetron</span>
          <div className="w-5 h-5 rounded-full bg-red-600" />
          <div className="w-5 h-5 rounded-full bg-red-600" />
          <div className="w-5 h-5 rounded-full bg-red-600" />
          <div className="w-5 h-5 rounded-full bg-red-600" />
        </div>
        <div className="flex gap-5 items-center">
          <div className="w-5 h-5 rounded-full bg-red-600" />
          <span>hiasan</span>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-0">
        <LogoNav />
      </div>

      <nav className="flex items-center justify-between font-anton tracking-widest">
        <div className="w-1/2 h-full px-20 py-6 flex justify-center">
          <div className="flex items-center gap-24">
            {navItems1.map((item, i) => (
              <Link
                href={item.to}
                key={i}
                className="text-2xl font-bold group relative"
              >
                <span className="relative inline-block overflow-hidden">
                  {item.label.split("").map((char, idx) => (
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
                  {item.label.split("").map((char, idx) => (
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
        </div>
        <div className="w-1/2 h-full px-20 py-6 flex justify-center">
          <div className="flex items-center gap-24">
            {navItems2.map((item, i) => (
              <Link
                href={item.to}
                key={i}
                className="text-2xl font-bold group relative"
              >
                <span className="relative inline-block overflow-hidden">
                  {item.label.split("").map((char, idx) => (
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
                  {item.label.split("").map((char, idx) => (
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
        </div>
      </nav>
    </>
  );
}
