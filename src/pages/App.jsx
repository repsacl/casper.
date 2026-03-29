import { useState, useEffect } from "react"
import { motion } from "motion/react"

import TypeWriter from "@/components/ui/TypeWriter";
import Links from "../components/motion/Links"

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
    
    className="flex flex-col justify-center px-4"
    >
        <div className="text-center mt-15">
          <h1 className="text-[5.5rem] sm:text-[5.5rem] md:text-[10rem] lg:text-[12rem] xl:text-[23rem] uppercase leading-tight">
            Repsac<span className="capitalize"></span>
          </h1>
        </div>

          <div className="text-center font-light px-4 text-xl leading-tight mb-100">
              <span>Hei, mitt navn er&nbsp;</span>
              <span className="inline-block">
                <TypeWriter />
              </span>
          </div>

        <div className="mb-150 text-6xl felx flex-col gap-10">
            {/* <Links >Instagram</Links>
            <Links>LinkedIn</Links>
            <Links>Github</Links> */}
        </div>

    </motion.div>
  </>
  );
}

export default App