import React from 'react'
import Card from './Card'
import Pagination from './Pagination'
import Filter from './Filter'

const Rooms = () => {
  return (
    <>
    <h3 className='text-3xl text-teal-500 font-bold text-center p-5 '>Our Rooms</h3>
    <div className='sm:px-32 flex flex-col gap-y-10 mb-10'>
      <Filter />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Pagination />
    </div>
    </>
  )
}

export default Rooms