import React from "react"
import Navbar from "./Navbar"
import Testimonials from "./Testimonials"
import Footer from "./Footer"
import FaqSection from "./FaqSection"
import Hero from "./Hero"
import Lenis from "lenis"
import Catagories from "./Catagories"
import Inquiry from "./Inquiry"

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
      <Hero />
      <Catagories />
      <Testimonials />
      <FaqSection />
      <Inquiry />
      <Footer />
    </>
  )
}

export default App
