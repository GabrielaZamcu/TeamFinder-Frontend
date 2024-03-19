import React, { useState } from "react";
import DashboardEmployerCSS from "./DashboardEmployer.module.css";
import image11 from "../../assets/Frame 94.png";
import image12 from "../../assets/Frame 97.png";
import image13 from "../../assets/Frame 95.png";
import image14 from "../../assets/Frame 96.png";
import image15 from "../../assets/buton.png";
import progress from "../../assets/Progress.png";
import { Link } from "react-router-dom";
import Modal from "../../components/modal/Modal";

function DashboardEmployer() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Starea pentru controlul afișării modalei

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
          <p1>Main Objective</p1>
          <p2>Mobile APP for cafe</p2>
        </div>
        <div className={DashboardEmployerCSS.program_emp2}>
          <div className={DashboardEmployerCSS.row}>
            <p3>Start</p3>
            <p4>28 Feb 2024</p4>
          </div>
          <div className={DashboardEmployerCSS.row}>
            <p5>End</p5>
            <p6>30 Mar 2024</p6>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program_emp3}>
          <div className={DashboardEmployerCSS.title_emp3}>
            <p7>Tasks</p7>
          </div>
          <div className={DashboardEmployerCSS.row2}>
            <p8>UI / UX Design</p8>
            <p9>5/10</p9>
          </div>
          <div className={DashboardEmployerCSS.row2}>
            <p10>Front-End</p10>
            <p11>7/10</p11>
          </div>
          <div className={DashboardEmployerCSS.row2}>
            <p12>Back-End</p12>
            <p13>7/10</p13>
          </div>
          <div className={DashboardEmployerCSS.row2}>
            <p14>Testing</p14>
            <p15>3/10</p15>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program_emp4}>
          <div className={DashboardEmployerCSS.row3}>
            <p16>Progress</p16>
            <div />
          </div>
          <div className={DashboardEmployer.image_row3}>
            <img src={progress} alt="Progress" />
          </div>
        </div>
      </div>
      <div className={DashboardEmployerCSS.project2_empl}>
        <div className={DashboardEmployerCSS.name1_empl}>
          <div className={DashboardEmployerCSS.text1_emp1}>
            <p17>Project 2</p17>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program1_empl}>
          <p18>Main Objective</p18>
          <p19>Mobile APP for cafe</p19>
        </div>
        <div className={DashboardEmployerCSS.program1_emp2}>
          <div className={DashboardEmployerCSS.row}>
            <p20>Start</p20>
            <p21>20 Feb 2024</p21>
          </div>
          <div className={DashboardEmployerCSS.row_1}>
            <p22>End</p22>
            <p23>20 Mar 2024</p23>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program1_emp3}>
          <div className={DashboardEmployerCSS.title1_emp3}>
            <p24>Tasks</p24>
          </div>
          <div className={DashboardEmployerCSS.row2_1}>
            <p25>UI / UX Design</p25>
            <p26>8/10</p26>
          </div>
          <div className={DashboardEmployerCSS.row2_1}>
            <p27>Front-End</p27>
            <p28>8/10</p28>
          </div>
          <div className={DashboardEmployerCSS.row2_1}>
            <p29>Back-End</p29>
            <p30>9/10</p30>
          </div>
          <div className={DashboardEmployerCSS.row2_1}>
            <p31>Testing</p31>
            <p32>5/10</p32>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program1_emp4}>
          <div className={DashboardEmployerCSS.row3}>
            <p33>Progress</p33>
            <div />
          </div>
          <div className={DashboardEmployer.image1_row3}>
            <img src={progress} alt="Progress" />
          </div>
        </div>
      </div>
      <div className={DashboardEmployerCSS.project3_empl}>
        <div className={DashboardEmployerCSS.name2_empl}>
          <div className={DashboardEmployerCSS.text2_emp1}>
            <p34>Project 3</p34>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program3_empl}>
          <p35>Main Objective</p35>
          <p36>Mobile APP for cafe</p36>
        </div>
        <div className={DashboardEmployerCSS.program3_emp2}>
          <div className={DashboardEmployerCSS.row_3}>
            <p37>Start</p37>
            <p38>20 Feb 2024</p38>
          </div>
          <div className={DashboardEmployerCSS.row_3}>
            <p39>End</p39>
            <p40>20 Mar 2024</p40>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program3_emp3}>
          <div className={DashboardEmployerCSS.title3_emp3}>
            <p41>Tasks</p41>
          </div>
          <div className={DashboardEmployerCSS.row2_3}>
            <p42>UI / UX Design</p42>
            <p43>6/10</p43>
          </div>
          <div className={DashboardEmployerCSS.row2_3}>
            <p44>Front-End</p44>
            <p45>5/10</p45>
          </div>
          <div className={DashboardEmployerCSS.row2_3}>
            <p46>Back-End</p46>
            <p47>7/10</p47>
          </div>
          <div className={DashboardEmployerCSS.row2}>
            <p48>Testing</p48>
            <p49>7/10</p49>
          </div>
        </div>
        <div className={DashboardEmployerCSS.program3_emp4}>
          <div className={DashboardEmployerCSS.row3}>
            <p50>Progress</p50>
            <div />
          </div>
          <div className={DashboardEmployer.image_row3}>
            <img src={progress} alt="Progress" />
          </div>
        </div>
      </div>
      <div className={DashboardEmployerCSS.title2}>
        <p>Today’s Agenda </p>
      </div>
      <div className={DashboardEmployerCSS.program1}>
        <img src={image13} alt="Frame95" />
        <div className={DashboardEmployerCSS.date}>
          <img src={image14} alt="Frame96" />
        </div>
        <div className={DashboardEmployerCSS.button}>
          <button className={DashboardEmployerCSS.buttonImg}>
            <img src={image15} alt="button" />
          </button>
        </div>
      </div>{" "}
      <div className={DashboardEmployerCSS.project1}>
        <p>Meeting </p>
      </div>
      <div className={DashboardEmployerCSS.project2}>
        <p>Project 1 </p>
      </div>
      <div className={DashboardEmployerCSS.project3}>
        <p>9:00 - 12:00 </p>
      </div>
      <div className={DashboardEmployerCSS.program1_1}>
        <img src={image13} alt="Frame95" />
        <div className={DashboardEmployerCSS.date_1}>
          <img src={image14} alt="Frame96" />
        </div>
        <div className={DashboardEmployerCSS.button_1}>
          <button
            className={DashboardEmployerCSS.buttonImg_1}
            onClick={openModal}
          >
            <img src={image15} alt="button" />
          </button>
        </div>
        {isModalOpen && <Modal closeModal={closeModal} />}
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
