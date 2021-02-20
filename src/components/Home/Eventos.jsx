import React from 'react'
import { useHistory } from "react-router-dom";
import EventCard from '../common/EventCard'
import event from '../../assets/photos/event.png'

import AddEvent from '../../assets/photos/AddEvent.png'
import plus from '../../assets/photos/plus.png'

const Eventos = () => {
  const history = useHistory()

  return (
    <div className="Eventos" onClick={()=>{history.push('/anadir-evento')}}>
      <div className="EventCard">
        <img src={AddEvent} />
        <div className="EventCard__plus">
          <img src={plus} />
        </div>
        <div className="EventCard__Info">
          <p className="EventCard__Title is-plus">Agregar Evento</p>
        </div>
      </div>
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