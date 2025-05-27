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

       className="min-h-screen px-4 py-8"
       >
        <h1 className="text-3xl sm:text-4xl text-center font-bold mb-8 sm:mb-12">Projects</h1>

        <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 lg:gap-8 max-w-6xl mx-auto'>

          <div className="flex flex-col w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left">Project 1</h2>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ex corrupti modi fugiat nihil quisquam quos perspiciatis dolores iusto tenetur odit voluptate! Soluta, dolorum beatae! Eos reprehenderit quis dolores voluptate!
            </p>
          </div>

          <div className="w-full sm:w-3/4 lg:w-1/2 order-1 lg:order-2">
            <div className='h-48 sm:h-56 md:h-64 lg:h-80 w-full bg-gray-300 dark:bg-gray-600 rounded-2xl shadow-lg'></div>
          </div>

        </div>

        {/* Plass for flere prosjekter */}
        <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 lg:gap-8 max-w-6xl mx-auto mt-12 lg:mt-16'>

          <div className="w-full sm:w-3/4 lg:w-1/2">
            <div className='h-48 sm:h-56 md:h-64 lg:h-80 w-full bg-gray-300 dark:bg-gray-600 rounded-2xl shadow-lg'></div>
          </div>

          <div className="flex flex-col w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left">Project 2</h2>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ex corrupti modi fugiat nihil quisquam quos perspiciatis dolores iusto tenetur odit voluptate!
            </p>
          </div>

        </div>

      </motion.div>
    </>
  )
}

export default Projects