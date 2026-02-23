"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollyCanvas() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end center"],
    });

    const titleY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    const subY = useTransform(scrollYProgress, [0.1, 0.8], [40, -40]);
    const subOpacity = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

    const cardOpacity = useTransform(scrollYProgress, [0.2, 1], [0, 1]);
    const cardY = useTransform(scrollYProgress, [0.2, 1], [40, 0]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[140vh] flex items-center px-8 md:px-24 pt-32"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-x-0 top-32 h-[420px] rounded-[40px] bg-gradient-to-r from-white/10 via-white/5 to-white/10 blur-3xl opacity-70" />
                <div className="absolute -left-40 bottom-0 w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[120px]" />
                <div className="absolute -right-40 top-16 w-[420px] h-[420px] rounded-full bg-purple-500/20 blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-12 items-center">
                <motion.div
                    style={{ y: titleY, opacity: titleOpacity }}
                    className="space-y-6"
                >
                    <p className="text-sm font-mono uppercase tracking-[0.35em] text-neutral-400">
                        Creative Developer & System Architect
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight leading-tight">
                        Veerendra Soni
                    </h1>
                    <motion.p
                        style={{ y: subY, opacity: subOpacity }}
                        className="text-lg md:text-2xl text-neutral-300 max-w-xl leading-relaxed"
                    >
                        I design and ship real products – from mobile apps and web platforms to secure
                        AI execution environments that run completely on your own infrastructure.
                    </motion.p>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors duration-200"
                        >
                            View selected work
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/15 text-sm text-neutral-200 hover:bg-white/10 transition-colors duration-200"
                        >
                            Let&apos;s collaborate
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    style={{ opacity: cardOpacity, y: cardY }}
                    className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 sm:p-8 space-y-6 shadow-[0_24px_80px_rgba(0,0,0,0.65)]"
                >
                    <p className="text-sm font-mono text-neutral-400 tracking-[0.25em] uppercase">
                        Current focus
                    </p>
                    <p className="text-lg text-neutral-200 leading-relaxed">
                        Building production-grade applications with{" "}
                        <span className="font-semibold">Flutter</span>,{" "}
                        <span className="font-semibold">Node.js</span>,{" "}
                        <span className="font-semibold">MongoDB</span>, and{" "}
                        <span className="font-semibold">Python</span>, while integrating{" "}
                        <span className="font-semibold">local AI models</span> that respect
                        performance, privacy, and cost.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-2 text-sm text-neutral-300">
                        <div className="space-y-1">
                            <p className="text-xs uppercase tracking-wide text-neutral-500">
                                Core stack
                            </p>
                            <p>Flutter · Node.js · MongoDB · Python</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs uppercase tracking-wide text-neutral-500">
                                Strength
                            </p>
                            <p>Systems thinking & execution environments</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs uppercase tracking-wide text-neutral-500">
                                AI focus
                            </p>
                            <p>Local transformers & tooling</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs uppercase tracking-wide text-neutral-500">
                                Availability
                            </p>
                            <p>Open to freelance & collaborations</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
