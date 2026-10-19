import React from 'react'
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
        <Typewriter
          options={{
            strings: ["Casper", "Casper Landberg"],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
  )
}

export default TypeWriter