import React, { useState } from "react";
import logo from "../../assets/teamfinder.png";
import SignUpEmployerCSS from "./SignUpEmployer.module.css";
import { Link } from "react-router-dom";
import frame from "../../assets/Frame225.png";
import { Switch } from "antd";

function SignUpEmployer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [refferal, setRefferal] = useState("");
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className={SignUpEmployerCSS.background}>
        {!toggle ? (
          <div className={SignUpEmployerCSS.container_signup_employer}>
            <div className={SignUpEmployerCSS.form_container_signup_employer}>
              <div className={SignUpEmployerCSS.title_and_logo_signup_employer}>
                <div
                  className={SignUpEmployerCSS.logo_container_signup_employer}
                >
                  <img src={logo} alt="Logo" />
                </div>
                <div className={SignUpEmployerCSS.switchContainer}>
                  <Switch
                    style={{ backgroundColor: "#f9b8cb" }}
                    onClick={toggler}
                    checked={!toggle}
                  />
                </div>
              </div>

              <div className={SignUpEmployerCSS.signup_form}>
                <div className={SignUpEmployerCSS.form_group_signup_employer}>
                  <div className={SignUpEmployerCSS.signup}>
                    <span></span>
                  </div>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className={SignUpEmployerCSS.input}
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
                    className={SignUpEmployerCSS.input}
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
                    className={SignUpEmployerCSS.input}
                  />
                </div>
                <div className={SignUpEmployerCSS.form_group_signup_employer}>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Password"
                    className={SignUpEmployerCSS.input}
                  />
                </div>
                <div className={SignUpEmployerCSS.form_group_signup_employer}>
                  <label htmlFor="refferal">Refferal:</label>
                  <input
                    type="refferal"
                    id="refferal"
                    value={address}
                    onChange={(e) => setRefferal(e.target.value)}
                    placeholder="Refferal"
                    className={SignUpEmployerCSS.input}
                  />
                </div>

                <button
                  className={SignUpEmployerCSS.signup_btn_signup_employer}
                >
                  <Link
                    to="/overview"
                    className={SignUpEmployerCSS.login_link_emp_1}
                  >
                    <p className={SignUpEmployerCSS.sign_up_text_emp}>
                      Sign up
                    </p>
                  </Link>
                </button>
              </div>
            </div>
            <div className={SignUpEmployerCSS.frame_container_signup_employer}>
              <img
                src={frame}
                alt="Frame225"
                className={SignUpEmployerCSS.frame_image_signup_employer}
              />
              <div className={SignUpEmployerCSS.text_welcome_signup_employer}>
                <p>Welcome!</p>
              </div>
            </div>
            <div className={SignUpEmployerCSS.login_container}>
              <span>Sign Up</span>
            </div>
            <div className={SignUpEmployerCSS.signup_container}>
              <span>Log In</span>
            </div>
          </div>
        ) : (
          <div className={SignUpEmployerCSS.container_login_employer}>
            <div className={SignUpEmployerCSS.form_container_signup_employer}>
              <div className={SignUpEmployerCSS.title_and_logo_signup_employer}>
                <div
                  className={SignUpEmployerCSS.logo_container_signup_employer}
                >
                  <img src={logo} alt="Logo" />
                </div>
                <div className={SignUpEmployerCSS.switchContainer}>
                  <Switch
                    style={{ backgroundColor: "#f9b8cb" }}
                    onClick={toggler}
                    checked={!toggle}
                  />
                </div>
              </div>

              <div className={SignUpEmployerCSS.login_form}>
                <div className={SignUpEmployerCSS.form_group_signup_employer}>
                  <div className={SignUpEmployerCSS.signup}>
                    <span></span>
                  </div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className={SignUpEmployerCSS.input}
                  />
                </div>

                <div className={SignUpEmployerCSS.form_group_signup_employer}>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Password"
                    className={SignUpEmployerCSS.input}
                  />
                </div>
                <div className={SignUpEmployerCSS.button_sgn}>
                  <button
                    className={SignUpEmployerCSS.signup_btn_signup_employer}
                  >
                    <Link
                      to="/overview"
                      className={SignUpEmployerCSS.login_link_emp_1}
                    >
                      <p className={SignUpEmployerCSS.sign_up_text_emp}>
                        Log in
                      </p>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className={SignUpEmployerCSS.frame_container_signup_employer}>
              <img
                src={frame}
                alt="Frame225"
                className={SignUpEmployerCSS.frame_image_signup_employer}
              />
              <div className={SignUpEmployerCSS.text_welcome_login_employer}>
                <p>Welcome back!</p>
              </div>
            </div>
            <div className={SignUpEmployerCSS.login_container}>
              <span>Sign Up</span>
            </div>
            <div className={SignUpEmployerCSS.signup_container}>
              <span>Log In</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUpEmployer;
