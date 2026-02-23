import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="bg-transparent min-h-screen relative">
            <Navbar />
            <ScrollyCanvas />
            <About />
            <Experience />
            <Projects />
            <Contact />

            {/* Footer */}
            <footer className="border-t border-white/10 py-12 px-8 md:px-24 bg-transparent">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
                    <p>© {new Date().getFullYear()} Veerendra Soni. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 space-x-6">
                        <a href="mailto:veerendrasoni0512@gmail.com" className="hover:text-white transition-colors">Email</a>
                        <a href="https://www.linkedin.com/in/veerendra-soni" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="https://github.com/veerendrasoni07" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
