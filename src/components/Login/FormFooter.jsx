import React from 'react'

const FormFooter = ({question,link}) => {
    return (
      <div className="FormFooter">
        <p className="FormFooter__Question">{question}</p>
        <p className="FormFooter__Link">{link}</p>
      </div>
    )
}

export default FormFooter