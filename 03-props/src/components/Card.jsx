import React from 'react'

const Card = ( props ) => {
  return (
      <div className="card">
        <img src={props.img} alt="Profile" />
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card
