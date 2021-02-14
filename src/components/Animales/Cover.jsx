import React, { Fragment } from 'react'
import CloseIcon from '../../assets/close_icon.svg'

const Cover = ({ alt, src, onClose, footer }) => {

    return <Fragment>
        <div className="animal__cover__container">
            <img className="animal__cover__image" alt={alt} src={src} />
            <button className="animal__cover__closebtn ripple" onClick={onClose}>
                <img src={CloseIcon} alt="close-icon" />
            </button>
            {footer && footer}
        </div>
    </Fragment>

}

export default Cover