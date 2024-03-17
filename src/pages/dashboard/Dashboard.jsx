import React from "react";
import DashboardCSS from "./Dashboard.module.css";
import image11 from "../../assets/Frame 94.png";
import image12 from "../../assets/Frame 97.png";
import image13 from "../../assets/Frame 95.png";
import image14 from "../../assets/Frame 96.png";
import image15 from "../../assets/buton.png";
function Dashboard() {
  
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const timeSlots = [
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
  ];

  return (
    <div className={DashboardCSS.dashboard}>
      <div className={DashboardCSS.project_img_dashboards}>
        <img src={image11} alt="Frame94" />
      </div>
      <div className={DashboardCSS.img_dashboards}>
        <img src={image12} alt="Frame97" />
      </div>
      <div className={DashboardCSS.name_project_dashboards}>
        <p>Good morning, Name </p>
      </div>
      <div className={DashboardCSS.title1_dashboards}>
        <p>Schedules </p>
      </div>
      <table className={DashboardCSS.schedule_table}>
        <thead>
          <tr>
            <th
              style={{
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
              }}
            ></th>
            {daysOfWeek.map((day, index) => (
              <th
                key={index}
                style={{
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
    
          {timeSlots.map((timeSlot, index) => (
            <tr key={index}>
              <td>{timeSlot}</td>
             
              {daysOfWeek.map((day, index) => (
                <td key={index}>
                
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={DashboardCSS.title2_dashboards}>
        <p>Today’s Agenda </p>
      </div>
      <div className={DashboardCSS.program1_dashboards}>
        <img src={image13} alt="Frame95" />
        <div className={DashboardCSS.date1}>
          <img src={image14} alt="Frame96" />
        </div>
        <div className={DashboardCSS.button}>
          <button15>
            <img src={image15} alt="buton" />
          </button15>
        </div>
      </div>{" "}
      <div className={DashboardCSS.project_1}>
        <p>Project 1 </p>
      </div>
      <div className={DashboardCSS.project_2}>
        <p>Role </p>
      </div>
      <div className={DashboardCSS.project_3}>
        <p>9:00 - 12:00 </p>
      </div>
      <div className={DashboardCSS.program2_dashboards}>
        <img src={image13} alt="Frame95" />
        <div className={DashboardCSS.date2}>
          <img src={image14} alt="Frame96" />
        </div>
        <div className={DashboardCSS.button1}>
          <button15>
            <img src={image15} alt="buton" />
          </button15>
        </div>
      </div>{" "}
      <div className={DashboardCSS.project_4}>
        <p>Project 1 </p>
      </div>
      <div className={DashboardCSS.project_5}>
        <p>Role </p>
      </div>
      <div className={DashboardCSS.project_6}>
        <p>14:00 - 17:00 </p>
      </div>
    </div>
  );
}

export default Dashboard;
