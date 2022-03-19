import React, {useState} from 'react'

const SelectDay = ({ onDaySelected }) => {
  const [disabled, setDisabled] = useState(false)
  // const days = 

  return (
    <div>
      {!disabled && <div className="grid-container">
        {['Yesterday', 'Today', 'Tomorrow'].map((timeframes) => (
          <button 
            className="grid-item"
            key={timeframes}
            disabled={disabled}
            onClick={() => {
              onDaySelected(timeframes);
              setDisabled(true);
            }}
          >{timeframes}</button>
        ))}
      </div> }
    </div>
  )
}

export default SelectDay