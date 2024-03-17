import React from "react";
import AboutUsCSS from "./AboutUs.module.css";
import image1 from "../../assets/Frame84.png";
function AboutUs() {
  return (
    <div className={AboutUsCSS.about_container}>
      <div className={AboutUsCSS.about_box}>
        <div className={AboutUsCSS.image1}>
          <img src={image1} alt="Frame84" />
        </div>
        <div className={AboutUsCSS.title}>
          <h2>About us</h2>
          <div className={AboutUsCSS.line}></div>{" "}
        </div>

        <div className={AboutUsCSS.text_box}>
          <div className={AboutUsCSS.about_text}>
            <button3>
              <p>
                With our help, you have access to the best teams, carefully
                selected through leading programs. We are dedicated to
                developing a platform specifically designed to meet the needs of
                employers. It generates effective teams in record time, starting
                from the specific wishes and requirements of employers, without
                involving considerable effort on their part.
              </p>
              <p>
                Through our advanced algorithms, we make it easy to match people
                who share the same interests and have high social compatibility.
                Thus, we offer you not just teams, but solid and productive
                partnerships, based on understanding and effective
                collaboration. Through our advanced algorithms, we facilitate
                the association between people who share the same interests and
                who show high social compatibility. Thus, we offer you not only
                teams, but solid and productive partnerships, based on
                understanding and effective collaboration.
              </p>
            </button3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
