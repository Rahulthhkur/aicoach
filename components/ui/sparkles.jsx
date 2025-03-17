"use client";
import React, { useId, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "motion/react";

export const SparklesCore = (props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const controls = useAnimation();

  const particlesLoaded = async (container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  };

  const generatedId = useId();
  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: { color: { value: background || "#0d47a1" } },
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: false, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
              collisions: {
                absorb: { speed: 2 },
                bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
                enable: false,
                maxSpeed: 50,
                mode: "bounce",
                overlap: { enable: true, retries: 0 },
              },
              color: {
                value: particleColor || "#ffffff",
                animation: {
                  h: { enable: false, speed: 1 },
                  s: { enable: false, speed: 1 },
                  l: { enable: false, speed: 1 },
                },
              },
              effect: { close: true, fill: true, options: {} },
              move: {
                angle: { offset: 0, value: 90 },
                attract: { distance: 200, enable: false, rotate: { x: 3000, y: 3000 } },
                center: { x: 50, y: 50, mode: "percent", radius: 0 },
                enable: true,
                outModes: { default: "out" },
                random: false,
                speed: { min: 0.1, max: 1 },
              },
              number: {
                density: { enable: true, width: 400, height: 400 },
                value: particleDensity || 120,
              },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: { enable: true, speed: speed || 4, sync: false },
              },
              shape: { type: "circle" },
              size: {
                value: { min: minSize || 1, max: maxSize || 3 },
                animation: { enable: false, speed: 5, sync: false },
              },
              stroke: { width: 0 },
              zIndex: { value: 0 },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
