import React from 'react'
import '../css/Login.css'
import Title from '../components/Login/Title'
import FormRegister from '../components/Login/FormRegister'
import FormFooter from '../components/Login/FormFooter'

const Register = () => {
  return (
      <div className="container Login">
        <div className="Login__Form">
          <Title
            title="Sea parte de la familia."
            subtitle="¡Es fácil!"
          ></Title>
          <FormRegister></FormRegister>
        </div>
        <div className="Login__Footer">
          <FormFooter
            question="¿Ya registrado?"
            link="Login."
          ></FormFooter>
        </div>
      </div>
  )
}

export default Register
