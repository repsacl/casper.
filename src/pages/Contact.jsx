import { useState } from "react"
import { motion } from "motion/react"

function Contact() {

  return (
    <>
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       
       transition={{
        duration: 1,
        ease: "easeInOut"
      }}

       className="flex flex-col justify-center h-screen"
       >
        <h1 className="text-4xl text-center font-bold">Contact</h1>
      </motion.div>
    </>
  );
}

export default Contact