import React from 'react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

function UpdateEmployeeTable() {

    const handleEdit = (row) => {
        // Open dialog box with form for editing row data
      };
      
      const handleDelete = (id) => {
        fetch(`/api/users/${id}`, { method: 'DELETE' })
          .then((response) => {
            if (response.ok) {
              // Delete row from table
            } else {
              // Handle error
            }
          })
          .catch((error) => {
            // Handle error
          });
      };
    const columns = [
        
        {
          field: 'employeeName',
          headerName: 'Employee Name',
          width: 200,
          editable: true,
        },
        {
          field: 'employeeEmail',
          headerName: 'Email',
          width: 200,
          editable: true,
        },
        {
          field: 'roleName',
          headerName: 'Role',
          width: 150,
          editable: true,
        },
        {
          field: 'employeeAddress',
          headerName: 'Employee Address',
          width: 250,
          editable: true,
        },
        {
            field: 'edit',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => (
             <React.Fragment>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => handleEdit(params.row)}
              >
                Edit
              </Button>
              <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => handleDelete(params.row.id)}
              style={{ marginLeft: 8}}
            >
              Delete
            </Button>
            </React.Fragment>
            ),
          },
       
      ];

      const rows = [
        { employeeName: 'rohit', employeeEmail: "bramham@gmail.com", roleName: "employee", employeeAddress: "Koramangala, Bengaluru" },
        { employeeName: 'aditya', employeeEmail: "bramham@gmail.com", roleName: "employee", employeeAddress: "Koramangala, Bengaluru"},
        { employeeName: 'sahil', employeeEmail: "bramham@gmail.com", roleName: "employee", employeeAddress: "Koramangala, Bengaluru"},
        { employeeName: 'punit', employeeEmail: "bramham@gmail.com", roleName: "employee", employeeAddress: "Koramangala, Bengaluru"},
        { employeeName: 'abhinav', employeeEmail: "bramham@gmail.com", roleName: "employee", employeeAddress: "Koramangala, Bengaluru"},
        { employeeName: 'bramham', employeeEmail: "bramham@gmail.com", roleName: "employee", employeeAddress: "Koramangala, Bengaluru"},
        { employeeName: 'sai', employeeEmail: "bramham@gmail.com", roleName: "employee", employeeAddress: "Koramangala, Bengaluru"},
        { employeeName: 'nipoon', employeeEmail: "bramham@gmail.com", roleName: "employee", employeeAddress: "Koramangala, Bengaluru"},
        { employeeName: 'ritesh', employeeEmail: "bramham@gmail.com", roleName: "employee", employeeAddress: "Koramangala, Bengaluru"},
      ];
  return (
    <Box sx={{ height: 400, width: '100%', padding:"30px"}}>
    <DataGrid
      rows={rows}
      columns={columns}
      getRowId={(row)=> row.employeeEmail}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
    />
  </Box>
  )
}

export default UpdateEmployeeTable