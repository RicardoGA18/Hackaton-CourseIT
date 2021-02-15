import React from 'react'

const AnimalCard = ({img, name}) => {
  return (
    <div className="AnimalCard">
      <img src={img} />
      <p>{name}</p>
    </div>
  )
}

export default AnimalCard