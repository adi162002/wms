import React from 'react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

function UpdateUserTable() {

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
        { field: 'id', headerName: 'User ID', width: 80 },
        {
          field: 'userName',
          headerName: 'User Name',
          width: 100,
          editable: true,
        },
        {
          field: 'userEmail',
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
          field: 'utilityName',
          headerName: 'Utility Name',
          width: 100,
          editable: true,
        },
        {
          field: 'cityName',
          headerName: 'City Id',
          width: 100,
          editable: true,
        },
        {
          field: 'userAddress',
          headerName: 'User Address',
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
        { userName: 'rohit', userEmail: "bramham@gmail.com", roleName: "User", cityName: "Bengaluru", utilityName: "Water", userAddress: "Koramangala, Bengaluru" },
        { userName: 'aditya', userEmail: "bramham@gmail.com", roleName: "User", cityName: "Bengaluru", utilityName: "Water", userAddress: "Koramangala, Bengaluru"},
        { userName: 'sahil', userEmail: "bramham@gmail.com", roleName: "User", cityName: "Bengaluru", utilityName: "Water", userAddress: "Koramangala, Bengaluru"},
        { userName: 'punit', userEmail: "bramham@gmail.com", roleName: "User", cityName: "Bengaluru", utilityName: "Water", userAddress: "Koramangala, Bengaluru"},
        { userName: 'abhinav', userEmail: "bramham@gmail.com", roleName: "User", cityName: "Bengaluru", utilityName: "Water", userAddress: "Koramangala, Bengaluru"},
        { userName: 'bramham', userEmail: "bramham@gmail.com", roleName: "User", cityName: "Bengaluru", utilityName: "Water", userAddress: "Koramangala, Bengaluru"},
        { userName: 'sai', userEmail: "bramham@gmail.com", roleName: "User", cityName: "Bengaluru", utilityName: "Water", userAddress: "Koramangala, Bengaluru"},
        { userName: 'nipoon', userEmail: "bramham@gmail.com", roleName: "User", cityName: "Bengaluru", utilityName: "Water", userAddress: "Koramangala, Bengaluru"},
        { userName: 'ritesh', userEmail: "bramham@gmail.com", roleName: "User", cityName: "Bengaluru", utilityName: "Water", userAddress: "Koramangala, Bengaluru"},
      ];
      
  return (
    <Box sx={{ height: 400, width: '100%', padding:"30px"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row)=>row.userEmail}
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

export default UpdateUserTable