import React, { useState } from "react";
import logo from "../../assets/teamfinder.png";
import SignUpEmployerCSS from "./SignUpEmployer.module.css";
import { Link } from "react-router-dom";
import loginIcon from "../../assets/Login.png";
import frame from "../../assets/Frame225.png";

function SignUpEmployer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className={SignUpEmployerCSS.container_signup_employer}>
      <div className={SignUpEmployerCSS.form_container_signup_employer}>
        <div className={SignUpEmployerCSS.title_and_logo_signup_employer}>
          <div className={SignUpEmployerCSS.logo_container_signup_employer}>
            <img src={logo} alt="Logo" />
          </div>
          <h2 className={SignUpEmployerCSS.title_signup_employer}>Sign up</h2>
        </div>

        <div className={SignUpEmployerCSS.form_group_signup_employer}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className={SignUpEmployerCSS.form_group_signup_employer}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div className={SignUpEmployerCSS.form_group_signup_employer}>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
        </div>

        <button className={SignUpEmployerCSS.signup_btn_signup_employer}>
          Sign in
        </button>
        <div className={SignUpEmployerCSS.login_text_container_signup_employer}>
          <div className={SignUpEmployerCSS.login_text_cont_signup_employer}>
            <p className={SignUpEmployerCSS.login_text_signup_employer}>
              Already own an account?
            </p>
            <Link
              to="/employer"
              className={SignUpEmployerCSS.login_link_signup_employer}
            >
              <img src={loginIcon} alt="Login" />
            </Link>
          </div>
        </div>
      </div>
      <div className={SignUpEmployerCSS.frame_container_signup_employer}>
        <img
          src={frame}
          alt="Frame225"
          className={SignUpEmployerCSS.frame_image_signup_employer}
        />
      </div>
      <div className={SignUpEmployerCSS.text_welcome_signup_employer}>
        <p>Welcome!</p>
      </div>
    </div>
  );
}

export default SignUpEmployer;
