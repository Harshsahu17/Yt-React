import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full overflow-x-auto flex flex-no-wrap gap-10 w-2/3 p-5'>
      {props.users.map((elem, idx) =>{
          return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
