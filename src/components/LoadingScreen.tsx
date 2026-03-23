"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * A.R. Sahel Energy Ltd — Cinematic Loading Screen
 *
 * Visual sequence:
 * 1. Dark void → particle field ignites
 * 2. Energy ring pulses outward from center
 * 3. Flame/drop logo draws itself (SVG path animation)
 * 4. "A.R." monogram fades in inside the flame
 * 5. Company name types out below
 * 6. Golden light sweep → screen lifts up to reveal page
 */

// ---------------------------------------------------------------------------
// Particle field
// ---------------------------------------------------------------------------
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
    opacity: Math.random() * 0.7 + 0.3,
  }));
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState(0); // 0‑5
  const [particles] = useState(() => generateParticles(60));
  const [leaving, setLeaving] = useState(false);

  const companyName = "A.R. Sahel Energy Ltd";
  const tagline = "Powering Africa's Energy Future";

  // Phase timeline
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),   // particles ignite
      setTimeout(() => setPhase(2), 1000),  // energy ring
      setTimeout(() => setPhase(3), 1800),  // logo draws
      setTimeout(() => setPhase(4), 3000),  // text appears
      setTimeout(() => setPhase(5), 4400),  // ready to leave
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // When phase 5 → begin exit animation
  useEffect(() => {
    if (phase === 5) {
      const t = setTimeout(() => setLeaving(true), 200);
      return () => clearTimeout(t);
    }
  }, [phase]);

  const handleExitComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!leaving ? null : null}
      {!leaving && (
        <motion.div
          key="loading"
          className="loading-screen"
          exit={{
            clipPath: "circle(0% at 50% 50%)",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          onAnimationComplete={(def: { clipPath?: string }) => {
            if (def?.clipPath === "circle(0% at 50% 50%)") handleExitComplete();
          }}
        >
          {/* ============ PARTICLE FIELD ============ */}
          <div
            className="loading-particles"
            style={{ opacity: phase >= 1 ? 1 : 0 }}
          >
            {particles.map((p) => (
              <span
                key={p.id}
                className="loading-particle"
                style={
                  {
                    "--px": `${p.x}%`,
                    "--py": `${p.y}%`,
                    "--size": `${p.size}px`,
                    "--dur": `${p.duration}s`,
                    "--delay": `${p.delay}s`,
                    "--opa": p.opacity,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>

          {/* ============ ENERGY RINGS ============ */}
          {phase >= 2 && (
            <>
              <div className="loading-ring loading-ring--1" />
              <div className="loading-ring loading-ring--2" />
              <div className="loading-ring loading-ring--3" />
            </>
          )}

          {/* ============ CENTER CONTENT ============ */}
          <div className="loading-center">
            {/* Glow behind logo */}
            <motion.div
              className="loading-glow"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                phase >= 2
                  ? { opacity: [0, 0.8, 0.4], scale: [0.5, 1.3, 1] }
                  : {}
              }
              transition={{ duration: 1.6, ease: "easeOut" }}
            />

            {/* SVG Logo — animated draw */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={
                phase >= 3
                  ? { opacity: 1, scale: 1 }
                  : {}
              }
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="loading-logo-wrap"
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="loading-logo-svg"
              >
                {/* Outer flame path — drawn stroke */}
                <motion.path
                  d="M60 10C60 10 28 50 28 74C28 91.673 42.327 106 60 106C77.673 106 92 91.673 92 74C92 50 60 10 60 10Z"
                  stroke="url(#loadFlame1)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    phase >= 3
                      ? { pathLength: 1, opacity: 1 }
                      : {}
                  }
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                />

                {/* Inner flame — filled after draw */}
                <motion.path
                  d="M60 26C60 26 38 54 38 72C38 84.15 47.85 94 60 94C72.15 94 82 84.15 82 72C82 54 60 26 60 26Z"
                  fill="url(#loadFlame2)"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    phase >= 3
                      ? { opacity: 0.5, scale: 1 }
                      : {}
                  }
                  transition={{ duration: 1, delay: 0.6 }}
                />

                {/* Inner glow */}
                <motion.ellipse
                  cx="60"
                  cy="74"
                  rx="16"
                  ry="16"
                  fill="url(#loadInnerGlow)"
                  initial={{ opacity: 0 }}
                  animate={phase >= 3 ? { opacity: 0.6 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />

                {/* "A" letter */}
                <motion.path
                  d="M42 86L52 48H56L66 86H61L59 76H49L47 86H42ZM50 72H58L54 54L50 72Z"
                  fill="url(#loadLetterGrad)"
                  initial={{ opacity: 0, y: 6 }}
                  animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
                />

                {/* Dot */}
                <motion.circle
                  cx="66"
                  cy="84"
                  r="2"
                  fill="#fbbf24"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={phase >= 3 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1.2 }}
                />

                {/* "R" letter */}
                <motion.path
                  d="M70 86V48H80C83 48 85.3 48.9 87 50.6C88.7 52.3 89.5 54.5 89.5 57.2C89.5 59.4 88.9 61.2 87.8 62.7C86.7 64.2 85.2 65.1 83.2 65.5L90 86H85.5L79.2 66.5H74V86H70ZM74 63H79.5C81.3 63 82.7 62.4 83.7 61.3C84.7 60.2 85.2 58.8 85.2 57.2C85.2 55.5 84.7 54.2 83.7 53.2C82.7 52.2 81.3 51.7 79.5 51.7H74V63Z"
                  fill="url(#loadLetterGrad)"
                  initial={{ opacity: 0, y: 6 }}
                  animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.3 }}
                />

                {/* Top spark */}
                <motion.circle
                  cx="60"
                  cy="32"
                  r="4"
                  fill="#fbbf24"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    phase >= 3
                      ? {
                          opacity: [0, 1, 0.8],
                          scale: [0, 1.5, 1],
                        }
                      : {}
                  }
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                <motion.circle
                  cx="60"
                  cy="32"
                  r="8"
                  fill="#fbbf24"
                  initial={{ opacity: 0 }}
                  animate={phase >= 3 ? { opacity: [0, 0.3, 0.15] } : {}}
                  transition={{ duration: 1, delay: 0.4 }}
                />

                <defs>
                  <linearGradient
                    id="loadFlame1"
                    x1="60"
                    y1="10"
                    x2="60"
                    y2="106"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fbbf24" />
                    <stop offset="1" stopColor="#10b981" />
                  </linearGradient>
                  <linearGradient
                    id="loadFlame2"
                    x1="60"
                    y1="26"
                    x2="60"
                    y2="94"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fde68a" />
                    <stop offset="0.4" stopColor="#34d399" />
                    <stop offset="1" stopColor="#059669" />
                  </linearGradient>
                  <radialGradient
                    id="loadInnerGlow"
                    cx="0.5"
                    cy="0.5"
                    r="0.5"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop stopColor="#ffffff" stopOpacity="0.5" />
                    <stop offset="1" stopColor="#10b981" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient
                    id="loadLetterGrad"
                    x1="60"
                    y1="48"
                    x2="60"
                    y2="86"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ecfdf5" />
                    <stop offset="1" stopColor="#6ee7b7" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Company name — typed */}
            <motion.h1
              className="loading-title"
              initial={{ opacity: 0, y: 20 }}
              animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {companyName.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.035,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="loading-tagline"
              initial={{ opacity: 0, y: 12 }}
              animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {tagline}
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="loading-progress-track"
              initial={{ opacity: 0 }}
              animate={phase >= 4 ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 1.1 }}
            >
              <motion.div
                className="loading-progress-bar"
                initial={{ scaleX: 0 }}
                animate={phase >= 4 ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          </div>

          {/* ============ GOLDEN SWEEP ============ */}
          {phase >= 5 && <div className="loading-sweep" />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
