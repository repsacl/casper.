import { motion } from "motion/react";

const skills = [
  { name: "React", accent: "from-cyan-400 to-blue-500" },
  { name: "JavaScript", accent: "from-yellow-300 to-amber-500" },
  { name: "CSS", accent: "from-pink-400 to-fuchsia-500" },
  { name: "Python", accent: "from-emerald-400 to-teal-500" },
  { name: "C#", accent: "from-indigo-400 to-violet-500" },
  { name: "Java", accent: "from-yellow-400 to-orange-400" },
];

const container = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function About() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={container}
      className="mx-auto flex min-h-screen max-w-5xl flex-col items-center gap-10 px-6 py-20 sm:py-28 lg:flex-row-reverse lg:items-start lg:gap-16"
    >
      {/* Bildet: høyt og smalt (237x708), peker mot teksten.
          Ingen bakgrunn/beskjæring — object-contain beholder cutout-formen. */}
      <motion.img
        variants={item}
        // TODO: bytt til riktig filsti, f.eks. "/casper-about.png" (fil i public-mappen)
        src="/casper-siden.png"
        alt="Casper Landberg"
        className="h-[42vh] w-auto shrink-0 object-contain sm:h-[52vh] lg:mt-2 lg:h-[65vh]"
      />

      <div className="flex flex-col items-center text-center lg:items-start lg:pt-6 lg:text-left">
        <motion.h1
          variants={item}
          className="flex flex-wrap items-baseline justify-center gap-x-3 text-4xl leading-none sm:text-5xl lg:justify-start"
        >
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text font-black uppercase text-transparent">
            Casper
          </span>
          <span className="font-bold text-black dark:text-white">
            Landberg
          </span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-6 max-w-[60ch] space-y-5 text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg"
        >
          <p>
            Jeg er en 20-åring fra Fredrikstad med stor interesse for teknologi og
            programmering.
          </p>

          <p>
            Gjennom egne prosjekter og læring har jeg fått erfaring med React,
            JavaScript og CSS, både når det gjelder utvikling av nettsider og
            applikasjoner. Jeg har også jobbet med C# i forbindelse med utvikling av
            spill i Unity.
          </p>

          <p>
            På videregående tok jeg studiespesialisering med realfag, og jeg har
            alltid vært interessert i programmering. Derfor valgte jeg valgfagene
            IT1 og IT2. I IT1 lærte jeg grunnleggende webutvikling med HTML, CSS,
            JavaScript og MySQL, og i IT2 lærte jeg Python til å lage små
            applikasjoner.
          </p>
          <p>
            Nå holder jeg på å ta en 3 årig beachlor i dataingeniør-systemutvikling. Her lærer jeg hovedsakelig java for å bli en fullstack systemutvikler. 
          </p>
        </motion.div>

        <motion.div variants={item} className="mt-9 w-full max-w-[60ch]">
          <h2 className="mb-4 text-sm font-semibold text-black dark:text-white">
            Ferdigheter
          </h2>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
            {skills.map(({ name, accent }) => (
              <span
                key={name}
                className="inline-flex items-center gap-2 text-base font-medium text-gray-700 dark:text-gray-300 sm:text-lg"
              >
                <span
                  className={`h-2 w-2 rounded-full bg-gradient-to-r ${accent}`}
                />
                {name}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="flex items-center">
      <motion.img
        variants={item}
        // TODO: bytt til riktig filsti, f.eks. "/casper-about.png" (fil i public-mappen)
        src="/casper-opp.png"
        alt="Casper Landberg"
        className="h-[32vh] w-auto shrink-0 object-contain sm:h-[42vh] lg:mt-2 lg:h-[52vh]"
      />
        </div>

      </div>
    </motion.div>

  );
}

export default About;