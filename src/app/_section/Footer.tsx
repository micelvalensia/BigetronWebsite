"use client";

import { FacebookIcon, GithubIcon, InstagramIcon } from "@/components/SVG/socialicons";
import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-linear-to-b from-[#1a1a1a] to-[#212121] w-full h-auto md:min-h-72 p-8 md:p-16"
    >
      <div className="w-full flex flex-col md:flex-row gap-8 h-full">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="md:w-[10%] h-32 md:h-32 relative"
        >
          <Image 
            alt="logofooter" 
            src={"/assets/logofooter.png"} 
            fill 
            className="object-contain"
          />
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-2 md:w-[45%] font-anton tracking-wider text-center md:text-left md:gap-8 md:justify-around"
        >
          <div className="flex flex-col gap-2 text-white">
            <h3 className="font-bold text-lg md:text-xl mb-1">About</h3>
            <h3 className="font-bold text-lg md:text-xl mb-1">News & Events</h3>
            <h3 className="font-bold text-lg md:text-xl mb-1">FAQ</h3>
          </div>
          
          <div className="flex flex-col gap-2 text-white">
            <h3 className="font-bold text-lg md:text-xl mb-1">Matches</h3>
            <h3 className="font-bold text-lg md:text-xl mb-1">Contact</h3>
            <h3 className="font-bold text-lg md:text-xl mb-1">Sponsor</h3>
          </div>
          
          <div className="flex flex-col gap-2 text-white">
            <h3 className="font-bold text-lg md:text-xl mb-1">Terms & Condition</h3>
            <h3 className="font-bold text-lg md:text-xl mb-1">Privacy Policy</h3>
          </div>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="md:w-[45%] text-white flex flex-col justify-between md:justify-start md:gap-6 items-center md:items-start"
        >
          <div className="flex gap-6">
            <a 
              href="https://www.facebook.com/micel.doang.92" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon size={24} />
            </a>

            <a 
              href="https://www.instagram.com/mdoang2" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon size={24} />
            </a>

            <a 
              href="https://www.github.com/micelvalensia" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Github"
            >
              <GithubIcon size={24} />
            </a>
          </div>
          
          <div className="text-gray-400 text-sm mt-8 md:mt-0">
            © {new Date().getFullYear()} Miceldoang. All rights reserved.
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
