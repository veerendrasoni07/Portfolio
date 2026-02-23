"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

type OverlayProps = {
  scrollYProgress: MotionValue<number>;
};

export default function Overlay({ scrollYProgress }: OverlayProps) {
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -80]);

  const section2Opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.55], [0, 1, 0]);
  const section2Y = useTransform(scrollYProgress, [0.2, 0.55], [40, -40]);

  const section3Opacity = useTransform(scrollYProgress, [0.5, 0.7, 0.9], [0, 1, 0]);
  const section3Y = useTransform(scrollYProgress, [0.5, 0.9], [40, -40]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <motion.div
        style={{ opacity: titleOpacity, y: titleY }}
        className="absolute inset-0 flex items-center justify-center px-6 text-center"
      >
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs md:text-sm font-mono tracking-[0.35em] text-neutral-400 uppercase">
            Full-Stack App Developer & AI Systems
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight">
            Veerendra Soni.
          </h1>
          <p className="text-base md:text-xl text-neutral-300 max-w-2xl mx-auto">
            Building real products across mobile, web, and AI-driven platforms.
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: section2Opacity, y: section2Y }}
        className="absolute inset-0 flex items-center justify-start px-8 md:px-24"
      >
        <div className="max-w-xl space-y-4 text-left">
          <p className="text-xs md:text-sm font-mono tracking-[0.3em] text-neutral-400 uppercase">
            01 · Craft
          </p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
            Building scalable production-ready applications.
          </h2>
          <p className="text-base md:text-lg text-neutral-300">
            From Flutter apps to full-stack web products, I care about durable architecture, performance,
            and the details that make interfaces feel effortless.
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: section3Opacity, y: section3Y }}
        className="absolute inset-0 flex items-center justify-end px-8 md:px-24"
      >
        <div className="max-w-xl space-y-4 text-right ml-auto">
          <p className="text-xs md:text-sm font-mono tracking-[0.3em] text-neutral-400 uppercase">
            02 · Approach
          </p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
            Integrating AI models without relying on paid APIs.
          </h2>
          <p className="text-base md:text-lg text-neutral-300">
            I focus on running local models, secure execution environments, and infrastructure that keeps
            your product fast, private, and cost-efficient.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

