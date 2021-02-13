import React, { Fragment } from 'react'

const Cover = ({ alt, src, onClose }) => {

    return <Fragment>
        <div className="animal__cover__container">
            <img className="animal__cover__image" alt={alt} src={src} />
            <button className="animal__cover__closebtn" onClick={onClose}>x</button>
        </div>
    </Fragment>

}

export default Cover