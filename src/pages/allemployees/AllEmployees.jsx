import React from "react";
import AllEmployeesCSS from "./AllEmployees.module.css";
import project5 from "../../assets/Frame94.png";
import image from "../../assets/Frame27.png";
import image4 from "../../assets/Frame99.png";
import image_emp from "../../assets/Frame 47.png";

function AllEmployees() {
  return (
    <div className={AllEmployeesCSS.container}>
      <div className={AllEmployeesCSS.content}>
        <div className={AllEmployeesCSS.project_img}>
          <img src={project5} alt="Frame94" />
        </div>

        <div className={AllEmployeesCSS.buttons_emp}>
          <div className={AllEmployeesCSS.buttonContainer}>
            <img
              src={image4}
              alt="Frame99"
              className={AllEmployeesCSS.buttonImage}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={AllEmployeesCSS.buttonImage_emp}
            />
            <div className={AllEmployeesCSS.buttonText}>
              Jane Smith
              <span>
                X-Force (Organization) <br />
                Project Manager
              </span>
            </div>
          </div>
          <div className={AllEmployeesCSS.buttonContainer}>
            <img
              src={image4}
              alt="Frame99"
              className={AllEmployeesCSS.buttonImage}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={AllEmployeesCSS.buttonImage_emp}
            />
            <div className={AllEmployeesCSS.buttonText}>
              Mark Fennekim
              <span>
                X-Force (Organization) <br />
                Project Manager
              </span>
            </div>
          </div>
          <div className={AllEmployeesCSS.buttonContainer}>
            <img
              src={image4}
              alt="Frame99"
              className={AllEmployeesCSS.buttonImage}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={AllEmployeesCSS.buttonImage_emp}
            />
            <div className={AllEmployeesCSS.buttonText}>
              Ion Cucu
              <span>
                X-Force (Organization) <br />
                Project Manager
              </span>
            </div>
          </div>
          <div className={AllEmployeesCSS.buttonContainer}>
            <img
              src={image4}
              alt="Frame99"
              className={AllEmployeesCSS.buttonImage}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={AllEmployeesCSS.buttonImage_emp}
            />
            <div className={AllEmployeesCSS.buttonText}>
              Paul Matei
              <span>
                X-Force (Organization) <br />
                Project Manager
              </span>
            </div>
          </div>
          <div className={AllEmployeesCSS.buttonContainer}>
            <img
              src={image4}
              alt="Frame99"
              className={AllEmployeesCSS.buttonImage}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={AllEmployeesCSS.buttonImage_emp}
            />
            <div className={AllEmployeesCSS.buttonText}>
              Andreas Andersen
              <span>
                X-Force (Organization) <br />
                Project Manager
              </span>
            </div>
          </div>
          <div className={AllEmployeesCSS.buttonContainer}>
            <img
              src={image4}
              alt="Frame99"
              className={AllEmployeesCSS.buttonImage}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={AllEmployeesCSS.buttonImage_emp}
            />
            <div className={AllEmployeesCSS.buttonText}>
              John Thommson
              <span>
                X-Force (Organization) <br />
                Project Manager
              </span>
            </div>
          </div>
          <div className={AllEmployeesCSS.buttonContainer}>
            <img
              src={image4}
              alt="Frame99"
              className={AllEmployeesCSS.buttonImage}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={AllEmployeesCSS.buttonImage_emp}
            />
            <div className={AllEmployeesCSS.buttonText}>
              Martin Both
              <span>
                X-Force (Organization) <br />
                Project Manager
              </span>
            </div>
          </div>
          <div className={AllEmployeesCSS.buttonContainer}>
            <img
              src={image4}
              alt="Frame99"
              className={AllEmployeesCSS.buttonImage}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={AllEmployeesCSS.buttonImage_emp}
            />
            <div className={AllEmployeesCSS.buttonText}>
              Matteo Belucci
              <span>
                X-Force (Organization) <br />
                Project Manager
              </span>
            </div>
          </div>
          <div className={AllEmployeesCSS.buttonContainer}>
            <img
              src={image4}
              alt="Frame99"
              className={AllEmployeesCSS.buttonImage}
            />
            <img
              src={image_emp}
              alt="Frame47"
              className={AllEmployeesCSS.buttonImage_emp}
            />
            <div className={AllEmployeesCSS.buttonText}>
              Alice Smith
              <span>
                X-Force (Organization) <br />
                Project Manager
              </span>
            </div>
          </div>
        </div>

        <div className={AllEmployeesCSS.backgroundImage}>
          <img src={image} alt="Frame27" />
        </div>
      </div>
    </div>
  );
}

export default AllEmployees;
