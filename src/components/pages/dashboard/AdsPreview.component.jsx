import { Button } from "@mantine/core";
import React from "react"
import { Link } from "react-router-dom";
import AdsAnalytics from "./AdsAnalytics.component";
import "./AdsPreview.styles.css"
import { useHistory } from "react-router-dom";

const AdsPreview = ({ad}) => {
    const adContent = ad;
    const history = useHistory();

    console.log({adContent})
    return (
    <div className="adsPreview-Page">
        <div className="ads">
            <p>ID: {adContent}</p>
            <Button onClick={() => {
                history.push({
                pathname: "/analytics",
                state: { adContent },
                });}
            }
                 color="orange">View Detailed Analytics</Button>
        </div>
    </div>
    )
}

export default AdsPreview