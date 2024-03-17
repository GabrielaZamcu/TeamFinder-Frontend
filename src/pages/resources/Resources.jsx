import React from "react";
import ResourcesCSS from "./Resources.module.css";
import project5 from "../../assets/Frame 54.png";
import image from "../../assets/Frame27.png";
import image_emp from "../../assets/Frame 47.png";
import { Link } from "react-router-dom";

function Resources() {
  return (
    <div className={ResourcesCSS.container_res}>
      <div className={ResourcesCSS.content_res}>
        <div className={ResourcesCSS.project_img_res}>
          <img src={project5} alt="Frame54" />
        </div>
        <div className={ResourcesCSS.name_project_res}>
          <Link to="/Project" className={ResourcesCSS.login_link}>
            <p>Project - 1</p>
          </Link>
          <p>Mobile app development for a store</p>
        </div>
        <div className={ResourcesCSS.buttons_emp_res}>
          <div className={ResourcesCSS.buttonContainer_res}>
            <img
              src={image_emp}
              alt="Frame47"
              className={ResourcesCSS.buttonImage_emp_res}
            />
            <div className={ResourcesCSS.buttonText_res}>
              <span className={ResourcesCSS.span0}>Jane Smith</span>
              <br />
              <span className={ResourcesCSS.span1}>
                Published files for the project
              </span>
              <br />
              <span className={ResourcesCSS.span1}>Description</span>
            </div>
          </div>
        </div>

        <div className={ResourcesCSS.backgroundImage_res}>
          <img src={image} alt="Frame27" />
        </div>
      </div>
    </div>
  );
}

export default Resources;
