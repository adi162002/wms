import React, { useState } from 'react'
import AdminProfile from '../Admin/AdminProfile'
import AddRUtility from "./Utilities/AddUtility"
import AddREditEmployee from "./Employees/AddREditEmployee"
import Buttons from '../Components/Buttons'
import Navbar from '../Navbar/Navbar'
import SideBar from '../Sidebar/SideBar'
import { useNavigate } from 'react-router-dom'


function AdminPage() {
 
  return (
    <>
    <Navbar/>
    <SideBar/>
    
    </>
  )
}


export default AdminPage