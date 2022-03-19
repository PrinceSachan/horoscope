import React, {useState, useEffect} from 'react'
import { getSigns } from '../services/signapi'

const SelectSign = ({ onSignSelected }) => {
  const [sign, setSign] = useState([])

  useEffect(() => {
    getSigns().then(setSign)
  }, []);

  return (
    <div>
      <center className="horo-text">Select Your Horoscope</center>
      <div className="field">
        <span className="p-float-label">
          <div className="grid-container">
            {sign.map((sign) => (
              <button 
                key={sign} 
                className="grid-item" 
                onClick={() => onSignSelected(sign)}
              >{sign}</button>
            ))}
          </div>
        </span>
      </div>
    </div>
  )
}

export default SelectSign