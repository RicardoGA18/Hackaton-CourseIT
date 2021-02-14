import React from 'react'

const FormRegister = () => {
    return (
      <form className="FormLogin">
        <input type="text" placeholder="Usuario" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Contraseña" />
        <input type="submit" value="Registrar" />
      </form>
    )
}

export default FormRegister