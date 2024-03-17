import React, { useState } from "react";
import logo from "../../assets/teamfinder.png";
import CreateAccountCSS from "./CreateAccount.module.css";
import { Link } from "react-router-dom";
import loginIcon from "../../assets/Login.png";
import frame from "../../assets/Frame225.png";

function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organization, setOrganization] = useState("");
  const [headquarterAddress, setHeadquarterAddress] = useState("");

  return (
    <div className={CreateAccountCSS.container}>
      <div className={CreateAccountCSS.form_container}>
        <div className={CreateAccountCSS.title_and_logo}>
          <div className={CreateAccountCSS.logo_container}>
            <img src={logo} alt="Logo" />
          </div>
          <h1 className={CreateAccountCSS.title}>Sign up</h1>
        </div>

        <div className={CreateAccountCSS.form_group}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className={CreateAccountCSS.form_group}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className={CreateAccountCSS.form_group}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className={CreateAccountCSS.form_group}>
          <label htmlFor="organization">Organization Name:</label>
          <input
            type="text"
            id="organization"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="Organization Name"
          />
        </div>
        <div className={CreateAccountCSS.form_group}>
          <label htmlFor="headquarterAddress">Headquarter Address:</label>
          <input
            type="text"
            id="headquarterAddress"
            value={headquarterAddress}
            onChange={(e) => setHeadquarterAddress(e.target.value)}
            placeholder="Headquarter Address"
          />
        </div>
        <button100 className={CreateAccountCSS.signup_btn1}>
          <Link
            to="/dashboardemployer"
            className={CreateAccountCSS.login_link_emp}
          >
            <p className={CreateAccountCSS.sign_up_text}>Sign up</p>
          </Link>
        </button100>
        <div className={CreateAccountCSS.login_text_container}>
          <div className={CreateAccountCSS.login_text_cont}>
            <p className={CreateAccountCSS.login_text}>
              Already own an account?
            </p>
            <Link to="/overview" className={CreateAccountCSS.login_link}>
              <img src={loginIcon} alt="Login" />
            </Link>
          </div>
        </div>
      </div>
      <div className={CreateAccountCSS.frame_container}>
        <img
          src={frame}
          alt="Frame225"
          className={CreateAccountCSS.frame_image}
        />
      </div>
      <div className={CreateAccountCSS.text_welcome}>
        <p>Welcome!</p>
      </div>
    </div>
  );
}

export default CreateAccount;
