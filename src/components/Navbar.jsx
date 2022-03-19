import React from 'react'

//styles & image
import './Navbar.css'
import Horoscope from './assets/horoscope.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li className="logo">
          <img src={Horoscope} alt="Horoscope logo" />
          <span>Horoscope</span>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
