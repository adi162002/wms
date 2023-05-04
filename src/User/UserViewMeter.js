import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import "./UserPage.css"

function UserViewMeter() {
    const columns = [
        {
          field: 'meterName',
          headerName: 'Meter Name',
          width: 150,
          editable: true,
          flex:1,
        },
        {
          field: 'meterCrossSectionalArea',
          headerName: 'Cross Section Area',
          width: 150,
          editable: true,
          flex:1,
        },
        {
          field: 'meterCriticalVolume',
          headerName: 'Critical Volume',
          width: 150,
          editable: true,
          flex:1,
        },
        {
            field: 'meterLocationPin',
            headerName: 'Location PIN',
            width: 150,
            editable: true,
            flex:1,
          },

      ];
      
      const rows = [
        {meterName: 'rohit', meterCrossSectionalArea: 80, meterCriticalVolume: 25, meterLocationPin: 522614},   
      ];
      
  return (
    <div className="user-viewMeter">
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

export default UserViewMeter