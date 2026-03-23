import { cn } from "@/lib/utils";

interface LogoIconProps {
  className?: string;
  size?: number;
}

/**
 * A.R. Sahel Energy Ltd — SVG Logo Mark
 * An abstract flame/energy drop with "AR" monogram, representing
 * petroleum energy and the Sahel sun.
 */
export function LogoIcon({ className, size = 40 }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
    >
      {/* Background circle */}
      <rect width="120" height="120" rx="28" fill="url(#bgGrad)" />

      {/* Energy flame / drop shape */}
      <path
        d="M60 18C60 18 32 52 32 72C32 87.464 44.536 100 60 100C75.464 100 88 87.464 88 72C88 52 60 18 60 18Z"
        fill="url(#flameGrad)"
        opacity="0.35"
      />
      <path
        d="M60 30C60 30 40 56 40 72C40 83.046 48.954 92 60 92C71.046 92 80 83.046 80 72C80 56 60 30 60 30Z"
        fill="url(#flameGrad2)"
        opacity="0.5"
      />

      {/* Inner glow */}
      <ellipse cx="60" cy="74" rx="14" ry="14" fill="url(#innerGlow)" opacity="0.6" />

      {/* "A" letter */}
      <path
        d="M46 82L54 50H57L65 82H61.5L59.5 74H51.5L49.5 82H46ZM52.3 71H58.7L55.5 57L52.3 71Z"
        fill="white"
        fontWeight="bold"
      />

      {/* "R" letter */}
      <path
        d="M67 82V50H75C77.5 50 79.4 50.7 80.7 52.1C82 53.5 82.7 55.3 82.7 57.5C82.7 59.2 82.3 60.7 81.4 61.9C80.5 63.1 79.3 63.9 77.8 64.2L83 82H79.2L74.3 65H70.5V82H67ZM70.5 62H74.8C76.3 62 77.4 61.6 78.2 60.7C79 59.8 79.4 58.7 79.4 57.4C79.4 56.1 79 55 78.2 54.2C77.4 53.4 76.3 53 74.8 53H70.5V62Z"
        fill="white"
      />

      {/* Top accent spark */}
      <circle cx="60" cy="38" r="3" fill="#fbbf24" opacity="0.9" />
      <circle cx="60" cy="38" r="5" fill="#fbbf24" opacity="0.3" />

      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#059669" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="flameGrad" x1="60" y1="18" x2="60" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fbbf24" />
          <stop offset="1" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="flameGrad2" x1="60" y1="30" x2="60" y2="92" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fde68a" />
          <stop offset="0.5" stopColor="#34d399" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
        <radialGradient id="innerGlow" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
          <stop stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#10b981" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/**
 * Large hero version of the logo (used in the orbital display)
 */
export function LogoIconLarge({ className }: { className?: string }) {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
    >
      {/* Energy flame / drop shape */}
      <path
        d="M60 10C60 10 28 50 28 74C28 91.673 42.327 106 60 106C77.673 106 92 91.673 92 74C92 50 60 10 60 10Z"
        fill="url(#heroFlame)"
        opacity="0.25"
      />
      <path
        d="M60 26C60 26 38 54 38 72C38 84.15 47.85 94 60 94C72.15 94 82 84.15 82 72C82 54 60 26 60 26Z"
        fill="url(#heroFlame2)"
        opacity="0.4"
      />

      <ellipse cx="60" cy="74" rx="16" ry="16" fill="url(#heroInner)" opacity="0.5" />

      {/* "A" letter */}
      <path
        d="M42 86L52 48H56L66 86H61L59 76H49L47 86H42ZM50 72H58L54 54L50 72Z"
        fill="url(#letterGrad)"
      />

      {/* Dot separator */}
      <circle cx="66" cy="84" r="2" fill="#fbbf24" />

      {/* "R" letter */}
      <path
        d="M70 86V48H80C83 48 85.3 48.9 87 50.6C88.7 52.3 89.5 54.5 89.5 57.2C89.5 59.4 88.9 61.2 87.8 62.7C86.7 64.2 85.2 65.1 83.2 65.5L90 86H85.5L79.2 66.5H74V86H70ZM74 63H79.5C81.3 63 82.7 62.4 83.7 61.3C84.7 60.2 85.2 58.8 85.2 57.2C85.2 55.5 84.7 54.2 83.7 53.2C82.7 52.2 81.3 51.7 79.5 51.7H74V63Z"
        fill="url(#letterGrad)"
      />

      {/* Top spark */}
      <circle cx="60" cy="32" r="4" fill="#fbbf24" opacity="0.9" />
      <circle cx="60" cy="32" r="7" fill="#fbbf24" opacity="0.25" />

      <defs>
        <linearGradient id="heroFlame" x1="60" y1="10" x2="60" y2="106" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fbbf24" />
          <stop offset="1" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="heroFlame2" x1="60" y1="26" x2="60" y2="94" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fde68a" />
          <stop offset="0.4" stopColor="#34d399" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
        <radialGradient id="heroInner" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
          <stop stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="1" stopColor="#10b981" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="letterGrad" x1="60" y1="48" x2="60" y2="86" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ecfdf5" />
          <stop offset="1" stopColor="#6ee7b7" />
        </linearGradient>
      </defs>
    </svg>
  );
}
