import React from 'react'
import './navbar.css'
import Logo from '../../assets/img/logo.png'

function Navbar() {
  return (
    <div className='barra'>
      <div div className='logo' >
        <img src={Logo} alt="Fluently-logo" />
      </div>
      <div className='navbar'>
        <ul>
          <li>Home</li>
          <li>Servicios</li>
          <li>Idiomas</li>
          <li>Niveles</li>
          <li>Alumnos</li>
          <li>Contacto</li>
        </ul>
      </div>
      <button className='btnReserva' type='button'>Reservá tus clases!</button>
    </div>
  )
}
export default Navbar