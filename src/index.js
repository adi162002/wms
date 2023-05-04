import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import EmployeePage from './Employee/EmployeePage';
import EmployeeProfile from './Employee/EmployeeProfile';
import UserProfile from './User/UserProfile';
import AddREditCity from './Employee/Cities/AddREditCity';
import AddREditUser from './Employee/Users/AddREditUser';
import SideBar from './Sidebar/SideBar';
import AddREditMeter from './Employee/Meters/AddREditMeter';
import Navbar from './Navbar/Navbar';
import LandingPage from './Landing/LandingPage';
import AdminProfile from './Admin/AdminProfile';
import AddUtility from './Admin/Utilities/AddUtility';
import AddREditEmployee from './Admin//Employees/AddREditEmployee';
import AdminPage from './Admin/AdminPage';
import UserPage from './User/UserPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
