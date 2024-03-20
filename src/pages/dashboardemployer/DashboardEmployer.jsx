import React from "react";
import DashboardEmployerCSS from "./DashboardEmployer.module.css";
import image11 from "../../assets/Frame 94.png";
import image12 from "../../assets/Frame 97.png";
import image13 from "../../assets/Frame 95.png";
import image14 from "../../assets/Frame 96.png";
import image15 from "../../assets/buton.png";
import progress from "../../assets/Progress.png";
import { Link } from "react-router-dom";

function DashboardEmployer() {
  return (
    <div className={DashboardEmployerCSS.dashboard}>
      <div className={DashboardEmployerCSS.projectImg}>
        <img src={image11} alt="Frame94" />
      </div>
      <div className={DashboardEmployerCSS.img}>
        <img src={image12} alt="Frame97" />
      </div>
      <div className={DashboardEmployerCSS.nameProject}>
        <p>Good morning, Name </p>
      </div>
      <div className={DashboardEmployerCSS.project1_empl}>
        <div className={DashboardEmployerCSS.name_empl}>
          <div className={DashboardEmployerCSS.text_emp1}>
            <Link
              to="/Project_emp"
              className={DashboardEmployerCSS.login_link_emp1}
            >
              <p>Project 1</p>
            </Link>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program_empl}>
          <div className={DashboardEmployerCSS.objective}>
            <p>Main Objective</p>
          </div>
          <div className={DashboardEmployerCSS.app_1}>
            <p>Mobile APP for cafe</p>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program_emp2}>
          <div className={DashboardEmployerCSS.row}>
            <div className={DashboardEmployerCSS.start}>
              <p>Start</p>
            </div>
            <div className={DashboardEmployerCSS.date_start}>
              <p>28 Feb 2024</p>
            </div>
          </div>
          <div className={DashboardEmployerCSS.row}>
            <div className={DashboardEmployerCSS.start_1}>
              <p>End</p>
            </div>
            <div className={DashboardEmployerCSS.date_start_1}>
              <p>30 Mar 2024</p>
            </div>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program_emp3}>
          <div className={DashboardEmployerCSS.title_emp3}>
            <p>Tasks</p>
          </div>
          <div className={DashboardEmployerCSS.row2}>
            <div className={DashboardEmployerCSS.role_1}>
              <p>UI / UX Design</p>
            </div>
            <div className={DashboardEmployerCSS.task_1}>
              <p>5/10</p>
            </div>
          </div>
          <div className={DashboardEmployerCSS.row2}>
            <div className={DashboardEmployerCSS.role_1}>
              <p>Front-End</p>
            </div>
            <div className={DashboardEmployerCSS.task_1}>
              <p>7/10</p>
            </div>
          </div>
          <div className={DashboardEmployerCSS.row2}>
            <div className={DashboardEmployerCSS.role_1}>
              <p>Back-End</p>
            </div>
            <div className={DashboardEmployerCSS.task_1}>
              <p>7/10</p>
            </div>
          </div>
          <div className={DashboardEmployerCSS.row2}>
            <div className={DashboardEmployerCSS.role_1}>
              <p>Testing</p>
            </div>
            <div className={DashboardEmployerCSS.task_1}>
              <p>3/10</p>
            </div>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program_emp4}>
          <div className={DashboardEmployerCSS.row3}>
            <div className={DashboardEmployerCSS.progress_1}>
              <p>Progress</p>
            </div>
            <div className={DashboardEmployerCSS.image_row3}>
              <img src={progress} alt="Progress" />
            </div>
          </div>
        </div>
      </div>
      <div className={DashboardEmployerCSS.project1_empl2}>
        <div className={DashboardEmployerCSS.name_empl2}>
          <div className={DashboardEmployerCSS.text_emp12}>
            <Link
              to="/Project_emp"
              className={DashboardEmployerCSS.login_link_emp12}
            >
              <p>Project 1</p>
            </Link>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program_empl2}>
          <div className={DashboardEmployerCSS.objective2}>
            <p>Main Objective</p>
          </div>
          <div className={DashboardEmployerCSS.app_12}>
            <p>Mobile APP for cafe</p>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program_emp22}>
          <div className={DashboardEmployerCSS.row2}>
            <div className={DashboardEmployerCSS.start2}>
              <p>Start</p>
            </div>
            <div className={DashboardEmployerCSS.date_start2}>
              <p>28 Feb 2024</p>
            </div>
          </div>
          <div className={DashboardEmployerCSS.row2}>
            <div className={DashboardEmployerCSS.start_12}>
              <p>End</p>
            </div>
            <div className={DashboardEmployerCSS.date_start_12}>
              <p>30 Mar 2024</p>
            </div>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program_emp32}>
          <div className={DashboardEmployerCSS.title_emp32}>
            <p>Tasks</p>
          </div>
          <div className={DashboardEmployerCSS.row22}>
            <div className={DashboardEmployerCSS.role_12}>
              <p>UI / UX Design</p>
            </div>
            <div className={DashboardEmployerCSS.task_12}>
              <p>5/10</p>
            </div>
          </div>
          <div className={DashboardEmployerCSS.row22}>
            <div className={DashboardEmployerCSS.role_12}>
              <p>Front-End</p>
            </div>
            <div className={DashboardEmployerCSS.task_12}>
              <p>7/10</p>
            </div>
          </div>
          <div className={DashboardEmployerCSS.row22}>
            <div className={DashboardEmployerCSS.role_12}>
              <p>Back-End</p>
            </div>
            <div className={DashboardEmployerCSS.task_12}>
              <p>7/10</p>
            </div>
          </div>
          <div className={DashboardEmployerCSS.row22}>
            <div className={DashboardEmployerCSS.role_12}>
              <p>Testing</p>
            </div>
            <div className={DashboardEmployerCSS.task_12}>
              <p>3/10</p>
            </div>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program_emp42}>
          <div className={DashboardEmployerCSS.row3}>
            <div className={DashboardEmployerCSS.progress_12}>
              <p>Progress</p>
            </div>
            <div className={DashboardEmployerCSS.image_row32}>
              <img src={progress} alt="Progress" />
            </div>
          </div>
        </div>
      </div>

      <div className={DashboardEmployerCSS.project1_empl3}>
        <div className={DashboardEmployerCSS.name_empl3}>
          <div className={DashboardEmployerCSS.text_emp13}>
            <Link
              to="/Project_emp"
              className={DashboardEmployerCSS.login_link_emp13}
            >
              <p>Project 1</p>
            </Link>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program_empl3}>
          <div className={DashboardEmployerCSS.objective3}>
            <p>Main Objective</p>
          </div>
          <div className={DashboardEmployerCSS.app_13}>
            <p>Mobile APP for cafe</p>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program_emp23}>
          <div className={DashboardEmployerCSS.row3}>
            <div className={DashboardEmployerCSS.start3}>
              <p>Start</p>
            </div>
            <div className={DashboardEmployerCSS.date_start3}>
              <p>28 Feb 2024</p>
            </div>
          </div>
          <div className={DashboardEmployerCSS.row3}>
            <div className={DashboardEmployerCSS.start_13}>
              <p>End</p>
            </div>
            <div className={DashboardEmployerCSS.date_start_13}>
              <p>30 Mar 2024</p>
            </div>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program_emp33}>
          <div className={DashboardEmployerCSS.title_emp33}>
            <p>Tasks</p>
          </div>
          <div className={DashboardEmployerCSS.row23}>
            <div className={DashboardEmployerCSS.role_13}>
              <p>UI / UX Design</p>
            </div>
            <div className={DashboardEmployerCSS.task_13}>
              <p>5/10</p>
            </div>
          </div>
          <div className={DashboardEmployerCSS.row23}>
            <div className={DashboardEmployerCSS.role_13}>
              <p>Front-End</p>
            </div>
            <div className={DashboardEmployerCSS.task_13}>
              <p>7/10</p>
            </div>
          </div>
          <div className={DashboardEmployerCSS.row23}>
            <div className={DashboardEmployerCSS.role_13}>
              <p>Back-End</p>
            </div>
            <div className={DashboardEmployerCSS.task_13}>
              <p>7/10</p>
            </div>
          </div>
          <div className={DashboardEmployerCSS.row23}>
            <div className={DashboardEmployerCSS.role_13}>
              <p>Testing</p>
            </div>
            <div className={DashboardEmployerCSS.task_13}>
              <p>3/10</p>
            </div>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program_emp43}>
          <div className={DashboardEmployerCSS.row3}>
            <div className={DashboardEmployerCSS.progress_13}>
              <p>Progress</p>
            </div>
            <div className={DashboardEmployerCSS.image_row33}>
              <img src={progress} alt="Progress" />
            </div>
          </div>
        </div>
      </div>
      <div className={DashboardEmployerCSS.title2}>
        <p>Today’s Agenda </p>
      </div>

      <div className={DashboardEmployerCSS.program1_1}>
        <img src={image13} alt="Frame95" />
        <div className={DashboardEmployerCSS.date_1}>
          <img src={image14} alt="Frame96" />
        </div>
        <div className={DashboardEmployerCSS.button_1}>
          <button className={DashboardEmployerCSS.buttonImg_1}>
            <img src={image15} alt="button" />
          </button>
        </div>
      </div>
      <div className={DashboardEmployerCSS.project1_1}>
        <p>Meeting </p>
      </div>
      <div className={DashboardEmployerCSS.project2_1}>
        <p>Project 3 </p>
      </div>
      <div className={DashboardEmployerCSS.project3_1}>
        <p>14:00 - 16:00 </p>
      </div>
    </div>
  );
}

export default DashboardEmployer;
