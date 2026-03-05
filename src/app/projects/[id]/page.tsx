import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

type Project = {
    title: string;
    role: string;
    description: string;
    features: string[];
    images: string[];
};

// Mock data for the projects (in a real app, this might come from a CMS or DB)
const PROJECT_DETAILS: Record<string, Project> = {

"e-commerce-app": {
    title: "E-Commerce App",
    role: "Flutter · Node.js · MongoDB",
    description:
        "A full-featured mobile e-commerce application built with Flutter and a scalable Node.js backend. The platform allows users to browse products, manage carts, place orders, and securely process payments. The system focuses on performance, clean UI, and a smooth mobile shopping experience.",
    features: [
        "Product browsing with categories and search",
        "Cart and secure checkout system",
        "User authentication and order history",
        "Admin product management and inventory control"
    ],
    images: [
        "/E-Commerce-App/image16.jpeg",
        "/E-Commerce-App/image1.jpeg",
        "/E-Commerce-App/image2.jpeg",
        "/E-Commerce-App/image3.jpeg",
        "/E-Commerce-App/image4.jpeg",
        "/E-Commerce-App/image5.jpeg",
        "/E-Commerce-App/image6.jpeg",
        "/E-Commerce-App/image7.jpeg",
        "/E-Commerce-App/image8.jpeg",
        "/E-Commerce-App/image9.jpeg",
        "/E-Commerce-App/image10.jpeg",
        "/E-Commerce-App/image11.jpeg",
        "/E-Commerce-App/image12.jpeg",
        "/E-Commerce-App/image13.jpeg",
        "/E-Commerce-App/image14.jpeg",
        "/E-Commerce-App/image15.jpeg",
    ]
},

"learnmate-ai": {
    title: "LearnMate AI",
    role: "Flutter · Python · AI",
    description:
        "An AI-powered learning assistant designed to help students understand complex topics faster. The app uses AI models to generate summaries, explanations, and study roadmaps from user queries and PDFs. It focuses on making personalized learning accessible and efficient.",
    features: [
        "AI-powered study explanations",
        "PDF summarization and notes generation",
        "Personalized learning roadmaps",
        "Interactive AI chat for learning support"
    ],
    images: [
        "/Learnmate-AI/image1.jpeg",
        "/Learnmate-AI/image2.jpeg",
        "/Learnmate-AI/image3.jpeg",
        "/Learnmate-AI/image4.jpeg",
    ]
},

"chat-app": {
    title: "Real-Time Chat App",
    role: "Flutter · Firebase · Realtime",
    description:
        "A real-time messaging application inspired by modern chat platforms. The app supports instant communication between users with message delivery updates, typing indicators, and media sharing while maintaining a clean and responsive mobile interface.",
    features: [
        "Realtime messaging system",
        "Typing indicators and online status",
        "Media sharing and message attachments",
        "Chat list with last-message previews"
    ],
    images: [
        "/Chat-App/image1.jpeg",
        "/Chat-App/image2.jpeg",
        "/Chat-App/image3.jpeg",
        "/Chat-App/image4.jpeg",
        "/Chat-App/image5.jpeg",
        "/Chat-App/image6.jpeg",
        "/Chat-App/image7.jpeg",
        "/Chat-App/image8.jpeg",
        "/Chat-App/image9.jpeg",
        "/Chat-App/image10.jpeg",
    ]
},

"cognitube-youtube": {
    title: "Cognitube - YouTube Chatbot",
    role: "Python · RAG · LLM",
    description:
        "A Retrieval-Augmented Generation (RAG) based chatbot that allows users to interact with YouTube video content. The system extracts transcripts from videos, processes them into embeddings, and enables users to ask questions and receive context-aware answers from the video content.",
    features: [
        "YouTube transcript extraction",
        "Vector embeddings for semantic search",
        "Context-aware AI responses",
        "RAG pipeline for accurate information retrieval"
    ],
    images: [
        "/Youtube-Chatbot/image1.jpeg",
        "/Youtube-Chatbot/image2.jpeg",
        "/Youtube-Chatbot/image3.jpeg",
    ]
},

"codeit-execution": {
    title: "CodeIt - Online Code Editor",
    role: "Docker · Node.js · System Architecture",
    description:
        "A secure online code execution platform that allows users to run code in isolated environments. The system uses Docker containers to safely execute user programs, preventing malicious activity while supporting multiple programming languages.",
    features: [
        "Secure Docker-based code execution",
        "Multi-language code support",
        "Isolated sandbox environments",
        "Controlled resource usage and monitoring"
    ],
    images: [
        "/Code-Editor/image1.jpeg",
        "/Code-Editor/image2.jpeg",
        "/Code-Editor/image3.jpeg",
        "/Code-Editor/image4.jpeg",
    ]
},

};

export default function ProjectDetail({ params }: { params: { id: string } }) {
    const project = PROJECT_DETAILS[params.id];

    if (!project) {
        notFound();
    }

    return (
        <main className="bg-transparent min-h-screen text-white pt-32 pb-24 px-8 md:px-24">
            <div className="max-w-5xl mx-auto">
                <Link
                    href="/#projects"
                    className="inline-flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Projects</span>
                </Link>

                <div className="mb-16">
                    <span className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4 block">
                        {project.role}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
                        {project.title}
                    </h1>
                    <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-24">
                    <div>
                        <h3 className="text-2xl font-medium mb-6">Key Features</h3>
                        <ul className="space-y-4">
                            {project.features.map((feature: string, idx: number) => (
                                <li key={idx} className="flex items-start">
                                    <span className="mr-4 text-white/50">0{idx + 1}</span>
                                    <span className="text-neutral-300">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {project.images.map((img: string, idx: number) => (
                        <div
                            key={idx}
                            className="w-full rounded-2xl overflow-hidden border border-white/5 bg-white/5 shadow-2xl"
                        >
                            <Image
                                src={img}
                                alt={`${project.title} screenshot ${idx + 1}`}
                                width={1200}
                                height={800}
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority={idx === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
