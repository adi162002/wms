import React from 'react'
import { useState } from 'react';
import './UserPage.css';
//import Side from './Side';
// import Buttons from './Components/Buttons'; 
import UserProfile from './UserProfile';
// import EmployeeTable from './Components/EmployeeViewMR';
import UserViewMeter from './UserViewMeter';
// import UpdateUserTable from './Components/UpdateUserTable';
// import UpdateEmployeeTable from './Components/UpdateEmployeeTable';
// import UtilityViewTable from './Components/UtilityViewTable';
import { Button } from '@mui/material';
import UserViewMeterReading from './UserViewMeterReading';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import SideBar from '../Sidebar/SideBar';

function UserPage() {
    const [viewMeter, setViewMeter] = useState(false)
    const [viewMeterReading, setViewMeterReading] = useState(false)
  
    const handleViewMeter = () => {
      setViewMeter(!viewMeter)
      setViewMeterReading(false)
    }
  
    const handleViewMeterReading = () => {
      setViewMeterReading(!viewMeterReading)
      setViewMeter(false)
    }
  return (
    <>

      <Navbar/>
      <SideBar/>
      {/* <Side/> */}
      {/* <UtilityViewTable/> */}

      {/* <UserProfile /> */}
      
      {/* <div className="profile-wrapper">
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Profile">
            <IconButton
              component={Link}
              to="/user/profile"
              sx={{ p: 0 }}
            >
              <Avatar alt="Bramham" src={"../../dp.jpg"} />
            </IconButton>
          </Tooltip>
        </Box>
      </div>
    
      <div className="button-wrapper">

        <Button
          variant='outlined'
          onClick={handleViewMeter}
        >View Meter</Button>


        <Button
          variant='outlined'
          onClick={handleViewMeterReading}
        >View Meter Reading</Button>

        {viewMeter && <UserViewMeter />}
        {viewMeterReading && <UserViewMeterReading />}
      </div> */}



    </>
  )
}

export default UserPage