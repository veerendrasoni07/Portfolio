"use client";

import { motion } from "framer-motion";

const PHILOSOPHIES = [
    {
        year: "Core Principle",
        role: "Build Real Systems",
        company: "Not Tutorial Projects",
        description: "Focusing on large-scale impactful architecture over isolated simple builds."
    },
    {
        year: "Integration",
        role: "Avoid Black-Box Dependencies",
        company: "Local AI & Deep Understanding",
        description: "Prioritizing local HuggingFace transformers and native Python spawn processes over relying strictly on paid opaque APIs."
    },
    {
        year: "Current Pursuit",
        role: "2nd Year Engineering Student",
        company: "Continuous Scaling",
        description: "Actively studying system fundamentals while architecting performance-heavy environments like Docker sandboxes."
    }
];

export default function Experience() {
    return (
        <section id="philosophy" className="bg-transparent text-white py-32 px-8 md:px-24">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-medium mb-16 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Development Philosophy
                </motion.h2>

                <div className="space-y-12">
                    {PHILOSOPHIES.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            className="flex flex-col md:flex-row gap-4 md:gap-16 border-b border-white/5 pb-12 group last:border-0"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                        >
                            <div className="md:w-1/4">
                                <span className="text-neutral-500 font-mono text-sm tracking-widest">{exp.year}</span>
                            </div>
                            <div className="md:w-3/4">
                                <h3 className="text-2xl font-medium tracking-tight mb-2 group-hover:text-neutral-300 transition-colors">{exp.role}</h3>
                                <h4 className="text-lg text-neutral-400 mb-4">{exp.company}</h4>
                                <p className="text-neutral-500 leading-relaxed font-light">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
