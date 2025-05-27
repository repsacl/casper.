import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"

const DURATION = 0.22;

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

            {/* Desktop Navigation */}
            <motion.ul 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: .5, scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 } }}
                className="hidden md:flex w-fit rounded-4xl m-1 gap-8 p-3 px-8 text-xl border-solid border-2 border-black text-black dark:text-white dark:border-white"
            >
                <motion.li
                    initial="initial"
                    whileHover="hovered"
                    className="cursor-pointer"
                    whileTap={{ scale: 0.85 }}
                    variants={{
                        initial: {opacity: 0.8, scale: 1},
                        hovered: {opacity: 1, scale: 1.2}
                    }}
                    transition={{
                        duration: DURATION,
                        ease: "easeInOut"
                    }}
                >
                    <Link to="/">Home</Link>
                </motion.li>
                
                <motion.li
                    initial="initial"
                    whileHover="hovered"
                    className="cursor-pointer"
                    whileTap={{ scale: 0.85 }}
                    variants={{
                        initial: {opacity: 0.8, scale: 1},
                        hovered: {opacity: 1, scale: 1.2}
                    }}
                    transition={{
                        duration: DURATION,
                        ease: "easeInOut"
                    }}
                >
                    <Link to="/about">About</Link>
                </motion.li>

                <motion.li
                    initial="initial"
                    whileHover="hovered"
                    className="cursor-pointer"
                    whileTap={{ scale: 0.85 }}
                    variants={{
                        initial: {opacity: 0.8, scale: 1},
                        hovered: {opacity: 1, scale: 1.2}
                    }}
                    transition={{
                        duration: DURATION,
                        ease: "easeInOut"
                    }}
                >
                    <Link to="/projects">Projects</Link>
                </motion.li>
            </motion.ul>

            {/* Mobile Menu Button */}
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .9, type: "spring", bounce: 0.3, delay: .4, ease: "easeInOut" }}
                className="md:hidden"
            >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                        duration: DURATION,
                        ease: "easeInOut"
                    }}
                    onClick={() => setSideBar(!sideBar)}
                    className="h-12 w-12 cursor-pointer rounded-3xl m-1 p-3 font-bold text-lg bg-black text-white dark:bg-gray-200 dark:text-black flex items-center justify-center"
                >
                    {sideBar ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
            </motion.div>
        </motion.nav>

        {/* Mobile Sidebar */}
        <AnimatePresence>
            {sideBar && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSideBar(false)}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    />
                    
                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-transparent shadow-lg z-50 md:hidden"
                    >
                        <div className="flex flex-col p-6 pt-20">
                            <Link 
                                to="/" 
                                onClick={() => setSideBar(false)}
                                className="py-4 text-xl font-medium text-black dark:text-white border-b border-gray-200 dark:border-gray-700"
                            >
                                Home
                            </Link>
                            <Link 
                                to="/about" 
                                onClick={() => setSideBar(false)}
                                className="py-4 text-xl font-medium text-black dark:text-white border-b border-gray-200 dark:border-gray-700"
                            >
                                About
                            </Link>
                            <Link 
                                to="/projects" 
                                onClick={() => setSideBar(false)}
                                className="py-4 text-xl font-medium text-black dark:text-white"
                            >
                                Projects
                            </Link>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    </>
  )
}

export default Navbar