import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import App from './pages/App.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Nopage from './pages/Nopage.jsx'

import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

import './index.css'

function Layout() {
  return (
    <>
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
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
        path: '/contact',
        element: <Contact />,
      },
    ],
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
