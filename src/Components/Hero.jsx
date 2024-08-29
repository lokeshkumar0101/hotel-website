import React from 'react'
import Testimonials from './Testimonials'
import FaqSection from './FaqSection'
import Inquiry from './Inquiry'
import { Link } from 'react-router-dom'
import Catagories from './Catagories'

const Hero = () => {
  return (

    <>
    <div className='h-screen w-full'>

      <section className="relative bg-[url(https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Book Your Stay.

              <span className="sm:block"> With Us. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
              numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded border border-white hover:bg-[#0d9488] ease-in-out duration-300 px-12 py-3 text-sm font-medium text-white bg-transparent hover:text-white  active:text-opacity-75 sm:w-auto"
                to='rooms'
              >
                Book a Room
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Catagories/>
     <Testimonials />
     <FaqSection />
     <Inquiry />

     </>
  )
}

export default Hero