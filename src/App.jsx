import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import CreateAccount from "./pages/createaccount/CreateAccount";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import Statistics from "./pages/statistics/Statistics";
import FirstPage from "./pages/firstpage/FirstPage";
import SignUpEmployer from "./pages/signupemployer/SignUpEmployer";
import SidebarEmployer from "./components/sidebaremployer/SideBarEmployer";
import Overview from "./pages/overview/Overview";
import Employees from "./pages/employees/Employees";

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
          <Route path="/overview" element={<Overview />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
