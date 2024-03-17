import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import CreateAccount from "./pages/createaccount/CreateAccount";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import Statistics from "./pages/statistics/Statistics";
import FirstPage from "./pages/firstpage/FirstPage";
import SignUpEmployer from "./pages/signupemployer/SignUpEmployer";
import SidebarEmployee from "./components/sidebaremployee/SideBarEmployee";
import Overview from "./pages/overview/Overview";
import Employees from "./pages/employees/Employees";
import Resources from "./pages/resources/Resources";
import Boards from "./pages/boards/Boards";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import SidebarEmployer from "./components/sidebaremployer/SideBarEmployer";
import DashboardEmployer from "./pages/dashboardemployer/DashboardEmployer";
import Organizations from "./pages/organizations/Organizations";

function App() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="pagina">
      {!(
        pathname === "/home" ||
        pathname === "/statistics" ||
        pathname === "/employer" ||
        pathname === "/admin" ||
        pathname === "/about" ||
        pathname === "/login" ||
        pathname === "/" ||
        pathname === "/dashboardemployer" ||
        pathname === "/organizations" ||
        pathname === "/employees_e" ||
        pathname === "/departaments" ||
        pathname === "/Project_emp"
      ) && <SidebarEmployee />}
      {!(
        pathname === "/home" ||
        pathname === "/statistics" ||
        pathname === "/employer" ||
        pathname === "/admin" ||
        pathname === "/about" ||
        pathname === "/login" ||
        pathname === "/projects" ||
        pathname === "/employees" ||
        pathname === "/Project" ||
        pathname === "/resources" ||
        pathname === "/overview" ||
        pathname === "/profile" ||
        pathname === "/"
      ) && <SidebarEmployer />}
      <div>
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Home /> <AboutUs /> <Statistics />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Home /> <AboutUs /> <Statistics />
              </>
            }
          />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<FirstPage />} />
          <Route path="/admin" element={<CreateAccount />} />
          <Route path="/employer" element={<SignUpEmployer />} />
          <Route path="/projects" element={<Overview />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/Project" element={<Boards />} />
          <Route path="/Project_emp" element={<Boards />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/overview" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboardemployer" element={<DashboardEmployer />} />
          <Route path="/organizations" element={<Organizations />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
