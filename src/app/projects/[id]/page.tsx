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
    "learnmate-ai": {
        title: "LearnMate AI",
        role: "Flutter & Python",
        description: "A comprehensive learning companion app built with Flutter and a powerful Python backend. It utilizes advanced AI models to provide personalized learning paths, real-time feedback, and interactive study sessions.",
        features: ["Personalized AI Tutor", "Cross-platform mobile app", "Real-time sync", "Analytics dashboard"],
        images: [
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
        ]
    },
    "ai-exam-analyzer": {
        title: "AI Exam Analyzer",
        role: "Local Transformers",
        description: "An automated grading and feedback system for complex exams. Using local transformer models, it evaluates varied text answers, recognizes handwriting, and extracts insights to assist educators in grading faster and more accurately.",
        features: ["Handwriting recognition", "Automated grading", "Detailed feedback generation", "Secure local processing"],
        images: [
            "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
        ]
    },
    "docker-execution": {
        title: "Docker Execution Environment",
        role: "Architecture & Security",
        description: "A highly secure and scalable platform for executing user-submitted code in isolated environments. It leverages Docker containers to prevent malicious code execution, ensuring system stability while supporting multiple programming languages.",
        features: ["Isolated container execution", "Multi-language support", "Resource limitation & monitoring", "Automated scaling"],
        images: [
            "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1200"
        ]
    },
    "coding-app": {
        title: "100-Level Coding App",
        role: "Gamified Systems",
        description: "A gamified platform designed to take beginners from zero to hero in programming. It features 100 levels of increasingly difficult coding challenges, complete with a rigorous reward system, leaderboards, and interactive tutorials.",
        features: ["100 progressive levels", "Interactive code editor", "Gamified progression system", "Global leaderboards"],
        images: [
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200"
        ]
    }
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

                <div className="space-y-12">
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
                                sizes="(max-width: 768px) 100vw, 1024px"
                                priority={idx === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
