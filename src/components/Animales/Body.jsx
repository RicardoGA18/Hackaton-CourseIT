import React, { Fragment } from 'react'

const Body = ({ children }) => {

    return <Fragment>
        <div className="animal__body__container">
            <p>
                {children}
            </p>
        </div>
    </Fragment>

}

export default Body