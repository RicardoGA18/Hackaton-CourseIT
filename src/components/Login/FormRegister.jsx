import React, { useState } from 'react'

const FormRegister = () => {
  let [name, setName] = useState('')
  let [password, setPassword] = useState('')
  let [email, setEmail] = useState('')

  let register = async (event) => {
    event.preventDefault()
    const data = {
      name,
      password,
      email
    }
    await fetch('http://localhost:4000/new',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  return (
    <form className="FormLogin">
      <input type="text" placeholder="Usuario" onChange={(event)=>{setName(event.target.value)}}/>
      <input type="email" placeholder="E-mail" onChange={(event)=>{setEmail(event.target.value)}}/>
      <input type="password" placeholder="Contraseña" onChange={(event)=>{setPassword(event.target.value)}}/>
      <input type="submit" value="Registrar" onClick={register} />
    </form>
  )
}

export default FormRegister