import React from "react"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Lenis from "lenis"

import { Outlet } from "react-router-dom"

function App() {

  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
