import React from "react";
import DepartamentsCSS from "./Departaments.module.css";
import project5 from "../../assets/Frame94.png";
import image from "../../assets/Frame27.png";
import { Link } from "react-router-dom";
import imagebk from "../../assets/Frame120.png";

function Departaments() {
  return (
    <div className={DepartamentsCSS.container}>
      <div className={DepartamentsCSS.content}>
        <div className={DepartamentsCSS.project_img}>
          <img src={project5} alt="Frame94" />
        </div>

        <div className={DepartamentsCSS.project1_empl}>
          <div className={DepartamentsCSS.program_empl}>
            <div className={DepartamentsCSS.imag_back}>
              <img src={imagebk} alt="Frame120" />
            </div>
            <div className={DepartamentsCSS.objective}>
              <Link to="/employees_emp" className={DepartamentsCSS.login_link}>
                <p>UI / UX Design</p>
              </Link>
            </div>
          </div>
          <div className={DepartamentsCSS.program_emp2}>
            <div className={DepartamentsCSS.row}>
              <div className={DepartamentsCSS.members}>
                <p>Members</p>
              </div>
              <div className={DepartamentsCSS.date_start}>
                <p>3150</p>
              </div>
              <div className={DepartamentsCSS.members_on}>
                <p>Online</p>
              </div>
              <div className={DepartamentsCSS.date_on}>
                <p>2000</p>
              </div>
            </div>
          </div>
        </div>
        <div className={DepartamentsCSS.project1_empl_1}>
          <div className={DepartamentsCSS.program_empl_1}>
            <div className={DepartamentsCSS.imag_back_1}>
              <img src={imagebk} alt="Frame120" />
            </div>
            <div className={DepartamentsCSS.objective_1}>
              <Link to="/employees_emp" className={DepartamentsCSS.login_link}>
                <p>Front-End</p>
              </Link>
            </div>
          </div>
          <div className={DepartamentsCSS.program_emp2_1}>
            <div className={DepartamentsCSS.row_1}>
              <div className={DepartamentsCSS.members_1}>
                <p>Members</p>
              </div>
              <div className={DepartamentsCSS.date_start_1}>
                <p>3150</p>
              </div>
              <div className={DepartamentsCSS.members_on_1}>
                <p>Online</p>
              </div>
              <div className={DepartamentsCSS.date_on_1}>
                <p>2000</p>
              </div>
            </div>
          </div>
        </div>
        <div className={DepartamentsCSS.project1_empl_2}>
          <div className={DepartamentsCSS.program_empl_2}>
            <div className={DepartamentsCSS.imag_back_2}>
              <img src={imagebk} alt="Frame120" />
            </div>
            <div className={DepartamentsCSS.objective_2}>
              <Link to="/employees_emp" className={DepartamentsCSS.login_link}>
                <p>Back-end</p>
              </Link>
            </div>
          </div>
          <div className={DepartamentsCSS.program_emp2_2}>
            <div className={DepartamentsCSS.row_2}>
              <div className={DepartamentsCSS.members_2}>
                <p>Members</p>
              </div>
              <div className={DepartamentsCSS.date_start_2}>
                <p>3150</p>
              </div>
              <div className={DepartamentsCSS.members_on_2}>
                <p>Online</p>
              </div>
              <div className={DepartamentsCSS.date_on_2}>
                <p>2000</p>
              </div>
            </div>
          </div>
          <div className={DepartamentsCSS.project1_empl_3}>
            <div className={DepartamentsCSS.program_empl_3}>
              <div className={DepartamentsCSS.imag_back_3}>
                <img src={imagebk} alt="Frame120" />
              </div>
              <div className={DepartamentsCSS.objective_3}>
                <Link
                  to="/employees_emp"
                  className={DepartamentsCSS.login_link}
                >
                  <p>Testing</p>
                </Link>
              </div>
            </div>
            <div className={DepartamentsCSS.program_emp2_3}>
              <div className={DepartamentsCSS.row}>
                <div className={DepartamentsCSS.members_3}>
                  <p>Members</p>
                </div>
                <div className={DepartamentsCSS.date_start_3}>
                  <p>3150</p>
                </div>
                <div className={DepartamentsCSS.members_on_3}>
                  <p>Online</p>
                </div>
                <div className={DepartamentsCSS.date_on}>
                  <p>2000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={DepartamentsCSS.backgroundImage}>
          <img src={image} alt="Frame27" />
        </div>
      </div>
    </div>
  );
}

export default Departaments;
