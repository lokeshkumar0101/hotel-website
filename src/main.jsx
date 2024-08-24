import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Catagories from './Components/Catagories.jsx'
import Hero from './Components/Hero.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'
import Rooms from './Components/Rooms.jsx'
import Services from './Components/Services.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Hero />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='rooms' element={<Rooms />} />
      <Route path='services' element={<Services />} />
      <Route path='catagories' element={<Catagories />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
