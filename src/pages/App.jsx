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
      <div className="mt-20 border-b-2 border-solid border-black dark:border-gray-200">
        <h1 className="ml-5 text-9xl uppercase">Casper Landberg</h1>
      </div>

      <div className="flex justify-center h-screen">
        <h1></h1>
      </div>
    </motion.div>
  </>
  );
}

export default App