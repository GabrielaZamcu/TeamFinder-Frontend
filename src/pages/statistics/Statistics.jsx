import React from "react";
import StatisticsCSS from "./Statistics.module.css";
import image2 from "../../assets/Frame86.png";
import image3 from "../../assets/Frame80.png";
function AboutUs() {
  return (
    <div className={StatisticsCSS.container}>
      <div className={StatisticsCSS.about_box}>
        <div className={StatisticsCSS.image2}>
          <img src={image2} alt="Frame86" />
        </div>
        <div className={StatisticsCSS.title_st}>
          <h2>Statistics</h2>
          <div className={StatisticsCSS.line}></div>
        </div>
        <div className={StatisticsCSS.statistics}>
          <img src={image3} alt="Frame80" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
