import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeePage from "./Employee/EmployeePage";
import EmployeeProfile from "./Employee/EmployeeProfile";
import UserProfile from "./User/UserProfile";
import AddREditCity from "./Employee/Cities/AddREditCity";
import AddREditUser from "./Employee/Users/AddREditUser";
import SideBar from "./Sidebar/SideBar";
import AddREditMeter from "./Employee/Meters/AddREditMeter";
import Navbar from "./Navbar/Navbar";
import LandingPage from "./Landing/LandingPage";
import AdminProfile from "./Admin/AdminProfile";
import AddUtility from "./Admin/Utilities/AddUtility";
import AddREditEmployee from "./Admin//Employees/AddREditEmployee";
import AdminPage from "./Admin/AdminPage";
import UserPage from "./User/UserPage";
import PrivateRoutes from "./PrivateRoutes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/Dashboard" element={<EmployeePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/city" element={<AddREditCity />} />
          <Route path="/meter" element={<AddREditMeter />} />
          <Route path="/users" element={<AddREditUser />} />
          <Route path="/profile" element={<AdminProfile />} />
          <Route path="/utility" element={<AddUtility />} />
          <Route path="/employees" element={<AddREditEmployee />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
