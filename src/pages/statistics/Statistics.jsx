import React from "react";
import StatisticsCSS from "./Statistics.module.css";
import image2 from "../../assets/Frame86.png";
import image3 from "../../assets/Frame80.png";
function Statistics() {
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
      </div>
      <div className={StatisticsCSS.statistics}>
        <img src={image3} alt="Frame80" />
      </div>
      <div className={StatisticsCSS.text}>
        <text>
          <b>Organizations over the last year</b>
        </text>
        <br></br>
        <text>
          finding new employees that match their requests in an innovative way
        </text>
        <br></br>
        <text>
          <b>Employees over the last year</b>
        </text>
        <br></br>
        <text>
          Finding project that match their taste and personalities with other
          employees
        </text>
        <br></br>
        <text>our application was created to</text>
        <br></br>
        <text>
          {" "}
          keep you working on what you enjoy the most and also to help you get
          out of the comfort zone and succed in your new projects
        </text>
        <div className={StatisticsCSS.redline}>
          <text>
            <b>-</b>
          </text>
        </div>
        <div className={StatisticsCSS.blackline}>
          <text>
            <b>-</b>
          </text>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
