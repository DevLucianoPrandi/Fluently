import React from 'react'
import './footer.css'
import Logo from '../../assets/img/logo.png'

function footer() {
    return (
        <div className='footer'>
            <div className='logofoot'>
                <img src={Logo} alt="Fluently-logo" />
            </div>
        </div>
    )
}

export default footer
