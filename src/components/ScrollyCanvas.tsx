"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 90;

const getFrameBase = (index: number) =>
  `/sequence/frame_${index.toString().padStart(2, "0")}_delay-0.067s`;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const base = getFrameBase(i);

      const tryPng = () => {
        const pngImg = new Image();
        pngImg.src = `${base}.png`;
        pngImg.onload = () => {
          if (!isMounted) return;
          loadedImages[i] = pngImg;
          loadedCount += 1;
          if (loadedCount === FRAME_COUNT) {
            setImagesLoaded(true);
          }
        };
        pngImg.onerror = () => {
          if (!isMounted) return;
          loadedCount += 1;
          if (loadedCount === FRAME_COUNT) {
            setImagesLoaded(true);
          }
        };
      };

      const webpImg = new Image();
      webpImg.src = `${base}.webp`;
      webpImg.onload = () => {
        if (!isMounted) return;
        loadedImages[i] = webpImg;
        loadedCount += 1;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };
      webpImg.onerror = () => {
        if (!isMounted) return;
        tryPng();
      };
    }

    if (isMounted) {
      setImages(loadedImages);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateSize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const drawFrame = useCallback((index: number) => {
    if (!imagesLoaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    if (!img) return;

    const { width, height } = canvas;
    const hRatio = width / img.width;
    const vRatio = height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShiftX = (width - img.width * ratio) / 2;
    const centerShiftY = (height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShiftX,
      centerShiftY,
      img.width * ratio,
      img.height * ratio
    );
  }, [images, imagesLoaded]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const safeIndex = Math.max(0, Math.min(FRAME_COUNT - 1, Math.floor(latest)));
    drawFrame(safeIndex);
  });

  useEffect(() => {
    if (!imagesLoaded) return;
    drawFrame(0);
  }, [imagesLoaded, drawFrame]);

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
