import React from 'react'
import AnimalCard from '../common/AnimalCard'
import EventCard from '../common/EventCard'

import bob from '../../assets/photos/bob.jpg'
import scoob from '../../assets/photos/scoob.jpg'
import event from '../../assets/photos/event.png'
import dogfoodbowl from '../../assets/dog-food-bowl.svg'
import shape from '../../assets/Shape.svg'

const Todos = () => {
  return (
    <div className="Todos">
      <AnimalCard
        img={bob}
        name="Bob"
      ></AnimalCard>
      <AnimalCard
        img={scoob}
        name="Scoob"
      ></AnimalCard>
      <EventCard
        img={event}
        title="Evento de animales"
        organize="Refugio Santa Rita Isabel"
        month="ABR"
        day="15"
      ></EventCard>
      <div className="CardDonacion">
        <img src={dogfoodbowl}/>
        <p>Donación al<br />Refugio de<br />Animales</p>
      </div>
      <div className="CardAyuda">
        <img src={shape}/>
        <p>Ayuda<br />Animal<br />24/7</p>
      </div>
    </div>
  )
}

export default Todos