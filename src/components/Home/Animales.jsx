import React from 'react'
import AnimalCard from '../common/AnimalCard'

import bob from '../../assets/photos/bob.jpg'
import scoob from '../../assets/photos/scoob.jpg'
import sweet from '../../assets/photos/sweet.jpg'

const Animales = () => {
  return (
    <div className="Animales">
      <AnimalCard
        img={bob}
        name="Bob"
      ></AnimalCard>
      <AnimalCard
        img={scoob}
        name="Scoob"
      ></AnimalCard>
      <AnimalCard
        img={sweet}
        name="Sweet"
      ></AnimalCard>
      <AnimalCard
        img={scoob}
        name="Scoob"
      ></AnimalCard>
      <AnimalCard
        img={bob}
        name="Bob"
      ></AnimalCard>
      <AnimalCard
        img={scoob}
        name="Scoob"
      ></AnimalCard>
    </div>
  )
}

export default Animales