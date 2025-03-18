import { motion } from "motion/react";

const Loader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}

    className="grid place-content-center h-screen"
    >
      <BarLoader />
    </motion.div>
  );
};

const variants = {
  initial: {
    scaleY: 0.8,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="h-2 w-10 bg-black dark:bg-white" />
      <motion.div variants={variants} className="h-2 w-10 bg-black dark:bg-white" />
      <motion.div variants={variants} className="h-2 w-10 bg-black dark:bg-white" />
      <motion.div variants={variants} className="h-2 w-10 bg-black dark:bg-white" />
      <motion.div variants={variants} className="h-2 w-10 bg-black dark:bg-white" />
      {/* <motion.h1 variants={variants}>Soon ready</motion.h1> */}
    </motion.div>
  );
};

export default Loader;