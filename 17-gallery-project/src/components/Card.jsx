import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.user.url} target="_blank" >
            <div className='h-40 w-44 rounded-xl overflow-hidden'>
              <img className='h-full w-full object-cover' src={props.user.download_url} alt={props.user.author}></img>
            </div>
            <h2 className='text-md font-semibold'>{props.user.author}</h2>
        </a>
    </div>
  )
}

export default Card
