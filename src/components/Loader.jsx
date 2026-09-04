import { motion } from "motion/react";
import '../index.css'

// Beholderen for hele intro-skjermen. "exit" styrer hvordan
// HELE intro-skjermen forsvinner når loading blir false.
const containerVariants = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      when: "afterChildren", // vent til bilde/tekst er ferdig med sin exit først
    },
  },
};

// Bildet kommer langt nedenfra (fra utenfor skjermen) og ankommer
// LITT etter teksten, som om det glir opp og peker mot den
const imageVariants = {
  initial: { y: "60vh", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
  },
  exit: {
    y: "50vh",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// Teksten har ingen egen exit-bevegelse lenger — når den morfer inn i
// hovedsidens overskrift skal layoutId-animasjonen styre posisjon/størrelse.
// Den holder seg bare synlig til container-en (se under) fader ut resten.
const textVariants = {
  initial: { y: "-40vh", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 1,
  },
};

const Loader = () => {
  return (
    <motion.div
      variants={containerVariants}
      exit="exit"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-2 text-center"
    >
      {/* Teksten øverst, glir ned ovenfra. layoutId gjør at motion
          morfer denne teksten inn i "Casper"-overskriften på
          forsiden (App.jsx) når loaderen forsvinner. */}
      <motion.h1
        layoutId="casper-heading"
        variants={textVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent text-3xl font-black uppercase leading-none sm:text-6xl"
      >
        Casper Landberg
      </motion.h1>

      {/* Bildet under, glir opp nedenfra og peker opp mot teksten.
          Naturlig portrett-format (364x604) beholdes med h-auto. */}
      <motion.img
        // TODO: bytt til riktig filsti, f.eks. "/casper.png" (fil i public-mappen)
        src="/casper-opp.png"
        alt="Casper"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="h-[42vh] w-auto object-contain sm:h-[52vh]"
      />
    </motion.div>
  );
};

export default Loader;