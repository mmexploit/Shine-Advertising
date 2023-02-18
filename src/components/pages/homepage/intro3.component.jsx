import React from "react";
import "./intro3.styles.css"


const Intro3 = () => (
    <div className="intro3">
        <p className="intro3-title">How it works</p>
        <div className="steps-wrapper">
            <div className="first-step">
                <div className="steps">
                <div className="small-avatar-img"></div>
                <p className="steps-title">1.Sign up to our site</p>
                <p className="steps-content">We support sign up with
                your own email and password or you can 
                use your google account to sign in</p>
            </div>

            <div className="steps">
                <div className="small-avatar-img2"></div>
                <p className="steps-title">2.Create new Ad</p>
                <p className="steps-content">Head over to your
                dashboard to create a new ad with 
                curated recommendations to create a successful ad</p>
            </div>
            </div>
            
            <div className="second-step">
                <div className="steps">
                <div className="small-avatar-img3"></div>
                <p className="steps-title">3.Head to Payment</p>
                <p className="steps-content"> Once content with
                your ad head to checkout section to make 
                payment to the ad you created, you can choose
                from the flexible pricing options that are available.</p>
            </div>

            <div className="steps">
                <div className="small-avatar-img4"></div>
                <p className="steps-title">4.Get Analytics</p>
                <p className="steps-content">Head Once you have made a 
                payment and the ad is active you will get live analytics 
                and data on how each of your ads are performing.</p>
            </div>
            </div>

            
        </div>
        
    </div>
)

export default Intro3