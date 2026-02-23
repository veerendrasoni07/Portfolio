"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${scrolled
                    ? "top-4 w-auto rounded-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-3 px-6 md:px-8"
                    : "top-6 w-[90%] md:w-auto md:max-w-3xl rounded-full bg-black/20 backdrop-blur-md border border-white/5 py-4 px-6 md:px-10"
                }`}
        >
            <div className="flex justify-between items-center gap-8 md:gap-16">
                <Link href="/" className="font-semibold text-white tracking-tight text-lg hover:text-neutral-300 transition-colors">
                    V<span className="hidden sm:inline">eerendra.</span>
                </Link>

                <div className="hidden md:flex items-center space-x-1 bg-white/5 rounded-full p-1 border border-white/5">
                    <a href="#about" className="px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">About</a>
                    <a href="#philosophy" className="px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">Philosophy</a>
                    <a href="#projects" className="px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">Projects</a>
                    <a href="#contact" className="px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">Contact</a>
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
            </div>
        </motion.nav>
    );
}
