import { motion } from "motion/react"
import { Link } from "react-router-dom"

import TypeWriter from "@/components/ui/TypeWriter";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center mb-10 px-4 py-12 text-center"
    >
      <div className="mb-5 flex flex-col items-center justify-center gap-2">
        <h1 className="bg-gradient-to-r from-sky-400 via-violet-500 to-pink-500 bg-clip-text text-[5.5rem] font-black uppercase leading-none text-transparent sm:text-[5.5rem] md:text-[8rem] lg:text-[10rem] xl:text-[16rem]">
          Casper
        </h1>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-center gap-2 px-4 text-xl font-light leading-tight sm:text-2xl">
        <span>Hei, mitt navn er</span>
        <span className="inline-block">
          <TypeWriter />
        </span>
      </div>

      <p className="mb-10 max-w-2xl px-4 text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
        Velkommen til min portefølje! Jeg liker å lage ting med kode og her kan lære litt mer om meg.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/projects"
          className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 dark:bg-white dark:text-black"
        >
          Se prosjekter
        </Link>
        <Link
          to="/about"
          className="rounded-full border border-black/80 px-6 py-3 text-sm font-medium text-black transition-colors duration-200 hover:bg-black hover:text-white dark:border-white/80 dark:text-white dark:hover:bg-white dark:hover:text-black"
        >
          Les om meg
        </Link>
      </div>
    </motion.div>
  );
}

export default App