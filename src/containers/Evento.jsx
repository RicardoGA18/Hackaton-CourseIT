import "../css/Animales.css"
import "../css/Event.css"
import React, { Fragment } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import Cover from '../components/Animales/Cover'
import Header from "../components/Animales/Header";
import Body from "../components/Animales/Body";
import Actions from "../components/Animales/Actions";
import Button from "../components/common/Button";

import calendar_icon from '../assets/calendar_icon.svg'
import share_icon from '../assets/share_icon.svg'
import DateEvent from "../components/Event/DateEvent";
import eventCover from '../assets/photos/eventCover.png'

const Animales = () => {
    // let { id } = useParams();
    const history = useHistory()
    return <Fragment>
        <div className="animal__container">
            <Cover src={eventCover}
                onClose={() => {history.push('/')}} 
                alt="Dog"
                footer={<div className="event__dateevent__custom__container"><DateEvent month="abr" day={15} /></div>} />
            <div className="animal__container__body">
                <Header name="Evento de Animales" location="Perú, Abrigo Animal"/>
                <Body >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi nobis nisi quia porro! Officiis explicabo possimus praesentium nemo.
                </Body>
                <Actions>
                    <Button icon={calendar_icon}>Comprar Ticket</Button>
                    <Button icon={share_icon} variant="secondary" >Compartir</Button>
                </Actions>
            </div>
        </div>
    </Fragment>
}

export default Animales