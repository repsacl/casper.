import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"

import ThemeToggle from "./useTheme"

const DURATION = 0.22;
const PILL_SPRING = { type: "spring", bounce: 0.2, duration: 0.5 };
const ENTER = { duration: .9, type: "spring", bounce: 0.3, delay: .5 };

const navItems = [
    { to: "/", label: "Hei" },
    { to: "/about", label: "Om Meg" },
    { to: "/projects", label: "Prosjekter" },
];

// Felles "glass"-stil for navbaren.
const glass =
    "border border-black/10 bg-white/70 text-black shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl " +
    "dark:border-white/10 dark:bg-neutral-900/60 dark:text-white dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)]";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [hovered, setHovered] = useState(null);
    const location = useLocation();

    // Navbaren legger seg litt høyere og blir mer dekkende når man har scrollet.
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 16);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Nullstiller scroll synkront i selve klikk-øyeblikket, FØR React
    // rekker å bytte side.
    const handleNavClick = () => {
        window.scrollTo(0, 0);
    };

    const logo = (
        <Link to="/" onClick={handleNavClick} aria-label="Hjem">
            <motion.div
                whileHover={{ rotate: -8, scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: DURATION, ease: "easeInOut" }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black pt-1 text-base font-bold text-white sm:h-10 sm:w-10 sm:text-xl dark:bg-white dark:text-black"
            >
                C.
            </motion.div>
        </Link>
    );

    const divider = <span className="mx-0.5 h-5 w-px bg-black/10 sm:mx-1 sm:h-6 dark:bg-white/15" />;

    return (
        <motion.nav
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={ENTER}
            className={`fixed inset-x-0 z-50 flex justify-center px-3 transition-[top] duration-300 ${scrolled ? "top-2" : "top-4"}`}
        >
            {/* Én samlet "dock" med logo, lenker og temavalg – mindre på mobil */}
            <div
                className={`flex items-center gap-0.5 rounded-full p-1 transition-colors duration-300 sm:gap-1 sm:p-1.5 ${glass} ${scrolled ? "bg-white/85 dark:bg-neutral-900/85" : ""}`}
            >
                {logo}
                {divider}

                <ul
                    className="flex items-center gap-0.5 text-sm font-medium sm:gap-1 sm:text-lg"
                    onMouseLeave={() => setHovered(null)}
                >
                    {navItems.map(({ to, label }) => {
                        const isActive = location.pathname === to;

                        return (
                            <motion.li
                                key={to}
                                whileTap={{ scale: 0.95 }}
                                onMouseEnter={() => setHovered(to)}
                                className="relative list-none"
                            >
                                {/* Svak hover-pille som også glir mellom lenkene */}
                                <AnimatePresence>
                                    {hovered === to && !isActive && (
                                        <motion.div
                                            layoutId="nav-hover-pill"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={PILL_SPRING}
                                            className="absolute inset-0 rounded-full bg-black/5 dark:bg-white/10"
                                        />
                                    )}
                                </AnimatePresence>

                                {isActive && (
                                    // Samme layoutId på tvers av alle tre lenkene: motion
                                    // ser at det er "samme" bakgrunn som bare flytter seg,
                                    // og glir den sømløst til riktig plass i stedet for å
                                    // fade den ut/inn.
                                    <motion.div
                                        layoutId="nav-active-pill"
                                        transition={PILL_SPRING}
                                        className="absolute inset-0 rounded-full bg-black shadow-md dark:bg-white"
                                    />
                                )}

                                <Link
                                    to={to}
                                    onClick={handleNavClick}
                                    className={`relative z-10 block whitespace-nowrap rounded-full px-2.5 pt-2 pb-1 transition-colors duration-200 sm:px-4 sm:pt-2.5 sm:pb-1.5 ${isActive
                                        ? "text-white dark:text-black"
                                        : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                                        }`}
                                >
                                    {label}
                                </Link>
                            </motion.li>
                        );
                    })}
                </ul>

                {divider}
                <ThemeToggle />
            </div>
        </motion.nav>
    )
}

export default Navbar
