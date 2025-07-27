import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = ["Casper", "Landberg"];

const Typewriter = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return; // hvis vi pauser, ikke gjør noe

    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentWord.slice(0, displayedText.length + 1);
        setDisplayedText(nextText);
        if (nextText === currentWord) {
          setPause(true);
          setTimeout(() => setIsDeleting(true), 1000); // pause før sletting
        }
      } else {
        const nextText = currentWord.slice(0, displayedText.length - 1);
        setDisplayedText(nextText);
        if (nextText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setPause(true);
          setTimeout(() => setPause(false), 300); // liten pause før neste ord
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, pause, wordIndex]);

  return (
    <div className="text-2xl font-mono">
      <motion.span
        key={displayedText}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {displayedText}
      </motion.span>
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default Typewriter;
