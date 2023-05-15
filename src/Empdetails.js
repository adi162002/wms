import React, { useState } from 'react'
import SideBar from './Sidebar/SideBar';
import { DataGrid } from '@mui/x-data-grid';
import "./Employee/EmployeePage.css"
const Empdetails = ({ prop, row }) => {
  console.log(row)
    //const filterrows = row.filter((item) => item.roleName ==="EMPLOYEE");
  
    const newarray=row.flat()
    const rows=newarray.filter((item)=>item.roleName==="EMPLOYEE")
    console.log(newarray)
  const columns = [
    {
      field: 'userName',
      headerName: 'Name',
      width: 150,
      editable: true,
      flex: 1,
    },
    // {
    //   field: 'meterName',
    //   headerName: 'meterName',
    //   width: 150,
    //   editable: true,
    //   flex: 1,
    // },
    {
      field: 'roleName',
      headerName: 'Role',
      width: 150,
      editable: true,
      flex: 1,
    },
    {
      field: 'userAddress',
      headerName: 'Address',
      width: 150,
      editable: true,
      flex: 1,
    },
    {
        field: 'userEmail',
        headerName: 'Email',
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
            getRowId={(rows) => rows.userId}
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

export default Empdetails;


