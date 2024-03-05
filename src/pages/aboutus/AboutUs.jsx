import React from "react";
import AboutUsCSS from "./AboutUs.module.css";
function AboutUs() {
  return (
    <div className={AboutUsCSS.container}>
      <div className={AboutUsCSS.about_box}>
        <h2>About us</h2>
        <div className={AboutUsCSS.line}></div>
      </div>
    </div>
  );
}

export default AboutUs;
