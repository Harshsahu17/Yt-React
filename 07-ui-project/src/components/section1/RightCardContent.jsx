import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute h-full w-full top-0 left-0 p-8 flex flex-col justify-between'>
        <h2 className='bg-white h-12 w-12 rounded-full font-semibold flex items-center justify-center text-xl'>{props.id+1}</h2>
        <div>
            <p className='text-shadow-2xs text-xl font-semibold leading-relaxed text-white mr-7 mb-19'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti suscipit voluptates inostrum sit quas possimus ducimus fugiat.</p>
            <div className='text-white flex justify-between'>
                <button style={{backgroundColor:props.color}}className='font-medium h-12 w-45 text-xl text-start pl-6 rounded-full'>{props.tag}</button>
                <button className='h-11 w-13 text-2xl rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
