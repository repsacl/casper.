import { useState, useEffect} from 'react'
import { motion } from "motion/react"

function Reveal({ children, Duration, Delay }) {
  return (
    <>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: Delay, duration: Duration, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    </>
  )
}

export default Reveal