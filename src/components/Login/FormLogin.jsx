import React from 'react'

const FormLogin = () => {
    return (
        <form className="FormLogin">
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <input type="submit" value="Ingresar" />
        </form>
    )
}

export default FormLogin
