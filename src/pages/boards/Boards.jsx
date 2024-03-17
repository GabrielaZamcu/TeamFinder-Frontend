import React from "react";
import BoardsCSS from "./Boards.module.css";
import project5 from "../../assets/Frame 54.png";
import image from "../../assets/Frame27.png";
import image9 from "../../assets/Frame_act.png";
import image8 from "../../assets/Frame 47.png";
import image10 from "../../assets/Frame59.png";

function Boards() {
  return (
    <div className={BoardsCSS.container_boards}>
      <div className={BoardsCSS.content_boards}>
        <div className={BoardsCSS.project_img_boards}>
          <img src={project5} alt="Frame 54" />
        </div>
        <div className={BoardsCSS.name_project_boards}>
          <p>Project - 1</p>
          <p>Mobile app development for a store</p>
        </div>

        <div className={BoardsCSS.backgroundImage_boards}>
          <img src={image} alt="Frame27" />
        </div>
      </div>
      <div className={BoardsCSS.membersBox}>
        <h2 className={BoardsCSS.membersTitle}>Members</h2>
        <hr className={BoardsCSS.line} />
        <div className={BoardsCSS.memberImages}>
          <img src={image9} alt="Frame_act" />
          <img src={image9} alt="Frame_act" />
          <img src={image8} alt="Frame47" />
          <img src={image8} alt="Frame47" />
          <img src={image8} alt="Frame47" />
        </div>
      </div>{" "}
      <div className={BoardsCSS.botton_add}>
        <button6 className={BoardsCSS.button_sticky}>Add Sticky Note</button6>
      </div>
      <div className={BoardsCSS.sticky_note}>
        <img src={image10} alt="Frame59" />
        <div className={BoardsCSS.text_sticky_note}>
          <p>Meeting tomorrow at 8</p>
        </div>
      </div>
      <div className={BoardsCSS.resourcesBox}>
        <h2 className={BoardsCSS.boxTitle}>Resources</h2>
        <hr className={BoardsCSS.line2} />
        <p className={BoardsCSS.text}>Published resources</p>
        <button4 className={BoardsCSS.seeResourcesButton}>
          See resources
        </button4>
      </div>
    </div>
  );
}

export default Boards;
