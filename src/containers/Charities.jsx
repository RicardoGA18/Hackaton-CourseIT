import "../css/Charities.css";
import React, { Fragment } from "react";
import Header from "../components/Charities/Header";
import arrow_left_icon from "../assets/arrow_left_icon.svg";
import CharitieCard from "../components/Charities/CharitieCard";

const Charities = () => {
    return (
        <Fragment>
            <div className="charities__container">
                <Header icon={arrow_left_icon} title="Donaciones" />
                {[...new Array(10)].map((_, idx) => (
                    <div key={idx} style={{ marginBottom: 20 }}>
                        <CharitieCard
                            onClick={() => {
                                console.log("CharitieCard-clicked", idx);
                            }}
                            img="https://www.californiaemploymentlawreport.com/wp-content/uploads/sites/747/2018/12/volunteers.jpg"
                            title="Abrigo Animal de Perú"
                            details="Refugio de perros y gatos"
                        />
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default Charities;
