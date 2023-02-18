import React, { useState, useEffect } from "react";
import AdsAnalytics from "./AdsAnalytics.component";
import "./dashboard.styles.css";

import { auth, firestore } from "../../../firebase/firebase.utils";
import { Loader } from "@mantine/core";
import AdsPreview from "./AdsPreview.component";


const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      // Get the current user's ID
      const userId = auth.currentUser ? auth.currentUser.uid : null;
  
      if (userId) {
        // Create a Firestore reference to the user's document
        const userRef = firestore.collection("users").doc(userId);
  
        // Fetch the user's data from Firestore
        userRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              const userData = doc.data();
              setUser(userData);
            } else {
              console.log("User data not found");
            }
          })
          .catch((error) => {
            console.log("Error fetching user data:", error);
          });
      }
    }, []);

    user ? console.log(user.ads) : console.log("No user")
  
    return (
      <div>
        {user ? (
          <div>
            <h1>Welcome, {user.displayName}!</h1>
            <p>Below are your currently active ads</p>
            {user.ads.map((ad, index) => <AdsPreview key={index} ad={ad}/>)}
          </div>
        ) : (
            <Loader className="loader-bar" color="yellow" variant="bars" />
        )}
      </div>
    );
};

export default Dashboard;
