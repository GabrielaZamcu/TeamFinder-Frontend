import React from "react";
import StatisticsCSS from "./Statistics.module.css";
function AboutUs() {
  return (
    <div className={StatisticsCSS.container}>
      <div className={StatisticsCSS.about_box}>
        <h2>Statistics</h2>
        <div className={StatisticsCSS.line}></div>
      </div>
    </div>
  );
}

export default AboutUs;
