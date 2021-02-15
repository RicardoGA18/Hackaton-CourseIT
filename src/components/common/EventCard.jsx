import React from 'react'
import { useHistory } from "react-router-dom";

const EventCard = ({img,title,organize,month,day}) => {
  const history = useHistory()

  return (
    <div className="EventCard" onClick={()=>{history.push('/evento/1')}}>
      <img src={img} />
      <div className="EventCard__Info">
        <p className="EventCard__Title">{title}</p>
        <p className="EventCard__Organize">{organize}</p>
      </div>
      <div className="EventCard__Date">
        <p className="month">{month}</p>
        <p className="day">{day}</p>
      </div>
    </div>
  )
}

export default EventCard