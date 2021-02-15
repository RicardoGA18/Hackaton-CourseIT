import React from "react";

export default ({ img, title, details, onClick }) => {
    return (
        <div className="charitiercard__container" onClick={onClick}>
            <img src={img} alt={title} />
            <div className="charitiercard__container__body">
                <h2>{title}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};
