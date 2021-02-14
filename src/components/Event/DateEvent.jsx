import React, { Fragment } from 'react'

const DateEvent = ({ month, day }) => {
    return <Fragment>
        <div className="event__dateevent__container">
            <p className="event__dateevent__month">
                {month}
            </p>
            <p className="event__dateevent__day">
                {day}
            </p>
        </div>
    </Fragment>
}

export default DateEvent