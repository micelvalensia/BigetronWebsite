"use client"

import Link from "next/link";
import LogoNav from "../SVG/LogoNav";
import Mobile from "./mobile/Mobile";
import { Desktop } from "./desktop/Desktop";

export default function Sidebar() {

  return (
    <header className="w-full shadow-lg bg-[#242424] fixed z-50">
      {/* Mobile Only */}
      <div className="md:hidden">
        <Mobile />
      </div>

      {/* Desktop Only */}
      <div className="hidden md:flex flex-col relative">
        <Desktop />
      </div>
    </header>
  );
}
