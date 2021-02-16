import React from 'react'
import { useHistory } from "react-router-dom";

const Mascota = ({id,img}) => {
  const history = useHistory()
  return (
    <div className="Mascota" onClick={()=>{history.push(`/animal/${id}`)}}>
      <img src={img} />
    </div>
  )
}

export default Mascota