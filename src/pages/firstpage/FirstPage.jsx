import React from "react";
import logo from "../../assets/teamfinder.png";
import { Link } from "react-router-dom";
import FirstPageCSS from "./FirstPage.module.css";
import frame1 from "../../assets/Frame55.png";
import frame2 from "../../assets/Frame66.png";

function FirstPage() {
  return (
    <div className={FirstPageCSS.container}>
      <div className={FirstPageCSS.header}>
        <div className={FirstPageCSS.logo_container}>
          <img src={logo} alt="Logo" className={FirstPageCSS.logo} />
          <p className={FirstPageCSS.tagline}>
            Best APP to find the perfect team for the perfect project!
          </p>
        </div>
      </div>
      <div className={FirstPageCSS.content}>
        <div className={FirstPageCSS.centerContent}>
          <div className={FirstPageCSS.leftImage}>
            <img src={frame1} alt="Frame55" className={FirstPageCSS.frame} />
            <Link to="/admin" className={FirstPageCSS.menuLink}>
              Admin
            </Link>
          </div>
          <div className={FirstPageCSS.rightImage}>
            <img src={frame2} alt="Frame66" className={FirstPageCSS.frame} />
            <Link to="/employer" className={FirstPageCSS.menuLink}>
              Employee
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
