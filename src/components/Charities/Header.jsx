import React from 'react'

export default ({ icon, title, onBack }) => {
    return <div className="charitier__header__container" >

        <button onClick={onBack} className="charitier__header__icon__container">
            <img src={icon} alt={title} />
        </button>
        <div className="charitier__header__text__container">
            <h2>{title}</h2>
        </div>

    </div>
}