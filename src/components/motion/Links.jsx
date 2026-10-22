import { motion } from "motion/react"
import { Link } from "react-router-dom";


const DURATION = 0.3;
const STAGGER = 0.025;
const EASE = [0.65, 0, 0.35, 1];

// "pressed" ruller teksten på samme måte som hover, slik at effekten også vises ved trykk på mobil.
const topLetter = {
    initial: { y: 0 },
    hovered: { y: "-100%" },
    pressed: { y: "-100%" },
};
const bottomLetter = {
    initial: { y: "100%" },
    hovered: { y: 0 },
    pressed: { y: 0 },
};
const underline = {
    initial: { scaleX: 0 },
    hovered: { scaleX: 1 },
    pressed: { scaleX: 1 },
};

const Letters = ({ text, variants }) =>
    text.split("").map((letter, i) => (
        <motion.span key={i}
            className="inline-block whitespace-pre"
            variants={variants}
            transition={{
                duration: DURATION,
                ease: EASE,
                delay: STAGGER * i
            }}
        >
            {letter}
        </motion.span>
    ));

const TextLink = ({ children, to }) => {
    const isExternal = /^(https?:|mailto:)/.test(to);
    const linkClass = "relative block rounded-sm outline-none [-webkit-tap-highlight-color:transparent] focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2";

    const content = (
        <>
            {/* Skjermlesere leser hele ordet, ikke hver bokstav */}
            <span className="sr-only">{children}</span>

            <span aria-hidden className="relative block overflow-hidden">
                <span className="block">
                    <Letters text={children} variants={topLetter} />
                </span>

                <span className="absolute inset-0">
                    <Letters text={children} variants={bottomLetter} />
                </span>
            </span>

            <motion.span
                aria-hidden
                className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-current"
                variants={underline}
                transition={{ duration: DURATION + STAGGER * children.length, ease: EASE }}
            />
        </>
    );

    return(
    <motion.span
        initial="initial"
        whileHover="hovered"
        whileFocus="hovered"
        whileTap="pressed"
        variants={{ initial: { scale: 1 }, hovered: { scale: 1 }, pressed: { scale: 0.95 } }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
        className="relative inline-block w-fit cursor-pointer whitespace-nowrap py-1 touch-manipulation select-none"
    >
        {isExternal ? (
            <a href={to} target={to.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={linkClass}>
                {content}
            </a>
        ) : (
            <Link to={to} className={linkClass}>
                {content}
            </Link>
        )}
    </motion.span>

    )
}

export default TextLink
