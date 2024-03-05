import React from "react";
import OverviewCSS from "./Overview.module.css";
import project from "../../assets/Frame34.png";
import image from "../../assets/Frame27.png";
function Overview() {
  return (
    <div className={OverviewCSS.container}>
      <div className={OverviewCSS.content}>
        <div className={OverviewCSS.project}>
          <img src={project} alt="Frame34" />
        </div>
        <div className={OverviewCSS.name_project}>
          <p>Project - 1</p>
          <p>Mobile app development for a store</p>
        </div>
        <div className={OverviewCSS.buttons}>
          <button className={OverviewCSS.button}>UX / UI Designer</button>
          <button className={OverviewCSS.button}>Resources</button>
          <button className={OverviewCSS.button}>Members</button>
        </div>
        <div className={OverviewCSS.button_sec}>Join new project</div>
        <div className={OverviewCSS.image}>
          <img src={image} alt="Frame27" />
        </div>
      </div>
    </div>
  );
}

export default Overview;
