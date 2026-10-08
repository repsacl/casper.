import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

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
const projects = [
  {
    number: "01",
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
    githubHref: "https://github.com/", // TODO: bytt ut med din repo-lenke
    image: "/BildeSpill2.png",
    imageAlt: "Skjermbilde fra plattformspillet",
    images: [
      // { src: "/BildeSpill1.png", alt: "Skjermbilde fra et tidlig nivå" },
    ],
    reverse: true,
  },
  {
    number: "02",
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
    image: "/landbergbygg.png",
    imageAlt: "Skjermbilde fra landbergbygg.no",
    linkLabel: "landbergbygg.no",
    linkHref: "https://landbergbygg.no",
    reverse: false,
  },
  {
    number: "03",
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
    image: "/lego-robot-1.png",
    imageAlt: "Skjermbilde av en lego-robot",
    reverse: true,
  },
  {
    number: "04",
    title: "Denne porteføljen",
    description: (
      <>
        Porteføljen du ser på nå har jeg bygget selv med React og Tailwind
        CSS. Animasjonene, som innlasting av sidene og vinduet som åpnes når
        du klikker på et prosjekt, er laget med Motion. Siden er responsiv og
        fungerer både på mobil og desktop, og har støtte for mørk modus.
        Prosjektene ligger i en liste i koden, så jeg kan legge til et nytt
        prosjekt ved å legge til ett objekt. Resten av layouten ordner seg
        selv. Prosjektet har gitt meg bedre forståelse for komponentbasert
        oppbygning, animasjoner og responsiv design.
      </>
    ),
    githubHref: "https://github.com/repsacl/casper.",
    image: "/portefolje.png", // TODO: legg et skjermbilde av porteføljen i /public
    imageAlt: "Skjermbilde av denne porteføljen",
    reverse: false,
  },
];

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
        <motion.div variants={item} className="mb-16 max-w-2xl sm:mb-20">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
            Prosjekter
          </h1>
          <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
            Noen ting jeg har laget og lært av underveis.
          </p>
        </motion.div>

        {projects.map((project, index) => (
          <div key={project.number ?? project.title}>
            <ProjectCard
              {...project}
              variants={item}
              onOpen={() => setSelected(project)}
            />

            {index < projects.length - 1 && (
              <div className="my-16 h-px w-full bg-black/10 sm:my-20 dark:bg-white/10" />
            )}
          </div>
        ))}
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