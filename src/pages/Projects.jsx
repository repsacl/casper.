import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "motion/react";

import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/Projectmodal";

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

// Legg til et nytt prosjekt ved å legge til et nytt objekt her —
// resten (animasjon, skillelinjer, layout, modal) ordner seg selv.
// "reverse: true" gjør at bildet ligger til høyre i stedet for
// venstre på desktop (vekslende layout).
//
// Valgfrie felt for modalen:
//   images:     [{ src: "/bilde.png", alt: "Beskrivelse" }, ...]
//   githubHref: "https://github.com/..."
//
// "date" vises i tidslinjen. Listen bør stå i kronologisk rekkefølge.
export const projects = [
  {
    number: "01",
    date: "10. klasse",
    title: "Skoleprosjektet",
    description: (
      <>
        I slutten av 10.klasse lagde jeg et spill som en del av et
        skoleprosjekt i Kunst&amp;Håndverk. Spillet ble laget med Unity og
        C#, og er et 2D-plattformspill hvor spilleren må navigere gjennom
        ulike nivåer, unngå hindringer og samle poeng. Prosjektet ga meg mye
        verdifull erfaring med programmering og problemløsning.
      </>
    ),
    linkHref: "#",
    linkLabel: "Link til spillet kommer...",
    githubHref: "https://github.com/repsacl/stick-game", // TODO: bytt ut med din repo-lenke
    image: "/BildeSpill2.webp",
    imageAlt: "Skjermbilde fra plattformspillet",
    images: [
      // { src: "/BildeSpill1.png", alt: "Skjermbilde fra et tidlig nivå" },
    ],
    reverse: true,
  },
  {
    number: "02",
    date: "Vår 2025",
    title: "Nettside:",
    titleLink: { href: "https://landbergbygg.no", label: "landbergbygg.no" },
    description: (
      <>
        Jeg laget en nettside for broren min sitt tømrerfirma. Prosjektet ga
        meg helhetlig erfaring med React og JavaScript, og jeg lærte hvordan
        man bygger og hoster en nettside med ulike verktøy.
      </>
    ),
    githubHref: "https://github.com/repsacl/landbergbygg",
    image: "/landbergbygg.webp",
    imageAlt: "Skjermbilde fra landbergbygg.no",
    linkLabel: "landbergbygg.no",
    linkHref: "https://landbergbygg.no",
    reverse: false,
  },
  {
    number: "03",
    date: "Vår 2025",
    title: "Denne porteføljen",
    description: (
      <>
        Porteføljen du ser på nå har jeg bygget selv med React og Tailwind
        CSS. Animasjonene, som innlasting av sidene og vinduet som åpnes når
        du klikker på et prosjekt, er laget med Motion. Siden er responsiv og
        fungerer både på mobil og desktop, og har støtte for mørk modus og lys modus.
        Prosjektene ligger i en liste i koden, så jeg kan legge til et nytt
        prosjekt ved å legge til ett objekt. Resten av layouten ordner seg
        selv. Prosjektet har gitt meg bedre forståelse for komponentbasert
        oppbygning, animasjoner og responsiv design.
      </>
    ),
    githubHref: "https://github.com/repsacl/casper.",
    image: "/casper.webp", // TODO: legg et skjermbilde av porteføljen i /public
    imageAlt: "Skjermbilde av denne porteføljen",
    reverse: true,
  },
  {
    number: "04",
    date: "Høst 2026",
    title: "Lego-robot",
    description: (
      <>
        I emnet "Teambasert-samhandling" bygde og programmerte jeg en Lego-robot i Python sammen med et team på fire personer.
        Vi startet med en robot som hadde enkel motorstyring og jobbet oss fram til en lego-robot som kunne følge en ukjent bane hvor vi konkurrerte mot andre grupper.
        Vi lærte hvordan jobbe som et team og lage en arbeidskontrakt hvor vi fordelte ansvar og satte oss mål for prosjektet.
        Jeg har lært mye om teamarbeid i form av diskusjoner for å komme fram til felles enighet om design, kode og problemløsning.
        I tillegg har jeg fått litt praktisk erfaring som leder etter som at jeg var leder i teamet.
      </>
    ),
    githubHref: "https://git.ntnu.no/IDATT1004-Team19-H2026/IDATT1004_gr19_Innledende-lego-oppgaver", // TODO
    image: "/lego-robot-1.webp",
    imageAlt: "Skjermbilde av en lego-robot",
    reverse: false,
  },
  {
    number: "05",
    date: "Høst 2026",
    title: "Repsac Launcher",
    description: (
      <>
        En egen hjemskjerm for Chromecast med Google TV, skrevet i Kotlin uten
        eksterne avhengigheter. Googles egen hjemskjerm er full av anbefalinger
        og reklame og blir treg på enheter med lite minne, så jeg laget en som
        bare viser appene mine, en stor klokke og mine egne bakgrunnsbilder.
        Den har også skjermsparer med lysbildevisning, «spilles nå» fra
        Spotify, innstillinger rett på TV-en og støtte for norsk og engelsk.
        Prosjektet er laget med hjelp av AI, og jeg har lært mye om hvordan
        Android-apper er bygget opp, hvordan man installerer og feilsøker på
        en TV med adb, og hvordan man bruker AI som verktøy i et større
        prosjekt.
      </>
    ),
    githubHref: "https://github.com/repsacl/repx-tv",
    image: "/repx-tv-1.webp",
    imageAlt: "Hjemskjermen til Repsac Launcher på Google TV",
    images: [
      { src: "/repx-tv-2.webp", alt: "Hjemskjermen med fjell som bakgrunnsbilde" },
      { src: "/repx-tv-3.webp", alt: "Hjemskjermen med en grønn by som bakgrunnsbilde" },
    ],
    reverse: true,
  },
];

// Hvor på skjermen (fra toppen) streken "er" mens man scroller.
// Prikken spretter inn idet streken når den.
const TIMELINE_TRIGGER = "60%";

// Strekbiten mellom to prikker. Den starter midt i prikken
// (kortets padding-top + halve datolinjen: 32+10 / 40+10 px) og går
// like langt ned i neste prosjekt, til midten av neste prikk.
// Den blå delen fylles i takt med
// scrollingen, så tidslinjen følger med der man leser.
function TimelineSegment() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${TIMELINE_TRIGGER}`, `end ${TIMELINE_TRIGGER}`],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute left-[5px] top-[42px] -bottom-[42px] w-px sm:top-[50px] sm:-bottom-[50px] bg-black/10 dark:bg-white/10"
    >
      <motion.div
        className="h-full w-full origin-top bg-blue-500"
        style={{ scaleY }}
      />
    </div>
  );
}

function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        variants={container}
        className="mx-auto max-w-6xl px-4 py-16 sm:py-24"
      >
        <motion.div variants={item} className="mb-8 max-w-2xl sm:mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
            Prosjekter
          </h1>
          <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
            Noen ting jeg har laget og lært av underveis.
          </p>
        </motion.div>

        {/* Tidslinje: en loddrett strek med en prikk og dato per prosjekt */}
        <ol className="relative">
          {projects.map((project, index) => {
            const isLast = index === projects.length - 1;
            return (
              <li
                key={project.number ?? project.title}
                className="relative pl-8 sm:pl-12"
              >
                {!isLast && <TimelineSegment />}

                <ProjectCard
                  {...project}
                  variants={item}
                  header={
                    <div className="relative mb-6 flex items-center">
                      {/* Prikken spretter inn, med en ring som pulserer ut én gang */}
                      <motion.span
                        aria-hidden="true"
                        className="absolute -left-8 top-1/2 h-[11px] w-[11px] -translate-y-1/2 sm:-left-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "0px 0px -40% 0px" }}
                      >
                        <motion.span
                          className="absolute inset-0 rounded-full bg-blue-500"
                          variants={{
                            hidden: { scale: 1, opacity: 0 },
                            visible: {
                              scale: 3,
                              opacity: [0, 0.5, 0],
                              transition: { duration: 1, delay: 0.2 },
                            },
                          }}
                        />
                        <motion.span
                          className="absolute inset-0 rounded-full bg-blue-500 ring-4 ring-background"
                          variants={{
                            hidden: { scale: 0 },
                            visible: {
                              scale: 1,
                              transition: { type: "spring", stiffness: 400, damping: 15 },
                            },
                          }}
                        />
                      </motion.span>
                      {project.date && (
                        <motion.time
                          className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "0px 0px -40% 0px" }}
                          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {project.date}
                        </motion.time>
                      )}
                    </div>
                  }
                  onOpen={() => setSelected(project)}
                />

                {/* Skillelinje mellom prosjektene, like bred som
                    hover-bakgrunnen til kortet. */}
                {!isLast && (
                  <div className="-mx-4 py-2 sm:-mx-6">
                    <div className="h-px w-full bg-black/10 dark:bg-white/10" />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            key={selected.number ?? selected.title}
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Projects;