import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full overflow-hidden shrink-0 relative w-80 bg-blue-900 rounded-4xl'>
      <img className= 'h-full w-full object-cover' src={props.img}></img>
      <RightCardContent id={props.id} color={props.color} tag={props.tag}/>
    </div>
  )
}

export default RightCard
