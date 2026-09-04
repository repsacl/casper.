import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom'

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
  const location = useLocation();
  // Kun forsiden ("/") skal vise intro-loaderen. Siden Layout kun
  // mountes ÉN gang per faktisk sideinnlasting (refresh), fanger
  // dette opp "man refresher på /about" uten at loaderen kommer der.
  const isHomePage = location.pathname === '/';

  const [loading, setLoading] = useState(isHomePage);

  // Forteller App.jsx om DENNE mounten skjer rett etter loaderen
  // (da skal den ikke fade inn selv, siden layoutId morfer teksten)
  // eller ved vanlig navigasjon internt (da skal den fade som de
  // andre sidene). Starter "true" kun når vi faktisk kommer fra
  // loaderen, og App.jsx setter den til false etter første mount.
  const skipHomeEnterRef = useRef(isHomePage);

  useEffect(() => {
    if (!isHomePage) return;

    // Hvor lenge intro-animasjonen skal vises før den viskes ut.
    // Juster dette tallet (i ms) til det som føles riktig.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, [isHomePage]);

  return (
    // Ingen mode="wait" her: Loader og hovedsiden må overlappe et
    // øyeblikk for at "Casper"-teksten skal kunne morfe sømløst
    // mellom dem via layoutId (se Loader.jsx og App.jsx).
    <AnimatePresence>
      {loading ? (
        <LoadingPage key="loading" />
      ) : (
        // Ingen opacity-fade på selve wrapperen, siden det ville
        // fadet ut/inn den morfende "Casper"-teksten sammen med resten.
        <div key="content">
          <NavBar />
          <main className="flex-grow pt-24">
            <AnimatePresence initial={false}>
              <Outlet context={{ skipHomeEnterRef }} />
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      )}
    </AnimatePresence>
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