import { useState } from "react"
import ThemeToggle from "../components/useTheme.jsx"

function Contact() {

  return (
    <main>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Contact</h1>
        <ThemeToggle />
      </div>
    </main>
  );
}

export default Contact