import React, { useState } from "react";
import SidebarEmployeeCSS from "./SideBarEmployee.module.css";
import Logo from "../../assets/teamfinder.png";
import { Link, useLocation } from "react-router-dom";
import image from "../../assets/Group2.png";

function SidebarEmployee() {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("");

  const handleSetActive = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className={SidebarEmployeeCSS.sidebar_cover}>
      <div className={SidebarEmployeeCSS.logo}>
        <img src={Logo} alt="Logo" width={"280px"} height="auto" />
      </div>
      <div className={SidebarEmployeeCSS.employer_text}>
        <p>Employee</p>
      </div>
      <div className={SidebarEmployeeCSS.profile}>
        <img
          src={image}
          alt="Group2"
          width={"200px"}
          height={"200px"}
          className={SidebarEmployeeCSS.profile_image}
        />
        <p className={SidebarEmployeeCSS.name}>Your Name</p>
      </div>
      <div className={SidebarEmployeeCSS.buttons}>
        <div className={SidebarEmployeeCSS.main_buttons}>
          <Link
            to="/overview"
            className={SidebarEmployeeCSS.link_page}
            onClick={() => handleSetActive("overview")}
          >
            <button
              className={
                activeButton === "overview"
                  ? SidebarEmployeeCSS.active_button
                  : ""
              }
            >
              Dashboard
            </button>
          </Link>
          <Link
            to="/projects"
            className={SidebarEmployeeCSS.link_page}
            onClick={() => handleSetActive("projects")}
          >
            <button
              className={
                activeButton === "projects"
                  ? SidebarEmployeeCSS.active_button
                  : ""
              }
            >
              Projects
            </button>
          </Link>
          <Link
            to="/profile"
            className={SidebarEmployeeCSS.link_page}
            onClick={() => handleSetActive("profile")}
          >
            <button
              className={
                activeButton === "profile"
                  ? SidebarEmployeeCSS.active_button
                  : ""
              }
            >
              Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SidebarEmployee;
