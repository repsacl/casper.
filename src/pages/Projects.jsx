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
        <h1 className="text-3xl sm:text-4xl text-center font-bold mb-8 sm:mb-12">Prosjekter</h1>

        <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 lg:gap-8 max-w-6xl mx-auto'>

          <div className="flex flex-col w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left">Skole prosjektet</h2>
            <p className="text-sm font-medium sm:text-base lg:text-lg leading-relaxed text-center lg:text-left">
              I slutten 10.klasse lagde et spill som en del et skoleprosjekt i Kunst&Håndtverk. Dette spillet ble laget med Unity og C#. Spillet er et 2D plattformspill hvor spilleren må navigere gjennom ulike nivåer, unngå hindringer og samle poeng. Prosjektet ga meg mye verdifull erfaring med hva som innebærer med programmering og problemløsning.
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-light hover:underline"> Link til spillet</a>
            </p>
          </div>

          <div className="w-full sm:w-3/4 lg:w-1/2 order-1 lg:order-2">
            <img src="/src/assets/BildeSpill.png" alt="Project 1" className='h-48 sm:h-56 md:h-64 lg:h-80 w-full object-cover rounded-2xl shadow-lg' />
          </div>

        </div>

        {/* Plass for flere prosjekter */}
        <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 lg:gap-8 max-w-6xl mx-auto mt-12 lg:mt-16'>

          <div className="w-full sm:w-3/4 lg:w-1/2">
            <img src="/src/assets/landbergbygg.png" alt="Project 2" className='h-48 sm:h-56 md:h-64 lg:h-80 w-full object-cover rounded-2xl shadow-lg' />
          </div>

          <div className="flex flex-col w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left">Nettside: <a href="https://landbergbygg.no" target="_blank" rel="noopener noreferrer" className="font-light text-blue-500 hover:underline">landbergbygg.no</a></h2>
            <p className="text-sm font-medium sm:text-base lg:text-lg leading-relaxed text-center lg:text-left">
              Jeg har lagde en nettside for broren min sitt tømrerfirma. Dette prosjektet ga meg helhetlig erfaring med hvordan bruke react og javascript. Jeg lærte hvordan man kan lage en nettside og lære hvordan man kan bruke ulike verktøy for å hoste nettsiden.
            </p>
          </div>

        </div>

      </motion.div>
    </>
  )
}

export default Projects