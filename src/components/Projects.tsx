"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const PROJECTS = [
    {
        id: "e-commerce-app",
        title: "E-Commerce App",
        role: "Flutter & Nodejs",
        link: "/projects/e-commerce-app",
        image: "/project-thumbnail/e_commerce_thumbnail.webp"
    },
    {
        id: "learnmate-ai",
        title: "LearnMate AI",
        role: "Flutter & Python",
        link: "/projects/learnmate-ai",
        image: "/project-thumbnail/learnmate_thumbnail.webp"
    },
       {
        id: "chat-app",
        title: "Real-Time Chat App",
        role: "Messaging Interface",
        link: "/projects/chat-app",
        image: "/project-thumbnail/chat_app_thumbnail.webp"
    },
        {
        id: "cognitube-youtube",
        title: "Cognitube - A Youtube Chatbot",
        role: "Langchain & RAG",
        link: "/projects/cognitube-youtube",
        image: "/project-thumbnail/cognitube_thumbnail.webp"
    },

    {
        id: "codeit-execution",
        title: "Codeit - Code Editor",
        role: "Architecture & Security",
        link: "/projects/codeit-execution",
        image: "/project-thumbnail/code_editor_thumbnail.webp"
    },
 
];

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen bg-transparent text-white py-32 px-8 md:px-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-medium mb-16 tracking-tight">Major Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((project, idx) => (
                        <Link href={project.link} key={project.id} passHref legacyBehavior>
                            <motion.a
                                className="group relative block aspect-[4/3] rounded-2xl border border-white/5 bg-neutral-900 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-white/10"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                            >
                                {/* Background Image with Hover Zoom Effect */}
                                <div className="absolute inset-0 w-full h-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 opacity-50 group-hover:opacity-70"
                                    />
                                </div>

                                {/* Gradient Overlay for Text Readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="p-8 h-full flex flex-col justify-between relative z-10">
                                    <div className="flex justify-between items-start">
                                        <span className="text-neutral-300 text-sm font-mono tracking-widest uppercase bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                                            {project.role}
                                        </span>
                                        <div className="p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full group-hover:bg-white/20 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                            <ArrowUpRight className="w-5 h-5 text-neutral-300 group-hover:text-white" />
                                        </div>
                                    </div>

                                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                        <h3 className="text-3xl font-medium tracking-tight mb-3">
                                            {project.title}
                                        </h3>
                                        {/* Animated underline effect */}
                                        <div className="h-0.5 w-0 bg-white group-hover:w-16 transition-all duration-500 ease-out"></div>
                                    </div>
                                </div>
                            </motion.a>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
