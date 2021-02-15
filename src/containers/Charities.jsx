import "../css/Charities.css";
import React, { Fragment } from "react";
import Header from "../components/Charities/Header";
import arrow_left_icon from "../assets/arrow_left_icon.svg";
import CharitieCard from "../components/Charities/CharitieCard";
import { useHistory } from "react-router-dom";

import charity from '../assets/photos/charity.png'

const Charities = () => {
    const history = useHistory();
    return (
        <Fragment>
            <div className="charities__container">
                <Header icon={arrow_left_icon} title="Donaciones" onBack={()=>{history.push('/')}}/>
                <div className="charitiercard__grid">
                    {[...new Array(3)].map((_, idx) => (
                        <CharitieCard
                            key={idx}
                            onClick={() => {
                                history.push(`/charities/${idx}`);
                            }}
                            img={ charity }
                            title="Abrigo Animal de Perú"
                            details="Refugio de perros y gatos"
                        />
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default Charities;
