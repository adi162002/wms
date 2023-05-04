import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import SideBar from '../Sidebar/SideBar';
import "./EmployeePage.css"

function EmployeeViewMR(props) {
  const x=props.prop
  console.log(x)
    const columns = [
        {
          field: 'meterName',
          headerName: 'Meter Name',
          width: 150,
          editable: true,
          flex: 1,
        },
        // {
        //   field: 'meterCrossSectionalArea',
        //   headerName: 'Cross Sec Area',
        //   width: 150,
        //   editable: true,
        // },
        {
          field: 'volume',
          headerName: 'Critical Vol',
          width: 150,
          editable: true,
          flex: 1,
        },
       
        // {
        //   field: 'meterReading',
        //   headerName: 'Meter Reading',
        //   width: 150,
        //   editable: true,
        // },
        {
          field: 'timeStamp',
          headerName: 'Time Stamp',
          width: 150,
          editable: true,
          flex: 1,
        },
        // {
        //   field: 'locationPin',
        //   headerName: 'Location Pin',
        //   width: 150,
        //   editable: true,
        // },
        {
          field: 'percentageLoss',
          headerName: '% Loss',
          width: 150,
          editable: true,
          flex: 1,
        },
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
      ];
      
      const rows = [
        { meterName: 'rohit', volume: 25, timeStamp: "12:35", percentageLoss: 5,},
        { meterName: 'aditya', volume: 35, timeStamp: "12:35", percentageLoss: 15,},
        { meterName: 'sahil', volume: 65, timeStamp: "12:35", percentageLoss: 10,},
        { meterName: 'punit', volume: 45, timeStamp: "12:35", percentageLoss: 6,},
        { meterName: 'abhinav', volume: 25, timeStamp: "12:35", percentageLoss: 8,},
        { meterName: 'bramham', volume: 55, timeStamp: "12:35", percentageLoss: 20,},
        { meterName: 'sai', volume: 25, timeStamp: "12:35", percentageLoss: 18,},
        { meterName: 'nipoon', volume: 65, timeStamp: "12:35", percentageLoss: 7,},
        { meterName: 'ritesh', volume: 95, timeStamp: "12:35", percentageLoss: 14,},
      ];
      
  return (
    <>
    <SideBar role={{prop:x}} >
    <div className='employeeView-meterReading'>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.meterName}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        style={{backgroundColor:"white"}}
      />
    </div>
    </SideBar>
    </>
  )
}

export default EmployeeViewMR