"use client";
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="bg-transparent text-white py-24 px-8 md:px-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
                        About Me
                    </h2>

                    <p className="text-xl text-neutral-400 leading-relaxed mb-6 font-light">
                        I'm a full-stack developer currently focused on building AI-driven applications and developer infrastructure. My primary stack revolves around Flutter for mobile apps, Node.js for backend systems, and Python for AI workflows.
                    </p>

                    <p className="text-lg text-neutral-500 leading-relaxed mb-6">
                        Over the past few years, I've built multiple production-style projects including real-time chat applications, AI interview simulators, code execution platforms using Docker containers, and retrieval-augmented AI systems that can interact with external knowledge sources like PDFs and YouTube transcripts.
                    </p>

                    <p className="text-lg text-neutral-500 leading-relaxed">
                        What drives me is understanding how systems actually work under the hood. Instead of relying purely on third-party APIs, I prefer building things from the ground up — designing architectures, integrating local AI models, building secure execution environments, and solving real engineering problems step by step.
                    </p>
                </motion.div>


                <motion.div
                    className="relative flex flex-col justify-center gap-6 p-8 md:p-12 aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#121212] via-transparent to-white/5 z-0" />

                    <div className="relative z-10">

                        <h3 className="text-xl font-medium text-white mb-6 tracking-wide">
                            Core Skills
                        </h3>

                        <ul className="space-y-4 text-neutral-400 font-mono text-sm tracking-wide">

                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                                Flutter & Riverpod (Mobile App Development)
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                                Node.js Backend Architecture & APIs
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                                MongoDB Data Modeling & Backend Systems
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                                Python AI Systems & RAG Pipelines
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                                Docker-based Secure Code Execution
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                                System Design & Scalable Architecture
                            </li>

                        </ul>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
