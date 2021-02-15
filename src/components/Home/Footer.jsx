import React from 'react'
import contenido from '../../assets/contenido.svg'
import perfil from '../../assets/perfil.svg'
import blog from '../../assets/blog.svg'

const Footer = () =>{
  return (
    <div className="FooterHome">
      <div className="FooterHome__Item">
        <img src={contenido} />
        <p>Contenido</p>
      </div>
      <div className="FooterHome__Item">
        <img src={blog} />
        <p>Blog Animal</p>
      </div>
      <div className="FooterHome__Item">
        <img src={perfil} />
        <p>Perfil</p>
      </div>
    </div>
  )
}

export default Footer