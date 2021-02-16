import React from 'react'
import '../css/Account.css'
import backAccount from '../assets/photos/backAccount.png'

const Account = () => {
  return (
    <div className="Account">
      <div className="Account__Head">
        <img src={backAccount}/>
        <p>Perfil</p>
      </div>
    </div>
  )
}

export default Account