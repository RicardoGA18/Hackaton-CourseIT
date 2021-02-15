import React from 'react'
import { useHistory } from "react-router-dom";

const AnimalCard = ({img, name}) => {
  const history = useHistory()

  return (
    <div className="AnimalCard" onClick={()=>{history.push('/animal/1')}}>
      <img src={img} />
      <p>{name}</p>
    </div>
  )
}

export default AnimalCard