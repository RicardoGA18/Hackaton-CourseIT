import "../css/Animales.css";
import React, { Fragment } from "react";
import { useParams, useHistory } from "react-router-dom";
import Cover from "../components/Animales/Cover";
import Header from "../components/Animales/Header";
import Body from "../components/Animales/Body";
import Actions from "../components/Animales/Actions";
import Button from "../components/common/Button";

import coins_icon from "../assets/coins_icon.svg";
import share_icon from "../assets/share_icon.svg";
import bobAnimal from '../assets/photos/bobAnimal.png'

const Animales = () => {
    // let { id } = useParams();
    const history = useHistory()
    return (
        <Fragment>
            <div className="animal__container">
                <Cover
                    src={bobAnimal}
                    alt="Dog"
                    onClose={() => {history.push('/')}}
                />
                <Header name="Bob" location="Perú" />

                <Body>
                    ¡Bob es lindo, súper cariñoso y le encanta jugar! Pero no todo es divertido,
                    ¿verdad? Necesita ser castrado y para eso necesitamos recolectar 1,000 monedas.
                </Body>
                <Actions>
                    <Button icon={coins_icon}>Adoptar a Bob</Button>
                    <Button icon={share_icon} variant="secondary">
                        Compartir
                    </Button>
                </Actions>
            </div>
        </Fragment>
    );
};

export default Animales;
