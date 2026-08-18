import React from 'react'

function Nopage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
        her gikk du feil desverre gå tilbake til <a href="/" className="text-blue-700 hover:underline">hjemmesiden</a>.
      </p>
    </div>
  )
}

export default Nopage