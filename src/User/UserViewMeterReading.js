import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import "./UserPage.css"

function UserViewMeterReading() {
    const columns = [
        {
          field: 'meterName',
          headerName: 'Meter Name',
          width: 150,
          editable: true,
          flex:1,
        },
        {
          field: 'volume',
          headerName: 'Volume',
          width: 150,
          editable: true,
          flex:1,
        },
        {
          field: 'percentageLoss',
          headerName: '% Loss',
          width: 150,
          editable: true,
          flex:1,
        },
        {
            field: 'timeStamp',
            headerName: 'Time',
            width: 150,
            editable: true,
            flex:1,
          },

      ];
      
      const rows = [
        {meterName: 'rohit', volume: 80, percentageLoss: 25, timeStamp: "12:00"},   
      ];
      
  return (
    <div className='user-viewMeterReading'>
    <DataGrid
      rows={rows}
      columns={columns}
      getRowId={(row)=> row.meterName}
      pageSizeOptions={[1]}
      disableColumnMenu
      disableColumnSort
    />
  </div>
  )
}

export default UserViewMeterReading