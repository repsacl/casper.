import { useState } from "react"
import ThemeToggle from "../components/useTheme.jsx"

function About() {

  return (
    <main>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">About</h1>
        <ThemeToggle />
      </div>
    </main>
  );
}

export default About