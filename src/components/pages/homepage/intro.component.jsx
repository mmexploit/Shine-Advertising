import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../../custom-button/custom-button.component';
import { selectCurrentUser } from '../../../redux/user/user.selector';
import { connect  } from 'react-redux/es/exports'
import {createStructuredSelector} from 'reselect'

import './intro.styles.css'

const Intro = ( {currentUser }) => (
    <div className='intro'>
        <h1 className='intro-title'>Shine a <span className='light'>light</span> On Your Brand With Us!</h1>
        {/* <img className=""src="../../../assets/open-sign.png" alt="" /> */}
        {/* <p className='intro-desc'>A site where you get the all latest products at an affordable price!</p> */}
        <div className='open'></div>
        <p className='intro-subtitle'>New User? Sign up now and reach millions!</p>
        {
            currentUser ?
            <CustomButton id="sign-up-button">Signed in!</CustomButton>:
            <Link id="sign-up-button" to="/signin"><CustomButton >Sign up</CustomButton></Link>
        }
            
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        

    </div>
)

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(Intro);