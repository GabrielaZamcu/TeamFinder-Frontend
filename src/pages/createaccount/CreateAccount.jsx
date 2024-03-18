import React, { useState } from "react";
import logo from "../../assets/teamfinder.png";
import CreateAccountCSS from "./CreateAccount.module.css";
import frame from "../../assets/Frame225.png";
import { Switch } from "antd";
import { Link } from "react-router-dom";

function CreateAccount() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [password, setPassword] = useState("");
  const [organization, setOrganization] = useState("");
  const [headquarterAddress, setHeadquarterAddress] = useState("");
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className={CreateAccountCSS.background_acc}>
        {!toggle ? (
          <div className={CreateAccountCSS.container_acc}>
            <div className={CreateAccountCSS.form_container_acc}>
              <div className={CreateAccountCSS.title_and_logo_acc}>
                <div className={CreateAccountCSS.logo_container_acc}>
                  <img src={logo} alt="Logo" />
                </div>
                <div className={CreateAccountCSS.switchContainer_acc}>
                  <Switch
                    style={{ backgroundColor: "#f9b8cb" }}
                    onClick={toggler}
                    checked={!toggle}
                  />
                </div>
              </div>

              <div className={CreateAccountCSS.signup_form_acc}>
                <div className={CreateAccountCSS.form_group_crtACC}>
                  <div className={CreateAccountCSS.signup_acc}>
                    <span></span>
                  </div>
                  <label htmlFor="Name">Name:</label>
                  <div className={CreateAccountCSS.input_acc}>
                    <input
                      type="text"
                      id="Name"
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      className={CreateAccountCSS.input}
                    />
                  </div>
                </div>
                <div className={CreateAccountCSS.form_group_crtACC}>
                  <label htmlFor="email">Email:</label>
                  <div className={CreateAccountCSS.input_acc}>
                    <input
                      type="text"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className={CreateAccountCSS.input}
                    />
                  </div>
                </div>
                <div className={CreateAccountCSS.form_group_crtACC}>
                  <label htmlFor="password">Password:</label>
                  <div className={CreateAccountCSS.input_acc}>
                    <input
                      type="text"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className={CreateAccountCSS.input}
                    />
                  </div>
                </div>
                <div className={CreateAccountCSS.form_group_crtACC}>
                  <label htmlFor="address">Address:</label>
                  <div className={CreateAccountCSS.input_acc}>
                    <input
                      type="text"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Address"
                      className={CreateAccountCSS.input}
                    />
                  </div>
                </div>
                <div className={CreateAccountCSS.form_group_crtACC}>
                  <label htmlFor="organization">Organization:</label>
                  <div className={CreateAccountCSS.input_acc}>
                    <input
                      type="text"
                      id="organization"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Organization"
                      className={CreateAccountCSS.input}
                    />
                  </div>
                </div>
                <div className={CreateAccountCSS.form_group_crtACC}>
                  <label htmlFor="headquarterAddress">
                    Headquarter Address:
                  </label>
                  <input
                    type="text"
                    id="headquarterAddress"
                    value={headquarterAddress}
                    onChange={(e) => setHeadquarterAddress(e.target.value)}
                    placeholder="headquarterAddress"
                    className={CreateAccountCSS.input}
                  />
                </div>
                <button91 className={CreateAccountCSS.signup_btn_acc}>
                  Sign Up
                </button91>
              </div>
            </div>
            <div className={CreateAccountCSS.frame_container_acc}>
              <img
                src={frame}
                alt="Frame225"
                className={CreateAccountCSS.frame_image_acc}
              />
              <div className={CreateAccountCSS.text_welcome_acc}>
                <p40>Welcome!</p40>
              </div>
            </div>
            <div className={CreateAccountCSS.login_container_acc}>
              <span0>Sign Up</span0>
            </div>
            <div className={CreateAccountCSS.signup_container_acc}>
              <span1>Log In</span1>
            </div>
          </div>
        ) : (
          <div className={CreateAccountCSS.container_login_acc}>
            <div className={CreateAccountCSS.form_container_acc}>
              <div className={CreateAccountCSS.title_and_logo_acc}>
                <div className={CreateAccountCSS.logo_container_acc}>
                  <img src={logo} alt="Logo" />
                </div>
                <div className={CreateAccountCSS.switchContainer_acc}>
                  <Switch
                    style={{ backgroundColor: "#f9b8cb" }}
                    onClick={toggler}
                    checked={!toggle}
                  />
                </div>
              </div>

              <div className={CreateAccountCSS.login_form_acc}>
                <div className={CreateAccountCSS.form_group_crtACC}>
                  <div className={CreateAccountCSS.signup_acc}>
                    <span></span>
                  </div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className={CreateAccountCSS.input}
                  />
                </div>

                <div className={CreateAccountCSS.form_group_crtACC}>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Password"
                    className={CreateAccountCSS.input}
                  />
                </div>

                <button90 className={CreateAccountCSS.signup_btn_acc}>
                  <Link
                    to="/dashboardemployer"
                    className={CreateAccountCSS.login_link_emp}
                  >
                    <p className={CreateAccountCSS.sign_up_text}>Log in</p>
                  </Link>
                </button90>
              </div>
            </div>
            <div className={CreateAccountCSS.frame_container_acc}>
              <img
                src={frame}
                alt="Frame225"
                className={CreateAccountCSS.frame_image_acc}
              />
              <div className={CreateAccountCSS.text_welcome_login_acc}>
                <p39>Welcome back!</p39>
              </div>
            </div>
            <div className={CreateAccountCSS.login_container_acc}>
              <span3>Sign Up</span3>
            </div>
            <div className={CreateAccountCSS.signup_container_acc}>
              <span2>Log In</span2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateAccount;
