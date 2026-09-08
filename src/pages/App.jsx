import { useEffect } from "react"
import { motion } from "motion/react"
import { Link, useOutletContext } from "react-router-dom"

import TypeWriter from "@/components/ui/TypeWriter";

function App() {
  // Satt av Layout i main.jsx. "true" kun helt til vi selv har
  // mountet én gang rett etter loaderen — deretter false for alltid,
  // slik at senere navigasjon hit (fra About/Projects) fader inn
  // akkurat som de andre sidene gjør.
  const { skipHomeEnterRef } = useOutletContext() ?? {};
  const skipEnterAnimation = skipHomeEnterRef?.current ?? false;

  useEffect(() => {
    if (skipHomeEnterRef) {
      skipHomeEnterRef.current = false;
    }
  }, [skipHomeEnterRef]);

  return (
    <motion.div
      initial={skipEnterAnimation ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="flex min-h-[calc(100vh-4rem)] w-full flex-col justify-end overflow-x-hidden px-6 pb-10 pt-24 text-left sm:px-10 lg:px-16"
    >
      <div className="mb-4 ml-1 flex max-w-xl flex-col gap-1 text-lg text-gray-600 dark:text-gray-400 sm:ml-8 sm:text-xl">
        <span className="flex flex-wrap items-center gap-2">
          <span>Hei, mitt navn er</span>
          <span className="inline-block">
            <TypeWriter />
          </span>
        </span>
        <span>Student &amp; fremtidig fullstack utvikler — velkommen til min portefølje.</span>
      </div>

      {/* Samme layoutId som h1-en i Loader.jsx. Motion morfer
          automatisk fra den lille loader-teksten til denne
          store gradient-overskriften.
          Størrelsen trappes opp gradvis over breakpointene i stedet
          for å hoppe rett fra 10rem til 22rem, som gikk utenfor
          skjermbredden på mobil og nettbrett. */}
      <motion.h1
        layoutId="casper-heading"
        className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent text-6xl font-black uppercase leading-none sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[16rem] 2xl:text-[20rem]"
      >
        Casper
      </motion.h1>

      <div className="mt-8 mb-8 flex flex-wrap justify-left items-center gap-4 ml-1 sm:ml-8">

        <Link
          to="/projects"
          className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:bg-white dark:text-black"
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