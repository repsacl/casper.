import React from 'react'
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
        <Typewriter
          options={{
            strings: ["Casper", "Repsac"],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
          className="text-2xl"
        />
  )
}

export default TypeWriter