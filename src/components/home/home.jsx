import React, { useRef } from 'react'
import './home.css'
import Image1 from '../../assets/img/carrouselhome/imagen1.jpg'
import Image2 from '../../assets/img/carrouselhome/imagen2.jpg'
import Image3 from '../../assets/img/carrouselhome/imagen3.jpg'
import Image4 from '../../assets/img/carrouselhome/imagen4.jpg'

function Home() {

  const grande = useRef('grande')
  const punto = useRef('punto')

  punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
      let posicion = i
      let operacion = posicion * -25

      grande.style.transform = `translateX(${operacion}%)`

      punto.forEach((cadaPunto, i) => {
        punto[i].classList.remove('activo')
      })
      punto[i].classList.add('activo')
    })
  })

  return (
    <div className='home'>
      <div className='carrousel'>
        <div className='grande' ref={'grandeRef'}>
          <img className='fotohome' src={Image1} alt='carrousel1' />
          <img className='fotohome' src={Image2} alt='carrousel2' />
          <img className='fotohome' src={Image3} alt='carrousel3' />
          <img className='fotohome' src={Image4} alt='carrousel4' />
        </div>
        <ul className='puntos'>
          <li className='punto activo' ref={'puntoRef'}></li>
          <li className='punto' ref={'puntoRef'}></li>
          <li className='punto' ref={'puntoRef'}></li>
          <li className='punto' ref={'puntoRef'}></li>
        </ul>
      </div>
      <div className='contenidohome'></div>
    </div>
  )
}
export default Home