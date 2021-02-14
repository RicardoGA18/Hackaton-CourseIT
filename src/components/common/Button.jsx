import React from 'react'



const Button = ({ children, icon, variant, onClick }) => {

    const v = variant ?? "primary"

    const defaultOnClick = () => {
        console.log("default-onClick")
        onClick && onClick()
    }

    return <button className={`custom__button custom__button__${v}`} onClick={defaultOnClick} >
        {icon && <img src={icon} className="custom__button__icon" alt={children} />}
        <p>
            {children}
        </p>
    </button>
}

export default Button