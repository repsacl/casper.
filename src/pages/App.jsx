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
    
    className="flex flex-col justify-center mb-200 px-4"
    >
        <div className="text-center mt-20">
          <h1 className="text-[7rem] sm:text-[9rem] md:text-[10rem] lg:text-[12rem] xl:text-[15rem] uppercase leading-tight">
            Repsac<span className="text-lg sm:text-xl md:text-2xl capitalize underline underline-offset-2"></span>
          </h1>
        </div>

      <div className="flex justify-center mt-8 sm:mt-16 md:mt-24">
        <div className="text-center px-4">
          {/* Her kan du legge til mer innhold senere */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            {/* Placeholder for fremtidig innhold */}
          </p>
        </div>
      </div>
    </motion.div>
  </>
  );
}

export default App