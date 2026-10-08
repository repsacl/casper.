import { motion, useReducedMotion } from "motion/react";

// Samme gradient som "Casper"-tittelen: from-sky-400 to-blue-500.
const SKY_400 = "#38bdf8";
const BLUE_500 = "#3b82f6";

// Myke fargebobler fylt med tittel-gradienten, som toner ut mot kantene
// med en radial maske (uskarpt utseende uten tunge blur-filtre).
//
// Juster gjerne:
//   dark / light – styrke (0–1) i hhv. mørk og lys modus.
//                  Lys modus må være sterkere, siden blått på lys
//                  bakgrunn ellers nesten forsvinner.
//   size, position, drift, duration – størrelse, plassering og svev.
const blobs = [
    {
        dark: 0.2,
        light: 0.45,
        angle: "90deg", // sky → blue, venstre mot høyre (som tittelen)
        size: "clamp(240px, 52vw, 600px)",
        position: { top: "-8%", left: "-6%" },
        drift: { x: [0, 70, 20], y: [0, 50, 90] },
        duration: 26,
    },
    {
        dark: 0.17,
        light: 0.4,
        angle: "135deg",
        size: "clamp(220px, 48vw, 560px)",
        position: { top: "28%", right: "-8%" },
        drift: { x: [0, -60, -15], y: [0, 55, -30] },
        duration: 32,
    },
    {
        dark: 0.15,
        light: 0.38,
        angle: "45deg",
        size: "clamp(260px, 55vw, 650px)",
        position: { bottom: "-14%", left: "24%" },
        drift: { x: [0, 55, -45], y: [0, -40, 15] },
        duration: 38,
    },
];

const radialMask = "radial-gradient(closest-side, black 0%, transparent 100%)";

function Background() {
    const reduceMotion = useReducedMotion();

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
            {blobs.map(
                ({ dark, light, angle, size, position, drift, duration }, i) => (
                    <motion.div
                        key={i}
                        className="absolute will-change-transform"
                        style={{ ...position, width: size, height: size }}
                        initial={{ opacity: 0 }}
                        animate={
                            reduceMotion
                                ? { opacity: 1 }
                                : { opacity: 1, x: drift.x, y: drift.y }
                        }
                        transition={{
                            opacity: { duration: 2, ease: "easeOut" },
                            x: {
                                duration,
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "easeInOut",
                            },
                            y: {
                                duration: duration * 1.2,
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "easeInOut",
                            },
                        }}
                    >
                        {/* Styrken velges med Tailwinds dark:-variant via CSS-variabler,
                så den bytter automatisk når temaet byttes. */}
                        <div
                            className="h-full w-full opacity-[var(--light)] dark:opacity-[var(--dark)]"
                            style={{
                                "--light": light,
                                "--dark": dark,
                                background: `linear-gradient(${angle}, ${SKY_400}, ${BLUE_500})`,
                                maskImage: radialMask,
                                WebkitMaskImage: radialMask,
                            }}
                        />
                    </motion.div>
                ),
            )}
        </div>
    );
}

export default Background;