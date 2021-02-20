import React from 'react'
import AnimalCard from '../common/AnimalCard'
import { useHistory } from "react-router-dom";

import bob from '../../assets/photos/bob.jpg'
import scoob from '../../assets/photos/scoob.jpg'
import sweet from '../../assets/photos/sweet.jpg'
import AddAnimal from '../../assets/photos/AddAnimal.png'

const Animales = () => {
  const history = useHistory()

  return (
    <div className="Animales">
      <div className="AnimalCard" onClick={()=>{history.push('/anadir-animal')}}>
        <img src={AddAnimal}/>
      </div>
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