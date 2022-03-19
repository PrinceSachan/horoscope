import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';

//components
import SelectSign from '../SelectSign';
import SelectDay from '../SelectDay';
import Details from '../Details';

//style
import './Input.css'

const Input = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [selectedSign, setSelectedSign] = useState();
  const [selectedTimeFrame, setSelectedTimeFrame] = useState();
  const [horoscope, setHoroscope] = useState([]);
  const [data, setData] = useState();
  const [showForm, setShowForm] = useState(true);
  

  useEffect(() => {
    let item = JSON.parse(localStorage.getItem('horoscope'))
    // console.log(item)
    if (item) {
      setData(item)
      setShowForm(false)
    }

  }, [])

  const reset = () => {
    setSelectedSign(null);
    setSelectedTimeFrame(null);
    setName();
    setEmail();
    setData(null);
    setHoroscope(null);
    setShowForm(true)
    localStorage.clear()
  };

  async function handleSubmit(e) {

    e.preventDefault();
    const options = {
      method: 'POST',
      url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
      params: { sign: selectedSign, day: selectedTimeFrame },
      headers: {
        'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
        'x-rapidapi-key': '8995cf3283msh06de5ec46aa7722p1c89c3jsn1d79f5e64eae'
      }
    };

    await axios.request(options).then(function (response) {
      // console.log(response.data);
      
      let dummy = {
        ...response.data,
        sign: selectedSign,
        day: selectedTimeFrame,
        name: name,
        
      }

      console.log(dummy)
      localStorage.setItem('horoscope', JSON.stringify(dummy))
      setData(dummy)
      setShowForm(false)
    }).catch(function (error) {
      console.error(error);
    });
  }
  return (
    <div className='form-demo'>
      {showForm ? (
        <div className="flex justify-content-center">
          <div className="card box">
            <h5 className="text-center text-xl">
              Enter Your Details
            </h5>
            <form className="p-fluid" onSubmit={(e) => handleSubmit(e)}>
              <div className="field">
                <span className="p-float-label">
                  <InputText
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </span>
              </div>
              <div className="field">
                <span className="p-float-label p-input-icon-right">
                  <i className="pi pi-envelope" />
                  <InputText
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </span>
              </div>
              {!selectedSign && (<SelectSign onSignSelected={setSelectedSign} />)}
              {selectedSign && <h2 className="cap text-center font-normal"><span>{selectedSign}</span> Horoscope For</h2>}
              <h2 className="cen font-normal">{selectedTimeFrame}</h2>
              {selectedSign && (<SelectDay onDaySelected={setSelectedTimeFrame} />)}
              <Button type="reset" label="Reset" onClick={reset} className="mt-2" />
              {selectedTimeFrame && <Button type="submit" label="Submit" className="mt-2" />}
            </form>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Details data={data} />
          <Button type="reset" label="Reset" onClick={reset} className="mt-2" />
        </div>
      )}
    </div>
  );
};
export default Input;