import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

function EmployeeViewMeter() {
  const columns = [
    {
      field: 'meterName',
      headerName: 'Meter Name',
      width: 150,
      editable: true,
      flex: 1,
    },
    {
      field: 'cityName',
      headerName: 'City Name',
      width: 150,
      editable: true,
      flex: 1,
    },
    {
      field: 'utilityName',
      headerName: 'Utility Name',
      width: 150,
      editable: true,
      flex: 1,
    },
  ]
  const rows = [
    { meterName: 'rohit', cityName: "Bengaluru", utilityName: "Water" },
    { meterName: 'aditya', cityName: "Bengaluru", utilityName: "Water" },
    { meterName: 'sahil', cityName: "Bengaluru", utilityName: "Water" },
    { meterName: 'punit', cityName: "Bengaluru", utilityName: "Water" },
    { meterName: 'abhinav', cityName: "Bengaluru", utilityName: "Water" },
    { meterName: 'bramham', cityName: "Bengaluru", utilityName: "Water" },
    { meterName: 'sai', cityName: "Bengaluru", utilityName: "Water" },

  ];
  return (
    <Box sx={{
      position: "absolute",
      top: "40px",
      height: 400,
      width: '80%',
      padding: "60px",
    }}>
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
    </Box>
  )
}

export default EmployeeViewMeter