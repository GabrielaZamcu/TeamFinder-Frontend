import React from "react";
import OrganizationsCSS from "./Organizations.module.css";
import project5 from "../../assets/Frame94.png";
import image from "../../assets/Frame27.png";
import image4 from "../../assets/Frame 811.png";
import image_emp from "../../assets/Frame 47.png";
import image_empl from "../../assets/Group19.png";
import { Link } from "react-router-dom";

function Organizations() {
  return (
    <div className={OrganizationsCSS.container_org}>
      <div className={OrganizationsCSS.content_org}>
        <div className={OrganizationsCSS.project_img_org}>
          <img src={project5} alt="Frame94" />
        </div>
        <div className={OrganizationsCSS.name_project_org}>
          <Link to="/Project" className={OrganizationsCSS.login_link_org}>
            <p>Project - 1</p>
          </Link>

          <p>Mobile app development for a store</p>
        </div>
        <div className={OrganizationsCSS.buttons_emp_org}>
          <div className={OrganizationsCSS.buttonContainer_org}>
            <img
              src={image4}
              alt="Frame811"
              className={OrganizationsCSS.buttonImage_org}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={OrganizationsCSS.buttonImage_emp_org}
            />
            <div className={OrganizationsCSS.buttonText_org}>
              Jane Smith<span> Manager</span>
            </div>
          </div>
          <div className={OrganizationsCSS.buttonContainer_org}>
            <img
              src={image4}
              alt="Frame811"
              className={OrganizationsCSS.buttonImage_org}
            />
            <img
              src={image_empl}
              alt="Group19"
              className={OrganizationsCSS.buttonImage_emp_org}
            />
            <div className={OrganizationsCSS.buttonText_org}>
              Michael Johnson<span> Manager</span>
            </div>
          </div>
          <div className={OrganizationsCSS.buttonContainer_org}>
            <img
              src={image4}
              alt="Frame811"
              className={OrganizationsCSS.buttonImage_org}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={OrganizationsCSS.buttonImage_emp_org}
            />
            <div className={OrganizationsCSS.buttonText_org}>
              Emily Davis<span> Manager</span>
            </div>
          </div>
          <div className={OrganizationsCSS.buttonContainer_org}>
            <img
              src={image4}
              alt="Frame811"
              className={OrganizationsCSS.buttonImage_org}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={OrganizationsCSS.buttonImage_emp_org}
            />
            <div className={OrganizationsCSS.buttonText_org}>
              David Brown<span> Manager</span>
            </div>
          </div>
          <div className={OrganizationsCSS.buttonContainer_org}>
            <img
              src={image4}
              alt="Frame811"
              className={OrganizationsCSS.buttonImage_org}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={OrganizationsCSS.buttonImage_emp_org}
            />
            <div className={OrganizationsCSS.buttonText_org}>
              John Doe<span> Manager</span>
            </div>
          </div>
          <div className={OrganizationsCSS.buttonContainer_org}>
            <img
              src={image4}
              alt="Frame811"
              className={OrganizationsCSS.buttonImage_org}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={OrganizationsCSS.buttonImage_emp_org}
            />
            <div className={OrganizationsCSS.buttonText_org}>
              Alice Johnson <span> Manager</span>
            </div>
          </div>
        </div>

        <div className={OrganizationsCSS.backgroundImage_org}>
          <img src={image} alt="Frame27" />
        </div>
      </div>
    </div>
  );
}

export default Organizations;
