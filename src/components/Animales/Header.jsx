import React, { Fragment } from 'react'
import LocationIcon from '../../assets/location_icon.svg';

const Header = ({ name, location }) => {

    return <Fragment>
        <div className="animal__header__container">
            <h1 className="animal__header__name">{name}</h1>

            <div className="animal__header__location">
                <img src={LocationIcon} alt="icon-location" style={{ width: 25, height: 25 }} />
                <p>
                    {location}
                </p>
            </div>
        </div>
    </Fragment>

}

export default Header