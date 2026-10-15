import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
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

// Felles "glass"-stil for selve navbaren og mobilmenyen.
const glass =
    "border border-black/10 bg-white/70 text-black shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl " +
    "dark:border-white/10 dark:bg-neutral-900/60 dark:text-white dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)]";

function Navbar() {
    const [sideBar, setSideBar] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hovered, setHovered] = useState(null);
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

    // Navbaren legger seg litt høyere og blir mer dekkende når man har scrollet.
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 16);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Nullstiller scroll synkront i selve klikk-øyeblikket, FØR React
    // rekker å bytte side, og lukker mobilmenyen samtidig.
    const handleNavClick = () => {
        window.scrollTo(0, 0);
        setSideBar(false);
    };

    const logo = (
        <Link to="/" onClick={handleNavClick} aria-label="Hjem">
            <motion.div
                whileHover={{ rotate: -8, scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: DURATION, ease: "easeInOut" }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black pt-1 text-xl font-bold text-white dark:bg-white dark:text-black"
            >
                C.
            </motion.div>
        </Link>
    );

    const divider = <span className="mx-1 h-6 w-px bg-black/10 dark:bg-white/15" />;

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={ENTER}
                className={`fixed inset-x-0 z-50 flex justify-center px-3 transition-[top] duration-300 ${scrolled ? "top-2" : "top-4"}`}
            >
                {/* Desktop: én samlet "dock" med logo, lenker og temavalg */}
                <div
                    className={`hidden md:flex items-center gap-1 rounded-full p-1.5 transition-colors duration-300 ${glass} ${scrolled ? "bg-white/85 dark:bg-neutral-900/85" : ""}`}
                >
                    {logo}
                    {divider}

                    <ul
                        className="flex items-center gap-1 text-lg font-medium"
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
                                        className={`relative z-10 block rounded-full px-4 pt-2.5 pb-1.5 transition-colors duration-200 ${isActive
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

                {/* Mobil: logo + hamburger i samme glass-bar */}
                <div className={`flex w-full items-center justify-between rounded-full p-1.5 md:hidden ${glass}`}>
                    {logo}

                    <motion.button
                        type="button"
                        onClick={() => setSideBar((prev) => !prev)}
                        whileTap={{ scale: 0.9 }}
                        aria-label={sideBar ? "Lukk meny" : "Åpne meny"}
                        aria-expanded={sideBar}
                        className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                key={sideBar ? "close" : "open"}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.18 }}
                            >
                                {sideBar ? <X size={20} /> : <Menu size={20} />}
                            </motion.span>
                        </AnimatePresence>
                    </motion.button>
                </div>
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
                            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
                        />

                        <motion.div
                            key="panel"
                            initial={{ opacity: 0, y: -16, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -16, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className={`fixed inset-x-3 top-20 z-50 flex flex-col gap-1 rounded-3xl p-2 md:hidden ${glass}`}
                        >
                            {navItems.map(({ to, label }, i) => {
                                const isActive = location.pathname === to;

                                return (
                                    <motion.div
                                        key={to}
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05 * i + 0.05, duration: 0.2 }}
                                    >
                                        <Link
                                            to={to}
                                            onClick={handleNavClick}
                                            className={`block rounded-2xl px-4 pt-3.5 pb-2.5 text-xl font-medium transition-colors duration-200 ${isActive
                                                ? "bg-black text-white dark:bg-white dark:text-black"
                                                : "hover:bg-black/5 dark:hover:bg-white/10"
                                                }`}
                                        >
                                            {label}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            <div className="mt-1 flex items-center justify-between border-t border-black/10 px-4 pt-2 dark:border-white/10">
                                <span className="text-base font-medium opacity-70">Tema</span>
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
