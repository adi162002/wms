import React, { useState } from 'react'
import Test from '../Landing/Test'
import HourlyUpload from './HourlyUpload'
import { Button } from '@mui/material'
import EmployeeViewMR from './EmployeeViewMR'
import EmployeeViewMeter from '../Components/EmployeeViewMeter'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import "./EmployeePage.css"
import { Link } from "react-router-dom"
import Buttons from '../Components/Buttons'
import AddREditCity from './Cities/AddREditCity'
import AddREditMeter from './Meters/AddREditMeter'
import AddREditUser from './Users/AddREditUser'
import SideBar from '../Sidebar/SideBar'
import Navbar from '../Navbar/Navbar'
import { useLocation } from 'react-router-dom'
import "./EmployeePage.css"
function EmployeePage() {
  const auth = JSON.parse(sessionStorage.getItem("response"));

  const location=useLocation()
//  const auth=location.state.resp
 console.log(auth.roleName)
  return (
    <>
    {auth.roleName==='EMPLOYEE' && 
    <div>
    <Navbar prop={auth}/>
    <div className='employeePage-container'>
    <HourlyUpload/>
    <EmployeeViewMR prop={auth}/>
    </div>
    </div>
    }
    {auth.roleName==='ADMIN' && 
    <div>
     <Navbar prop={auth}/>
    <div className='employeePage-container'>
    {/* <HourlyUpload/> */}
    <EmployeeViewMR prop={auth}/>
    </div>
    </div>
    }
    {auth.roleName==='CUSTOMER' && 
    <div>
    <Navbar prop={auth}/>
    <div className='employeePage-container'>
    {/* <HourlyUpload/> */}
    <EmployeeViewMR prop={auth}/>
    </div>
    </div>
    }


    </>
  )
}

export default EmployeePage