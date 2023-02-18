import React from 'react'
import footerLogo from '../../../assets/shine-logo-mobile.svg'
import telegramLogo from '../../../assets/telegram-icon.svg'
import './footer.styles.css'

const Footer = () => (
    <div className='footer'>
        <img src={footerLogo} alt="" className="footer-logo" /> <br></br>
        <p className='email'>shineadvertising@gmail.com</p>
        <p className='phone'>+251964087128 |+251942706156</p>
        <div className="telegram-container">
            <img src={telegramLogo} alt="" className="telegram" />
            <span className='telegram-tag'>@shineads</span>
        </div>
        
    </div>
)

export default Footer