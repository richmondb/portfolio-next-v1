"use client";
import React from 'react'
import ReactGA from "react-ga4";


function GoogleAnalytics() {

    React.useEffect(() => {

      ReactGA.initialize("G-M14GLGM3BW");

      ReactGA.send({ hitType: "pageview", page: "/", title: "Landing View Count" });

      return () => {

      };

    }, []);

  return (
      <></>
  )
}

export default GoogleAnalytics
