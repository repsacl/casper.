import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"

import ThemeToggle from "./useTheme"

const DURATION = 0.22;

const navItems = [
    { to: "/", label: "Hei" },
    { to: "/about", label: "Om Meg" },
    { to: "/projects", label: "Ting" },
];

function Navbar() {
    const [sideBar, setSideBar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (sideBar) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [sideBar]);

    // Nullstiller scroll synkront i selve klikk-øyeblikket, FØR React
    // rekker å bytte side. Dette er mer robust enn å vente på et effect
    // etter navigasjonen, siden det ikke er noen race mot når
    // framer-motion måler nav-pillens posisjon.
    const handleNavClick = () => {
        window.scrollTo(0, 0);
    };

  return (
    <>
        <motion.nav
            className="fixed inset-x-0 top-3 z-50 flex items-center justify-center gap-3 px-3"
        >
            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .9, type: "spring", bounce: 0.3, delay: 1, ease: "easeInOut" }}
            >
                <Link to="/" onClick={handleNavClick}>
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
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .9, type: "spring", bounce: 0.3, delay: .5, ease: "easeInOut"  }}
                    className="flex items-center gap-1 rounded-full border-2 border-black/80 bg-white/80 p-1.5 text-sm font-medium text-black shadow-sm backdrop-blur-sm dark:border-white/80 dark:bg-black/20 dark:text-white"
                >
                    {navItems.map(({ to, label }) => {
                        const isActive = location.pathname === to;

                        return (
                            <motion.li
                                key={to}
                                whileHover={{ y: -2, scale: 1.02 }}
                                whileTap={{ scale: 0.96 }}
                                transition={{ duration: DURATION, ease: "easeInOut" }}
                                className="relative list-none"
                            >
                                {isActive && (
                                    // Samme layoutId på tvers av alle tre lenkene: motion
                                    // ser at det er "samme" bakgrunn som bare flytter seg,
                                    // og glir den sømløst til riktig plass i stedet for å
                                    // fade den ut/inn.
                                    <motion.div
                                        layoutId="nav-active-pill"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                        className="absolute inset-0 rounded-full bg-black dark:bg-white"
                                    />
                                )}

                                <Link
                                    to={to}
                                    onClick={handleNavClick}
                                    className={`relative z-10 block rounded-full px-4 py-2 transition-colors duration-200 ${
                                        isActive
                                            ? "text-white dark:text-black"
                                            : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                                    }`}
                                >
                                    {label}
                                </Link>
                            </motion.li>
                        );
                    })}
                </motion.ul>

                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .9, type: "spring", bounce: 0.3, delay: 1, ease: "easeInOut"  }}
                    className="flex items-center justify-center rounded-full border-2 border-black/80 bg-white/80 p-1.5 shadow-sm backdrop-blur-sm dark:border-white/80 dark:bg-black/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                    >
                    <ThemeToggle />
                </motion.div>
            </div>
        </motion.nav>
    </>
  )
}

export default Navbar