import React, { useEffect, useState } from 'react'
import SideBar from './Sidebar/SideBar';
import { DataGrid } from '@mui/x-data-grid';
import "./Employee/EmployeePage.css"
import axios from 'axios';
import { apiLink } from './Config';
const Columns = ({ prop, row }) => {
    const[res,setres]=useState([])
    useEffect(()=>{
        const getallusers=async ()=>{
        try{
            const response=await axios.get(`${apiLink}/users/all-users`,{
                headers:{
                    "ngrok-skip-browser-warning":"true"
            }
        });
          setres(response.data)
          console.log(res)
        }catch(error){
            console.log(error)
        }

    }
    getallusers()
    },[]);

    console.log(row)
    const rows=row.flat()
    
  const columns = [

    {
      field: 'meterName',
      headerName: 'meterName',
      width: 150,
      editable: true,
      flex: 1,
    },
    {
      field: 'meterReading',
      headerName: 'meterReading',
      width: 150,
      editable: true,
      flex: 1,
    },
    {
      field: 'percentageLoss',
      headerName: 'percentageLoss',
      width: 150,
      editable: true,
      flex: 1,
    },
    {
        field: 'lossOfWater',
        headerName: 'lossOfWater',
        width: 150,
        editable: true,
        flex: 1,
      },
      {
        field: 'localDateTime',
        headerName: 'timestamp',
        width: 150,
        editable: true,
        flex: 1,
      },

  ];

  return (
    <div>
      {/* Use the prop value and rows */}
      <SideBar role={prop}>
        <div className='employeeView-meterReading'>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(rows) => rows.readingId}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            style={{ backgroundColor: 'white' }}
          />
        </div>
      </SideBar>
    </div>
  );
};

export default Columns;


