import React from 'react'
import { motion } from 'motion/react'

function Projects() {
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

       className="flex flex-col items-center h-screen"
       >
        <h1 className="text-4xl text-center font-bold m-2 mb-25">Projects</h1>

        <div className='flex  justify-center gap-1'>

          <div className="flex flex-col w-1/3">
            <h1 className="text-2xl font-bold">Project 1</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ex corrupti modi fugiat nihil quisquam quos perspiciatis dolores iusto tenetur odit voluptate! Soluta, dolorum beatae! Eos reprehenderit quis dolores voluptate!</p>
          </div>

          <div className="w-1/3">
            <div className='h-100 w-125 bg-gray-300 m-5 rounded-2xl'></div>
          </div>

        </div>

      </motion.div>
    </>
  )
}

export default Projects