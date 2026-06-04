import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const Navigate = useNavigate()

  return (
    <div className='bg-cyan-800 py-2 px-6 flex gap-5'>
      <button 
      onClick={()=>{
        Navigate('/')
      }} 
      className='bg-amber-800 px-6 py-1 rounded active:scale-95'>Return to Home</button>
      
      <button 
      onClick={()=>{
        Navigate(-1)
      }} 
      className='bg-amber-800 px-6 py-1 rounded active:scale-95'>Back</button>
      <button 
      onClick={()=>{
        Navigate(+1)
      }} 
      className='bg-amber-800 px-6 py-1 rounded active:scale-95'>Next</button>
    </div>
  )
}

export default Navbar2
