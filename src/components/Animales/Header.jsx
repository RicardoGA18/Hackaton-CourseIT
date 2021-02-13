import React, { Fragment } from 'react'

const Header = ({ name, location }) => {

    return <Fragment>
        <div className="animal__header__container">
            <h1 className="animal__header__name">{name}</h1>
            <p className="animal__header__location">{location}</p>

        </div>
    </Fragment>

}

export default Header