import "../css/Animales.css";
import React, { Fragment } from "react";
import { useHistory, useParams } from "react-router-dom";
import Cover from "../components/Animales/Cover";
import Header from "../components/Animales/Header";
import Body from "../components/Animales/Body";
import Actions from "../components/Animales/Actions";
import Button from "../components/common/Button";

import link_icon from "../assets/link_icon.svg";
import share_icon from "../assets/share_icon.svg";
import foundation from '../assets/photos/foundation.png'

const Charity = () => {
    // let { id } = useParams();
    const history = useHistory();
    return (
        <Fragment>
            <div className="animal__container">
                <Cover
                    src={foundation}
                    alt="Dog"
                    onClose={() => {
                        history.push('/charities');
                    }}
                />
                <Header name="Abrigo Animal de Perú" location="Perú" />

                <Body>
                    Fue fundada en julio de 2001 con el objetivo de proteger a
                    los animales domésticos abandonados y maltratados, brindando
                    atención veterinaria, castración, vacunación y búsqueda de
                    nuevos hogares para estos animales además de promover la
                    concienciación de la población.
                </Body>
                <Actions>
                    <Button icon={link_icon}>Visitar Sitio Web</Button>
                    <Button icon={share_icon} variant="secondary">
                        Compartir
                    </Button>
                </Actions>
            </div>
        </Fragment>
    );
};

export default Charity;
