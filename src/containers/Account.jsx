import React from 'react'
import { useHistory } from "react-router-dom";
import '../css/Account.css'
import backAccount from '../assets/photos/backAccount.png'
import account from '../assets/photos/account.png'
import email from '../assets/photos/email.png'
import Mascota from '../components/Account/Mascota'
import animal from '../assets/photos/mascota.png'

const Account = () => {
  const history = useHistory()

  return (
    <div className="Account">
      <div className="Account__Head">
        <img src={backAccount} onClick={()=>{history.push('/')}} />
        <p>Perfil</p>
      </div>
      <div className="Account__Body">
        <div className="Account__Info">
          <div className="name">
            <div className="Account__Img">
              <img src={account} />
            </div>
            <p>Sofia</p>
          </div>
          <div className="email">
            <img src={email} />
            <p>sofia@example.com</p>
          </div>
        </div>
        <div className="Account__Animals">
          <div className="Account__Animals__Name">
            <p>Mascotas</p>
          </div>
          <div className="Account__Animals__Container">
            <Mascota id="1" img={animal}></Mascota>
            <Mascota id="1" img={animal}></Mascota>
            <Mascota id="1" img={animal}></Mascota>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account