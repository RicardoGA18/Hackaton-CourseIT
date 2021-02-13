import React, { Fragment } from 'react'

const Actions = ({ children }) => {
    return <Fragment>
        <div className="animal__actions__container">
            {children}
        </div>
    </Fragment>
}

export default Actions