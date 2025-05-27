import React from 'react'
import { useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import { motion, AnimatePresence } from 'motion/react'

import App from './pages/App.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'

import LoadingPage from './pages/LoadingPage.jsx'
import Nopage from './pages/Nopage.jsx'

import NavBar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import './index.css'

function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulerer lasting av data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <LoadingPage /> : 
      (
        <>
      <NavBar />
      <main className="flex-grow">
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
      </main>
      <Footer />
      </>
      )}
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Nopage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
    ],
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
