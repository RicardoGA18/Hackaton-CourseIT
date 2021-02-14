import React from 'react'
import '../css/Login.css'
import Title from '../components/Login/Title'
import FormLogin from '../components/Login/FormLogin'
import FormFooter from '../components/Login/FormFooter'

const Login = () => {
  return (
      <div className="container Login">
        <div className="Login__Form">
          <Title
            title="Es bueno hacer el bien."
            subtitle="¡Vamos allá!"
          ></Title>
          <FormLogin></FormLogin>
        </div>
        <div className="Login__Footer">
          <FormFooter
            question="¿Todavía no estas registrado?"
            link="Crear una cuenta."
          ></FormFooter>
        </div>
      </div>
  )
}

export default Login
