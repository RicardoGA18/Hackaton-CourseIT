import React from 'react'
import '../css/Form.css'
import { useHistory } from "react-router-dom";

const AddAnimal = () => {
  const history = useHistory();

  return (
    <div className="FormAdd">
      <div className="FormAdd__Head">
        <svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>{history.push('/')}}>
          <path fillRule="evenodd" clipRule="evenodd" d="M14.5269 3.67199C15.1577 3.06074 15.1577 2.0697 14.5269 1.45844C13.896 0.847186 12.8732 0.847186 12.2424 1.45844L1.47314 11.8932C0.842288 12.5045 0.842288 13.4955 1.47314 14.1068L12.2424 24.5416C12.8732 25.1528 13.896 25.1528 14.5269 24.5416C15.1577 23.9303 15.1577 22.9393 14.5269 22.328L4.89988 13L14.5269 3.67199Z" fill="white" stroke="white" strokeWidth="1.96"/>
        </svg>
        <h1 className="FormAdd__Name">Añadir Animal</h1>
      </div>
      <form className="FormAdd__Container">
        <input type="text" className="FormAdd__Input" placeholder="Nombre del animal" required/>
        <input type="text" className="FormAdd__Input" placeholder="País" required/>
        <input type="text" className="FormAdd__Input" placeholder="Especie" required/>
        <input type="number" className="FormAdd__Input" placeholder="Edad" required/>
        <textarea className="FormAdd__Textarea" placeholder="Descripción" required></textarea>
        <input type="submit" className="FormAdd__Submit" value="Añadir"/>
      </form>
    </div>
  )
}

export default AddAnimal