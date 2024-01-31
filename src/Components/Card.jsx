import React from 'react'

export default function Card({image,name,capital,continent}) {
  return (
    <div className='card'>
        <img src={image} alt="" />
        
        <div className="text">
        <p> <b>Name:</b> {name}</p>
        <p> <b>Capital:</b> {capital}</p>
        <p> <b>Continent:</b> {continent}</p>
        </div>
    </div>
  )
}
