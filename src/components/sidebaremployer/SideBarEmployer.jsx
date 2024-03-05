import React, { useEffect, useState } from "react";
import SidebarEmployerCSS from "./SideBarEmployer.module.css";
import Logo from "../../assets/teamfinder.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import image from "../../assets/Group2.png";

function SidebarEmployer() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    const path = location.pathname;
    setActiveButton(path);
  }, [location.pathname]);

  const handleOverviewClick = () => {
    navigate("/overview");
    setActiveButton("/overview");
  };

  return (
    <div className={SidebarEmployerCSS.sidebar_cover}>
      <div className={SidebarEmployerCSS.logo}>
        <img src={Logo} alt="Logo" width={"280px"} height="auto" />
      </div>
      <div className={SidebarEmployerCSS.employer_text}>
        <p>Employer</p>
      </div>
      <div className={SidebarEmployerCSS.profile}>
        <img
          src={image}
          alt="Group2"
          width={"200px"}
          height={"200px"}
          className={SidebarEmployerCSS.profile_image}
        />
        <p className={SidebarEmployerCSS.name}>Your Name</p>
      </div>
      <div className={SidebarEmployerCSS.buttons}>
        <div className={SidebarEmployerCSS.main_buttons}>
          <Link to="/overview" className={SidebarEmployerCSS.link_page}>
            <button
              onClick={handleOverviewClick}
              className={
                activeButton === "/overview"
                  ? SidebarEmployerCSS.active_button
                  : ""
              }
            >
              Dashboard
            </button>
          </Link>
          <Link to="/organization" className={SidebarEmployerCSS.link_page}>
            <button>Organization</button>
          </Link>
          <Link to="/employees" className={SidebarEmployerCSS.link_page}>
            <button>Employees</button>
          </Link>
          <Link to="/departments" className={SidebarEmployerCSS.link_page}>
            <button>Departments</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SidebarEmployer;
