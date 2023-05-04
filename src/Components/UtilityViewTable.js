import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';


function UtilityViewTable() {
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
          field: 'utilityName',
          headerName: 'Utility Name',
          width: 150,
          editable: true,
          flex:1,
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
    ]
    const rows = [
        {utilityName: 'Water'},   
      ];
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:"40px", height: '30vh' }}>
    <Box sx={{ height: 220, width:"50%", padding:"30px"}}>
    <DataGrid
      rows={rows}
      columns={columns}
      getRowId={(row)=> row.utilityName}
      pageSizeOptions={[1]}
      disableColumnMenu
      disableColumnSort
    />
  </Box>
  </Box>
  )
}

export default UtilityViewTable