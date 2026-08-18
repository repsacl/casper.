import { motion } from "motion/react"

function About() {
  const skills = [
    { name: "React", accent: "from-cyan-400 to-blue-500" },
    { name: "JavaScript", accent: "from-yellow-300 to-amber-500" },
    { name: "CSS", accent: "from-pink-400 to-fuchsia-500" },
    { name: "Python", accent: "from-emerald-400 to-teal-500" },
    { name: "C#", accent: "from-indigo-400 to-violet-500" },
    { name: "MySQL", accent: "from-violet-400 to-purple-500" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex min-h-screen items-center justify-center px-6 py-16"
    >
      <div className="w-full max-w-5xl rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm dark:border-white/10 dark:bg-black/20 sm:p-10">
        <div className="mb-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
            Om meg
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
            Casper Landberg
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr] lg:items-start">
          <div className="space-y-5 text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
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
              På videregående tok jeg studiespesialisering med realfag, og jeg har alltid
              vært interessert i programmering. Derfor valgte jeg valgfagene IT1 og IT2.
              I IT1 lærte jeg grunnleggende webutvikling med HTML, CSS, JavaScript og
              MySQL, og i IT2 lærte jeg Python til å lage små applikasjoner.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-black/10 bg-gradient-to-br from-black via-gray-900 to-gray-800 p-5 text-white shadow-lg dark:border-white/10 dark:from-white dark:via-gray-100 dark:to-gray-200 dark:text-black">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/70 dark:text-black/70">
              Erfaring
            </p>

            <div className="space-y-3">
              {skills.map(({ name, accent }) => (
                <div
                  key={name}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3 transition-transform duration-200 hover:-translate-y-0.5 dark:border-black/10 dark:bg-black/5"
                >
                  <span className="text-sm font-medium sm:text-base">{name}</span>
                  <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${accent}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About