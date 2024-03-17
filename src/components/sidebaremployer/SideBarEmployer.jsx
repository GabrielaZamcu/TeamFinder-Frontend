import React, { useState } from "react";
import SideBarEmployerCSS from "./SideBarEmployer.module.css";
import Logo from "../../assets/teamfinder.png";
import { Link, useLocation } from "react-router-dom";
import image from "../../assets/Group2.png";

function SidebarEmployee() {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(""); // Starea pentru a ține evidența butonului activ

  // Funcție pentru a marca butonul ca activ
  const handleSetActive = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className={SideBarEmployerCSS.sidebar_cover_employer}>
      <div className={SideBarEmployerCSS.logo_employer}>
        <img src={Logo} alt="Logo" width={"280px"} height="auto" />
      </div>
      <div className={SideBarEmployerCSS.employer_text1}>
        <p>Employer</p>
      </div>
      <div className={SideBarEmployerCSS.profile_employer}>
        <img
          src={image}
          alt="Group2"
          width={"200px"}
          height={"200px"}
          className={SideBarEmployerCSS.profile_image_employer}
        />
        <p className={SideBarEmployerCSS.name_employer}>Your Name</p>
      </div>
      <div className={SideBarEmployerCSS.buttons_employer}>
        <div className={SideBarEmployerCSS.main_buttons_employer}>
          <Link
            to="/dashboardemployer"
            className={SideBarEmployerCSS.link_page_employer}
            onClick={() => handleSetActive("dashboardemployer")} // Transmite numele butonului către funcția handleSetActive
          >
            <button
              className={
                activeButton === "dashboardemployer"
                  ? SideBarEmployerCSS.active_button_employer
                  : ""
              }
            >
              Dashboard
            </button>
          </Link>
          <Link
            to="/organizations"
            className={SideBarEmployerCSS.link_page_employer}
            onClick={() => handleSetActive("organizations")} // Transmite numele butonului către funcția handleSetActive
          >
            <button
              className={
                activeButton === "organizations"
                  ? SideBarEmployerCSS.active_button_employer
                  : ""
              }
            >
              Organizations
            </button>
          </Link>
          <Link
            to="/employees_e"
            className={SideBarEmployerCSS.link_page_employer}
            onClick={() => handleSetActive("employees_e")} // Transmite numele butonului către funcția handleSetActive
          >
            <button
              className={
                activeButton === "employees_e"
                  ? SideBarEmployerCSS.active_button_employer
                  : ""
              }
            >
              Employees
            </button>
          </Link>
          <Link
            to="/departaments"
            className={SideBarEmployerCSS.link_page_employer}
            onClick={() => handleSetActive("departaments")} // Transmite numele butonului către funcția handleSetActive
          >
            <button
              className={
                activeButton === "departaments"
                  ? SideBarEmployerCSS.active_button_employer
                  : ""
              }
            >
              Departaments
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SidebarEmployee;
