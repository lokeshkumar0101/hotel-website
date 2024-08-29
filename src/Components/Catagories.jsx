import React from 'react'
import { Link } from 'react-router-dom'

const Catagories = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-12 lg:px-8 -mt-[310px] sm:mt-0">
    <header className="text-center">
      <h2 className="text-3xl font-bold text-teal-600 sm:text-4xl">Room Catagories</h2>
    </header>

    <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <li>
        <a href="#" className="group relative block">
          <img
            src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">Standard Room</h3>

            <Link
            to='/standard'
              className="mt-1.5 inline-block bg-teal-500 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Book Now
            </Link>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group relative block">
          <img
            src="https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">Premium Room</h3>

            <Link
            to="/premium"
              className="mt-1.5 inline-block bg-teal-500 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Book Now
            </Link>
          </div>
        </a>
      </li>

      <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <a href="#" className="group relative block">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">Book Your Sweet</h3>

            <Link
            to="/sweet"
              className="mt-1.5 inline-block bg-teal-500 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Book Now
            </Link>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>

  )
}

export default Catagories