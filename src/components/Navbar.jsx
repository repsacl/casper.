import { useState, useEffect } from "react"
// import Links from "./motion/links"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "motion/react"


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
    <motion.nav 
    className="flex justify-between items-center m-3"
    >


        <motion.div
        initial = {{ opacity: 0, y: -100 }}
        animate = {{ opacity: 1, y: 0 }}
        transition = {{ duration: .9, type: "spring", bounce: 0.3, delay: .4, ease: "easeInOut" }}
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

        <motion.ul 
        initial = {{ opacity: 0, scale: 0 }}
        animate = {{ opacity: 1, scale: 1 }}
        transition = {{ duration: .5, scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 }, }}

        className="flex w-fit rounded-4xl m-1 gap-8 p-3 px-8 text-xl border-solid border-2 border-black text-black dark:text-white dark:border-white"
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
                {/* <Links to="/">Home</Links> */}
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
                {/* <Links to="/about">About</Links> */}
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
                {/* <Links to="/contact">Contact</Links> */}
                <Link to="/projects">Projects</Link>
            </motion.li>
        </motion.ul>

        <motion.div
        initial = {{ opacity: 0, y: -100 }}
        animate = {{ opacity: 1, y: 0 }}
        transition = {{ duration: .9, type: "spring", bounce: 0.3, delay: .4, ease: "easeInOut" }}
        >
            {sideBar ? (
                <motion.div onClick={() => setSideBar(!sideBar)} className="h-12 w-12 cursor-pointer rounded-3xl m-1 p-3 font-bold text-lg bg-black text-white dark:bg-gray-200 dark:text-black text-center">
                    <X />
                </motion.div>
            ) : (
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                    duration: DURATION,
                    ease: "easeInOut"
                }}

                onClick={() => setSideBar(!sideBar)}

                className="h-12 w-12 cursor-pointer rounded-3xl m-1 p-3 font-bold text-lg bg-black text-white dark:bg-gray-200 dark:text-black text-center"
                >
                    <ShoppingCart />
            </motion.div>
            )}

        </motion.div>
    </motion.nav>
  )
}

export default Navbar