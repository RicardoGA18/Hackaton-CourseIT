import React from 'react'
import EventCard from '../common/EventCard'
import event from '../../assets/photos/event.png'

const Eventos = () => {
  return (
    <div className="Eventos">
      <EventCard
        img={event}
        title="Evento de animales"
        organize="Refugio Santa Rita Isabel"
        month="ABR"
        day="15"
      ></EventCard>
      <EventCard
        img={event}
        title="Evento de animales"
        organize="Refugio Santa Rita Isabel"
        month="ABR"
        day="15"
      ></EventCard>
      <EventCard
        img={event}
        title="Evento de animales"
        organize="Refugio Santa Rita Isabel"
        month="ABR"
        day="15"
      ></EventCard>
    </div>
  )
}

export default Eventos