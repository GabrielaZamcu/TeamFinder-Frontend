import React from "react";
import ProfileCSS from "./Profile.module.css";
import image16 from "../../assets/Frame61.png";
import image17 from "../../assets/Ellipse17.png";
import image18 from "../../assets/Frame67.png";
import image19 from "../../assets/Frame68.png";
import image20 from "../../assets/Frame70.png";
function Profile() {
  return (
    <div className={ProfileCSS.container_profile}>
      <div className={ProfileCSS.content_profile}>
        <div className={ProfileCSS.project_img_profile}>
          <img src={image16} alt="Frame61" />
        </div>

        <div className={ProfileCSS.profile1}>
          <div className={ProfileCSS.text_1}>
            <p>NAME SURNAME</p>
          </div>
          <div className={ProfileCSS.text_2}>
            <p>Skills</p>
          </div>
        </div>
      </div>
      <div className={ProfileCSS.image_pers}>
        <img src={image17} alt="Ellipse17" />
      </div>
      <div className={ProfileCSS.profile2}>
        <div className={ProfileCSS.number_profile}>
          <img src={image18} alt="Frame67" />
          <div className={ProfileCSS.text_3}>
            <p>+40 734524542</p>
          </div>
        </div>
        <div className={ProfileCSS.number_profile1}>
          <img src={image19} alt="Frame68" />
          <div className={ProfileCSS.text_4}>
            <p>345tgdfg@gmail.com</p>
          </div>
        </div>
        <div className={ProfileCSS.cv_button}>
          <button20 className={ProfileCSS.cv_btn}>View CV</button20>
        </div>
      </div>
      <div className={ProfileCSS.edit_button}>
        <button21 className={ProfileCSS.edit_btn}>Edit Profile</button21>
      </div>
      <div className={ProfileCSS.buttons_prf}>
        <div className={ProfileCSS.Container_prn}>
          <div className={ProfileCSS.name_project_prf}>
            <p>Project</p>
          </div>
          <div className={ProfileCSS.name1_project_prf}>
            <p>Role</p> <br /> <p>Tasks done</p>
          </div>
          <div className={ProfileCSS.name2_project_prf}>
            <p>Status 0/5</p>
          </div>
          <img
            src={image20}
            alt="Frame80"
            className={ProfileCSS.buttonImagePrf}
          />
        </div>
        <div className={ProfileCSS.Container_prn}>
          <div className={ProfileCSS.name_project_prf}>
            <p>Project</p>
          </div>
          <div className={ProfileCSS.name1_project_prf}>
            <p>Role</p> <br /> <p>Tasks done</p>
          </div>
          <div className={ProfileCSS.name2_project_prf}>
            <p>Status 0/5</p>
          </div>
          <img
            src={image20}
            alt="Frame80"
            className={ProfileCSS.buttonImagePrf}
          />
        </div>
        <div className={ProfileCSS.Container_prn}>
          <div className={ProfileCSS.name_project_prf}>
            <p>Project</p>
          </div>
          <div className={ProfileCSS.name1_project_prf}>
            <p>Role</p> <br /> <p>Tasks done</p>
          </div>
          <div className={ProfileCSS.name2_project_prf}>
            <p>Status 0/5</p>
          </div>
          <img
            src={image20}
            alt="Frame80"
            className={ProfileCSS.buttonImagePrf}
          />
        </div>
        <div className={ProfileCSS.Container_prn}>
          <div className={ProfileCSS.name_project_prf}>
            <p>Project</p>
          </div>
          <div className={ProfileCSS.name1_project_prf}>
            <p>Role</p> <br /> <p>Tasks done</p>
          </div>
          <div className={ProfileCSS.name2_project_prf}>
            <p>Status 0/5</p>
          </div>
          <img
            src={image20}
            alt="Frame80"
            className={ProfileCSS.buttonImagePrf}
          />
        </div>
        <div className={ProfileCSS.Container_prn}>
          <div className={ProfileCSS.name_project_prf}>
            <p>Project</p>
          </div>
          <div className={ProfileCSS.name1_project_prf}>
            <p>Role</p> <br /> <p>Tasks done</p>
          </div>
          <div className={ProfileCSS.name2_project_prf}>
            <p>Status 0/5</p>
          </div>
          <img
            src={image20}
            alt="Frame80"
            className={ProfileCSS.buttonImagePrf}
          />
        </div>
        <div className={ProfileCSS.Container_prn}>
          <div className={ProfileCSS.name_project_prf}>
            <p>Project</p>
          </div>
          <div className={ProfileCSS.name1_project_prf}>
            <p>Role</p> <br /> <p>Tasks done</p>
          </div>
          <div className={ProfileCSS.name2_project_prf}>
            <p>Status 0/5</p>
          </div>
          <img
            src={image20}
            alt="Frame80"
            className={ProfileCSS.buttonImagePrf}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
