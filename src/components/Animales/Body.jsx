import React, { Fragment } from 'react'

const Body = ({ children }) => {

    return <Fragment>
        <div className="animal__body__container">
            <div
                className="animal__body__text">
                <p>
                    {children}
                </p>
            </div>
        </div>
    </Fragment>

}

export default Body