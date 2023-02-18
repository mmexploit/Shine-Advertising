import { Button } from "@mantine/core";
import React, { useState, useEffect, useCallback } from "react";
import "./AdsAnalytics.styles.css"
import { Loader } from "@mantine/core";

const AdsAnalytics = ({location}) => {
  const [analytics, setAnalytics] = useState(null);
  const [fetchData, setFetchData] = useState(true);
  const adContentString = location ? location.state.adContent : "null";
  const adContent = encodeURIComponent(adContentString)

  console.log({adContent})

  const accessToken = 'EAAMgTox8EFwBANyzfXZAMIqHL3oPSptivYxN8weToZAzfMcvZB92JHcoYMEBZBNUhrrWr8ObSvnTqnAyDZChlzJHNnjS8liUa9epZB13VqfiCa0z7XXy4dj5BlLIIZATW9ZC3MTZAAMU2JdLbTFgHYzLeCUjG21GViGtWamTeZChDC8wZDZD';
  const adObjectId = adContent
  const apiUrl = `https://graph.facebook.com/v16.0/${adObjectId}/insights?fields=impressions,clicks,reach,spend,cpp&time_range={"since":"2022-11-01","until":"2022-12-31"}&access_token=${accessToken}`;

  
  const fetchAnalyticsData = useCallback(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setAnalytics(data);
        setFetchData(false);
      })
      .catch(error => console.error(error));
  }, [apiUrl]);

  useEffect(() => {
    if (fetchData) {
      fetchAnalyticsData();
    }
  }, [fetchData, fetchAnalyticsData]);

  if (!analytics || !analytics.data) {
    return <Loader color="yellow" variant="bars" />;
  }

  return (
    <div className="analytics-page">
      <h2>Detailed Ad Analytics</h2>
      <p className="analytic-content">Below is a detailed analytics for the ad you selected with ID of {adContent}:</p>
      <div className="cards">
        <p className="impression-title">Reach</p>
        <Button color="dark">{analytics.data[0].reach} People</Button>
        <p className="impression-content">Reach is
         the number of people who saw any content
          from your Page or about your Page. This 
          metric is estimated.</p>
      </div>

      <div className="cards">
        <p className="impression-title">Impressions</p>
        <Button color="dark">{analytics.data[0].impressions}</Button>
        <p className="impression-content">Impressions are
         the number of times any content from your Page or
          about your Page entered a person's screen.</p>
      </div>

      <div className="cards">
        <p className="impression-title">Engagement(Clicks)</p>
        <Button color="dark">{analytics.data[0].clicks}</Button>
        <p className="impression-content">When a person clicks
         your Facebook ad, they are indicating that they are 
         interested in what your ad is promoting and, in most 
         cases, are brought directly to your website from that ad.</p>
      </div>

      <div className="cards">
        <p className="impression-title">CPP</p>
        <Button color="dark">{analytics.data[0].cpp}</Button>
        <p className="impression-content">The average cost 
        you spent to reach 1,000 people. This 
        metric is estimated.</p>
      </div>

      <div className="cards">
        <p className="impression-title">Total Spent</p>
        <Button color="dark">${analytics.data[0].spend}</Button>
        <p className="impression-content">Total Amount spent to run
        the ad. Note the currency is in US dollars. </p>
      </div>
    </div>
  );
};

export default AdsAnalytics;


// curl -i -X GET "https://graph.facebook.com/{graph-api-version}/oauth/access_token?grant_type=fb_exchange_token&          
//     client_id={}&
//     client_secret={app-secret}&
//     fb_exchange_token={your-access-token}" 