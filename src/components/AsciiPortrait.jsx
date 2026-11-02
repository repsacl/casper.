import { useEffect, useState } from "react";
import { motion } from "motion/react";

// Ekte monospace, ellers forskyves kolonnene. Settes på <pre> direkte
// siden preflight gir <pre> --font-mono, som peker på Zain.
// Glyfene stikker litt utenfor linjeboksen, og bg-clip-text maler bare
// innenfor elementet, så padding hindrer at første/siste rad kuttes.
const preStyle = {
  fontFamily: "ui-monospace, Menlo, Consolas, monospace",
  lineHeight: 1,
  padding: "0.3em 0",
};

// Blokktegnene (█▓▒) fyller bare 1em i høyden, så med line-height 1
// og scaleY(1.2) blir det ingen striper mellom linjene, samtidig som
// proporsjonene blir de samme som i en terminal (1.2em per linje).
// Transform og maske ligger på en wrapper og IKKE på <pre>: Safari
// klipper bg-clip-text til den utransformerte boksen, så toppen og
// bunnen forsvant når animasjonen var ferdig.
// Masken toner ut brystet nederst i stedet for en rett kant.
const wrapperStyle = {
  transform: "scaleY(1.2)",
  maskImage: "linear-gradient(to bottom, black 80%, transparent)",
  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent)",
};

const clean = (text) => text.replace(/^(\s*\n)+/, "").trimEnd();

// Hentes allerede når modulen lastes (mens loaderen vises), så teksten
// er klar i det hovedsiden mountes. Det må den være for at layoutId
// skal kunne morfe fra loader-bildet — et element som dukker opp
// senere har ingenting å morfe fra.
let cachedArt = "";
const artPromise = fetch("/meg-ascii.txt")
  .then((res) => res.text())
  .then((text) => (cachedArt = clean(text)))
  .catch(() => "");

// Viser ASCII-bildet fra /public/meg-ascii.txt. Samme layoutId som
// bildet i Loader.jsx, så motion morfer bildet inn i ASCII-versjonen.
// className (størrelse) ligger på det ytre motion-elementet, mens
// innerClassName (f.eks. opacity) ligger på wrapperen inni, siden
// motion styrer transform og opacity på det ytre under morfingen.
function AsciiPortrait({ className = "", innerClassName = "" }) {
  const [art, setArt] = useState(cachedArt);

  useEffect(() => {
    if (art) return;
    let cancelled = false;
    artPromise.then((text) => {
      if (!cancelled) setArt(text);
    });
    return () => {
      cancelled = true;
    };
  }, [art]);

  if (!art) return null;

  return (
    <motion.div
      layoutId="casper-portrait"
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
    >
      <div style={wrapperStyle} className={innerClassName}>
        <pre
          style={preStyle}
          className="m-0 select-none whitespace-pre bg-gradient-to-b from-sky-400 to-blue-500 bg-clip-text text-transparent"
        >
          {art}
        </pre>
      </div>
    </motion.div>
  );
}

export default AsciiPortrait;
