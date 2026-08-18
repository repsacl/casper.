import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"

import ThemeToggle from "./useTheme"

const DURATION = 0.22;

const navItems = [
    { to: "/", label: "Hjem" },
    { to: "/about", label: "Om" },
    { to: "/projects", label: "Prosjekter" },
];

function Navbar() {
    const [sideBar, setSideBar] = useState(false);

    useEffect(() => {
        if (sideBar) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [sideBar]);

  return (
    <>
        <motion.nav 
            className="flex justify-between items-center m-3 relative z-50"
        >
            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .9, type: "spring", bounce: 0.3, delay: .4, ease: "easeInOut" }}
            >
                <Link to="/">
                    <motion.div
                        initial="initial"
                        whileHover="hovered"
                        whileTap={{ scale: 0.85 }}
                        variants={{
                            initial: {scale: 1},
                            hovered: {scale: 1.2}
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut"
                        }}
                        className="h-12 w-12 cursor-pointer rounded-3xl m-1 p-3 font-bold text-lg bg-black text-white dark:bg-gray-200 dark:text-black text-center"
                    >
                        C.
                    </motion.div>
                </Link>
            </motion.div>

            <div className="hidden md:flex items-center gap-3">
                <motion.ul
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                    className="flex items-center gap-1 rounded-full border-2 border-black/80 bg-white/80 p-1.5 text-sm font-medium text-black shadow-sm backdrop-blur-sm dark:border-white/80 dark:bg-black/20 dark:text-white"
                >
                    {navItems.map(({ to, label }) => (
                        <motion.li
                            key={to}
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ duration: DURATION, ease: "easeInOut" }}
                            className="list-none"
                        >
                            <Link
                                to={to}
                                className="block rounded-full px-4 py-2 transition-colors duration-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                            >
                                {label}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>

                <div className="flex items-center justify-center rounded-full border-2 border-black/80 bg-white/80 p-1.5 shadow-sm backdrop-blur-sm dark:border-white/80 dark:bg-black/20">
                    <ThemeToggle />
                </div>
            </div>
        </motion.nav>
    </>
  )
}

export default Navbar