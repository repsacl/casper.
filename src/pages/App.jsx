import { useState, useEffect } from "react"
import { motion } from "motion/react"

import TypeWriter from "@/components/ui/TypeWriter";

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
    
    className="flex flex-col justify-center mb-150 px-4"
    >
        <div className="text-center mt-20">
          <h1 className="text-[7rem] sm:text-[9rem] md:text-[10rem] lg:text-[12rem] xl:text-[23rem] uppercase leading-tight">
            Repsac<span className="capitalize"></span>
          </h1>
        </div>

        <div className="text-center font-light px-4 text-xl leading-tight">
            <div className="flex items-center justify-center flex-wrap">
              <span>Hei, mitt navn er&nbsp;</span>
              <span className="inline-block">
                <TypeWriter />
              </span>
            </div>
      </div>

    </motion.div>
  </>
  );
}

export default App