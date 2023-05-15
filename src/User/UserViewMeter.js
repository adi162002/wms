import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import "./UserPage.css"
import axios from 'axios';
import { apiLink } from '../Config';
import Navbar from '../Navbar/Navbar';
import SideBar from '../Sidebar/SideBar';

function UserViewMeter() {
  const auth = JSON.parse(sessionStorage.getItem("response"));
  const id=auth.userId
  const [rows, setrows] = React.useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${apiLink}/meter/${id}`, {
          headers: {
            "ngrok-skip-browser-warning": "true"
          }
        });
        // Handle the response data
        console.log(response);
        setrows([...rows,response.data])
      } catch (error) {
        console.log(error.response.status);
      }
    };

    getData();
  }, []);
    const columns = [
        {
          field: 'meterName',
          headerName: 'Meter Name',
          width: 150,
          editable: true,
          flex:1,
        },
        {
          field: 'crossSecArea',
          headerName: 'Cross Section Area',
          width: 150,
          editable: true,
          flex:1,
        },
        {
          field: 'criticalVolume',
          headerName: 'Critical Volume',
          width: 150,
          editable: true,
          flex:1,
        },
        {
            field: 'locationPin',
            headerName: 'Location PIN',
            width: 150,
            editable: true,
            flex:1,
          },

      ];
      
  return (
    <div>
      <Navbar prop={auth}/>
      <SideBar role={auth}>
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
    </SideBar>
    </div>
  )
}

export default UserViewMeter