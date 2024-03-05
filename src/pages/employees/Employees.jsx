import React from "react";
import EmployeesCSS from "./Employees.module.css";
import project from "../../assets/Frame34.png";
import image from "../../assets/Frame27.png";

function Employees() {
  return (
    <div className={EmployeesCSS.container}>
      <div className={EmployeesCSS.content}>
        <div className={EmployeesCSS.project}>
          <img src={project} alt="Frame34" />
        </div>
        <div className={EmployeesCSS.name_project}>
          <p>Project - 1</p>
          <p>Mobile app development for a store</p>
        </div>
        <div className={EmployeesCSS.buttons}>
          <button className={EmployeesCSS.button}>
            John Doe <span>Developer</span>
          </button>
          <button className={EmployeesCSS.button}>
            Jane Smith <span>Designer</span>
          </button>
          <button className={EmployeesCSS.button}>
            Michael Johnson <span>Project Manager</span>
          </button>
          <button className={EmployeesCSS.button}>
            Emily Davis <span>QA Engineer</span>
          </button>
          <button className={EmployeesCSS.button}>
            David Brown <span>Marketing Specialist</span>
          </button>
        </div>

        <div className={EmployeesCSS.image}>
          <img src={image} alt="Frame27" />
        </div>
      </div>
    </div>
  );
}

export default Employees;
