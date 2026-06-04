import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex gap-10 p-4 justify-center'>
        <Link className='text-lg font-medium' to='/product/men' >Men</Link>
        <Link className='text-lg font-medium' to='/product/women' >Women</Link>
        <Link className='text-lg font-medium' to='/product/kids' >Kids</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Product
