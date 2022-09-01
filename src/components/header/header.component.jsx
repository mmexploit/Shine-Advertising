import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/trendy-logo-mobile.svg'

import './header.styles.css'

const Header  = ({currentUser}) => (
    <div className='header'>
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className='option'>
            <Link className='option' to="/shop">
                Shop
            </Link>
            <Link className='option' to="/shop">
                Contact
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                :
                <Link className='option' to='/signin'>Sign In</Link>
            }
        </div>

    </div>
)

export default Header;