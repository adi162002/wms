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
  const location=useLocation()
 const x=location.state.resp
 const role=x.roleName;
 console.log(x.roleName)
  return (
    <>
    {x.roleName==='EMPLOYEE' && 
    <div>
    <Navbar prop={x}/>
    <div className='employeePage-container'>
    <HourlyUpload/>
    <EmployeeViewMR prop={x}/>
    </div>
    </div>
    }
    {x.roleName==='ADMIN' && 
    <div>
     <Navbar prop={x}/>
    <div className='employeePage-container'>
    {/* <HourlyUpload/> */}
    <EmployeeViewMR prop={x}/>
    </div>
    </div>
    }
    {x.roleName==='CUSTOMER' && 
    <div>
    <Navbar prop={x}/>
    <div className='employeePage-container'>
    {/* <HourlyUpload/> */}
    <EmployeeViewMR prop={x}/>
    </div>
    </div>
    }


    </>

  //  {role==='EMPLOYEE' && (
  //   <>
  //   <HourlyUpload/>
  //   <EmployeeViewMR />
  //   </>
  //  ) }  
  //  {role==='USER' && (
  //   <>
  //   {/* <HourlyUpload/> */}
  //   <EmployeeViewMR />
  //   </>
  //  ) }  
  )
}

export default EmployeePage