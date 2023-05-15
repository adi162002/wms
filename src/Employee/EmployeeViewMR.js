import React, { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import SideBar from '../Sidebar/SideBar';
import axios from 'axios';
import { apiLink } from '../Config';
import "./EmployeePage.css";
import Columns from '../Columns';
import Empdetails from '../Empdetails';

function EmployeeViewMR(props) {
  const x=props.prop
  console.log(x.roleName)
  const [rows,setrows]=useState([]);
  const [rowss,setrowss]=useState([]);

  
  useEffect(() => {
    const getmeter = async () => {
      try {
        const response = await axios.get(`${apiLink}/reading`, {
          headers: {
            "ngrok-skip-browser-warning": "true"
          }
        });
        console.log(response.data);
        setrowss([...rowss, response.data]);
      } catch (error) {
        console.log(error);
      }
    };
    
    const getuser=async()=> {
      try {
        const response = await axios.get(`${apiLink}/users/all-users`, {
          headers: {
            "ngrok-skip-browser-warning": "true"
          }
        });
        console.log(response);
        setrows([...rows, response.data])
      } catch (error) {
        console.log(error);
      }
    }
    
     if(x.roleName==="EMPLOYEE")
     {
      getmeter()
     }    
     if(x.roleName==="ADMIN")
     {
      getuser()
     }    
      

  }, []);
  return (
    <>
    {x.roleName==="ADMIN" &&
    <Empdetails prop={x} row={rows}/>
    }
    {x.roleName==="EMPLOYEE" &&
    <Columns prop={x} row={rowss}/>
    }
        {x.roleName==="CUSTOMER" &&
    <Empdetails prop={x} row={rows}/>
    }

    </>
  )
}

export default EmployeeViewMR