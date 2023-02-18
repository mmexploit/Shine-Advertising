import React from 'react';
import './homepage.styles.css'
import Intro from './intro.component';
import Intro2 from './intro2.component';
import Intro3 from './intro3.component';


export const HomePage = () => {
    return (
    <div className="homepage">
        <Intro/> 
        <Intro2/>
        <Intro3/>
       
    </div>
    )
}