import { motion } from "motion/react"
import { Link } from "react-router-dom";


const DURATION = 0.3;
const STAGGER = 0.02;
const TextLink = ({ children, to }) => {
    return(
    <motion.span
        initial="initial"
        whileHover="hovered"
        className="relative block overflow-hidden whitespace-nowrap cursor-pointer"

        whileTap={{ scale: 0.8 }} 
    >
        <Link to={to}>
            <span>
                {children.split("").map((letter, i) => (
                    <motion.span key={i}
                        className="inline-block"
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" }
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </span>

            <span className="absolute inset-0">
                {children.split("").map((letter, i) => (
                    <motion.span key={i}
                        className="inline-block"
                        variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 }
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </span>
        </Link>
    </motion.span>

    )
}

export default TextLink