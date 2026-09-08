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

    // Lukk mobilmenyen automatisk hvis skjermen blir bred nok til
    // at desktop-navigasjonen vises igjen (f.eks. ved rotasjon/resize).
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setSideBar(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Nullstiller scroll synkront i selve klikk-øyeblikket, FØR React
    // rekker å bytte side, og lukker mobilmenyen samtidig.
    const handleNavClick = () => {
        window.scrollTo(0, 0);
        setSideBar(false);
    };

  return (
    <>
        <motion.nav
            className="fixed inset-x-0 top-3 z-50 flex items-center justify-between gap-3 px-3 md:justify-center"
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

            {/* Hamburger-knapp — kun synlig under md-breakpointet */}
            <motion.button
                type="button"
                onClick={() => setSideBar((prev) => !prev)}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .9, type: "spring", bounce: 0.3, delay: 1, ease: "easeInOut" }}
                whileTap={{ scale: 0.9 }}
                aria-label={sideBar ? "Lukk meny" : "Åpne meny"}
                aria-expanded={sideBar}
                className="flex h-12 w-12 items-center justify-center rounded-3xl border-2 border-black/80 bg-white/80 text-black shadow-sm backdrop-blur-sm dark:border-white/80 dark:bg-black/20 dark:text-white md:hidden"
            >
                {sideBar ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
        </motion.nav>

        {/* Mobilmeny: mørk overlay + panel med nav-lenker og temavalg */}
        <AnimatePresence>
            {sideBar && (
                <>
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: DURATION }}
                        onClick={() => setSideBar(false)}
                        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
                    />

                    <motion.div
                        key="panel"
                        initial={{ opacity: 0, y: -16, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -16, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="fixed inset-x-4 top-20 z-50 flex flex-col gap-2 rounded-3xl border-2 border-black/80 bg-white/95 p-4 text-black shadow-lg backdrop-blur-sm dark:border-white/80 dark:bg-black/90 dark:text-white md:hidden"
                    >
                        {navItems.map(({ to, label }) => {
                            const isActive = location.pathname === to;

                            return (
                                <Link
                                    key={to}
                                    to={to}
                                    onClick={handleNavClick}
                                    className={`rounded-2xl px-4 py-3 text-base font-medium transition-colors duration-200 ${
                                        isActive
                                            ? "bg-black text-white dark:bg-white dark:text-black"
                                            : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                                    }`}
                                >
                                    {label}
                                </Link>
                            );
                        })}

                        <div className="mt-2 flex items-center justify-between rounded-2xl border border-black/10 px-4 py-3 dark:border-white/10">
                            <span className="text-sm font-medium">Tema</span>
                            <ThemeToggle />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    </>
  )
}

export default Navbar