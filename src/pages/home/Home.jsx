import React from "react";
import logo from "../../assets/teamfinder.png";
import { Link } from "react-router-dom";
import HomeCSS from "./Home.module.css";
import frame from "../../assets/Frame.png";

function Home() {
  return (
    <div className={HomeCSS.container}>
      <div className={HomeCSS.header}>
        <div className={HomeCSS.logo_container}>
          <img src={logo} alt="Logo" className="logo" width={200} />
        </div>
        <div className={HomeCSS.menu}>
          <Link to="/home" className={HomeCSS.menuLink}>
            Home
          </Link>
          <Link to="/about" className={HomeCSS.menuLink}>
            About us
          </Link>
          <Link to="/statistics" className={HomeCSS.menuLink}>
            Statistics
          </Link>
        </div>
        <div className={HomeCSS.login_btn}>
          <Link to="/login">Get Started</Link>
        </div>
      </div>
      <div className={HomeCSS.content}>
        <div className={HomeCSS.centerContent}>
          <div className={HomeCSS.leftText}>
            <p>EVERYTHING IS </p>
            <p>BETTER, WHEN WE</p>
            <p>ARE TOGHETER!</p>
          </div>
          <div className={HomeCSS.rightImage}>
            <img src={frame} alt="Frame" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
