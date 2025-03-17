import { useState, useEffect } from "react"

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulerer lasting av data
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
  <> 
    <div className="flex flex-col justify-center">
      <div className="mt-20 border-b-2 border-solid border-black dark:border-gray-200">
        <h1 className="ml-5 text-9xl uppercase">Casper Landberg</h1>
      </div>

      <div className="flex justify-center h-screen">
        <p>Hello</p>
      </div>
    </div>
  </>
  );
}

export default App