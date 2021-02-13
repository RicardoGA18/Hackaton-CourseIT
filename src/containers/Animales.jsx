import "../css/Animales.css"
import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom';
import Cover from '../components/Animales/Cover'
import Header from "../components/Animales/Header";
import Body from "../components/Animales/Body";
import Actions from "../components/Animales/Actions";

const Animales = () => {
    // let { id } = useParams();
    return <Fragment>
        <div className="animal__container">
            <Cover src="https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703.jpeg"
                alt="Dog" />
            <Header name="Bob" location="Perú" onClose={() => { }} />

            <Body >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi nobis nisi quia porro! Officiis explicabo possimus praesentium nemo, nulla consequuntur dignissimos consequatur atque minus ipsa quod voluptatem? Neque, enim nemo.
            </Body>
            <Actions>
                <button style={{ width: 130 }}>Adoptar a Bob</button>
                <button style={{ width: 100 }}>Compartir</button>

            </Actions>
        </div>
    </Fragment>
}

export default Animales