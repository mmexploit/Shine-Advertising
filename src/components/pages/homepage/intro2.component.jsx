import React from 'react'

import './intro2.styles.css'

const Intro2 = () => (
    <div className='intro2'>
    <div className='services-provided'>Services We Provide</div>
    
        
        
        <div className="cards-wrapper">
            <div className='card reveal'>
                <div className='bell'></div>
                <p className='card-title'>Ad Creation</p>
                <p className='card-content'>Get assisted
                help in creating an ad with curated 
                and reasearch backed ways to create successful ads</p>
            </div>
            <div className='card reveal'>
                <div className='bell'></div>
                <p className='card-title'>Manage Ads</p>
                <p className='card-content'>Get a custom dashboard 
                of your current running ads right from your dashboard</p>
            </div>
            <div className='card reveal'>
                <div className='bell'></div>
                <p className='card-title'>Live Data</p>
                <p className='card-content'>Get live data analytics of 
                how your ad is performing right from your dashboard 
                without having to go anywhere</p>
            </div>
        </div>
        
    </div>
)

export default Intro2;

{/* <h2 className='intro2-title'>What do you need?</h2>
        <div className="first-section">
            <div className='image1 reveal'/>
            <div className='image2 reveal'/>
        </div>
        <div className='image3 reveal'/>
        <div className="content-container">
            <p className='intro2-content'>All your needs</p>
            <p className='intro2-content'>at an affordable price</p>
        </div> */}