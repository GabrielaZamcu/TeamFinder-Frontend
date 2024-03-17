import React from "react";
import EmployeesCSS from "./Employees.module.css";
import project5 from "../../assets/Frame 54.png";
import image from "../../assets/Frame27.png";
import image4 from "../../assets/Frame 811.png";
import image_emp from "../../assets/Frame 47.png";
import { Link } from "react-router-dom";

function Employees() {
  return (
    <div className={EmployeesCSS.container}>
      <div className={EmployeesCSS.content}>
        <div className={EmployeesCSS.project_img}>
          <img src={project5} alt="Frame 54" />
        </div>
        <div className={EmployeesCSS.name_project}>
          <Link to="/Project" className={EmployeesCSS.login_link}>
            <p>Project - 1</p>
          </Link>

          <p>Mobile app development for a store</p>
        </div>
        <div className={EmployeesCSS.buttons_emp}>
          <div className={EmployeesCSS.buttonContainer}>
            <img
              src={image4}
              alt="Frame811"
              className={EmployeesCSS.buttonImage}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={EmployeesCSS.buttonImage_emp}
            />
            <div className={EmployeesCSS.buttonText}>
              Jane Smith<span> Manager</span>
            </div>
          </div>
          <div className={EmployeesCSS.buttonContainer}>
            <img
              src={image4}
              alt="Frame811"
              className={EmployeesCSS.buttonImage}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={EmployeesCSS.buttonImage_emp}
            />
            <div className={EmployeesCSS.buttonText}>
              Michael Johnson<span> Manager</span>
            </div>
          </div>
          <div className={EmployeesCSS.buttonContainer}>
            <img
              src={image4}
              alt="Frame811"
              className={EmployeesCSS.buttonImage}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={EmployeesCSS.buttonImage_emp}
            />
            <div className={EmployeesCSS.buttonText}>
              Emily Davis<span> Manager</span>
            </div>
          </div>
          <div className={EmployeesCSS.buttonContainer}>
            <img
              src={image4}
              alt="Frame811"
              className={EmployeesCSS.buttonImage}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={EmployeesCSS.buttonImage_emp}
            />
            <div className={EmployeesCSS.buttonText}>
              David Brown<span> Manager</span>
            </div>
          </div>
          <div className={EmployeesCSS.buttonContainer}>
            <img
              src={image4}
              alt="Frame811"
              className={EmployeesCSS.buttonImage}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={EmployeesCSS.buttonImage_emp}
            />
            <div className={EmployeesCSS.buttonText}>
              John Doe<span> Manager</span>
            </div>
          </div>
          <div className={EmployeesCSS.buttonContainer}>
            <img
              src={image4}
              alt="Frame811"
              className={EmployeesCSS.buttonImage}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={EmployeesCSS.buttonImage_emp}
            />
            <div className={EmployeesCSS.buttonText}>
              Alice Johnson <span> Manager</span>
            </div>
          </div>
        </div>

        <div className={EmployeesCSS.backgroundImage}>
          <img src={image} alt="Frame27" />
        </div>
      </div>
    </div>
  );
}

export default Employees;
