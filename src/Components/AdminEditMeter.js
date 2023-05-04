import React from 'react'

function AdminEditMeter() {

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
          field: 'meterName',
          headerName: 'Meter Name',
          width: 100,
          editable: true,
        },
        {
          field: 'meterCrossSectionalArea',
          headerName: 'Meter CSA',
          width: 200,
          editable: true,
        },
        {
          field: 'criticalVolume',
          headerName: 'Critical Volume',
          width: 150,
          editable: true,
        },
        {
          field: 'meterLocationPin',
          headerName: 'Meter Location Pin',
          width: 100,
          editable: true,
        },
        {
          field: 'cityName',
          headerName: 'City Name',
          width: 100,
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
        { meterName: 'rohit', meterCrossSectionalArea: 95, criticalVolume: 75, cityName: "Bengaluru", meterLocationPin: 522614, },
        { meterName: 'aditya', meterCrossSectionalArea: 95, criticalVolume: 75, cityName: "Bengaluru", meterLocationPin: 522614,},
        { meterName: 'sahil', meterCrossSectionalArea: 95, criticalVolume: 75, cityName: "Bengaluru", meterLocationPin: 522614,},
        { meterName: 'punit', meterCrossSectionalArea: 95, criticalVolume: 75, cityName: "Bengaluru", meterLocationPin: 522614,},
        { meterName: 'abhinav', meterCrossSectionalArea: 95, criticalVolume: 75, cityName: "Bengaluru", meterLocationPin: 522614,},
        { meterName: 'bramham', meterCrossSectionalArea: 95, criticalVolume: 75, cityName: "Bengaluru", meterLocationPin: 522614,},
        { meterName: 'sai', meterCrossSectionalArea: 95, criticalVolume: 75, cityName: "Bengaluru", meterLocationPin: 522614,},
        { meterName: 'nipoon', meterCrossSectionalArea: 95, criticalVolume: 75, cityName: "Bengaluru", meterLocationPin: 522614,},
        { meterName: 'ritesh', meterCrossSectionalArea: 95, criticalVolume: 75, cityName: "Bengaluru", meterLocationPin: 522614,},
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

export default AdminEditMeter