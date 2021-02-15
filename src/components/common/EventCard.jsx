import React from 'react'

const EventCard = ({img,title,organize,month,day}) => {
  return (
    <div className="EventCard">
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