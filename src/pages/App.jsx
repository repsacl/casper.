import { useState, useEffect } from "react"
import { motion } from "motion/react"

function App() {
  return (
  <> 
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

      transition={{
        duration: .5,
        ease: "easeInOut"
      }}
    
    className="flex flex-col justify-center"
    >
      <div className="mt-25">
        <h1 className="ml-5 text-[12rem] uppercase">Casper<span className="capitalize text-2xl"> Landberg</span></h1>
      </div>

      <div className="flex justify-center h-screen">
        <h1></h1>
      </div>
    </motion.div>
  </>
  );
}

export default App