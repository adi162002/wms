import React, { useState } from 'react'
import Buttons from '../../Components/Buttons'
import PopUp from '../../Components/PopUp'
//import DataTable from 'react-data-table-component'
import CityForm from './CityForm'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import SideBar from '../../Sidebar/SideBar'
import Navbar from '../../Navbar/Navbar'
import { useEffect } from 'react'
import axios from 'axios'
import { apiLink } from '../../Config'
import { useHistory } from 'react-router-dom';

import "./Cities.css"

function AddREditCity() {
  const auth=JSON.parse(sessionStorage.getItem("response"))
  console.log(auth)
  const [openPopup, setOpenPopup] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {
      async function getcity() {
        try {
          const response = await axios.get(`${apiLink}/city/all-city`, {
            headers: {
              "ngrok-skip-browser-warning": "true"
            }
          });
          console.log(response);
          setData(...data, response.data)
        } catch (error) {
          console.log(error);
        }
      }
      getcity();
    }, []);

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
      // {
      //   name: "City Id",
      //   selector: row => row.cityId
      // },
      // {
      //   name: "C Name",
      //   selector: row => row.cityName
      // },
      // {
      //   name: "C Address",
      //   selector: row => row.cityAddress
      // },

      {
        field: 'cityName',
        headerName: 'City Name',
        width: 200,
        editable: true,
        flex: 1,
      },
      {
        field: 'utilityName',
        headerName: 'Utility Name',
        width: 200,
        editable: true,
        flex: 1,
      },
      {
        field: 'edit',
        headerName: 'Actions',
        width: 200,
        flex:1,
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
  
    function handleData(cityData){
      setData(cityData)
    }

    const handleCitySubmit = () => {
      setOpenPopup(false)
   
  }

    
  return (
    <>
     <Navbar prop={auth}/>
     <SideBar role={auth} >
    <div className='addCities-container'>
    <div className='addCities'> 
    <Button
     variant='outlined'
     onClick={()=>setOpenPopup(true)}
     style={{backgroundColor:"white"}}
     >Add City</Button>

    </div>

    <PopUp
        title="Add City"
        openPopup = {openPopup}
        setOpenPopup = {setOpenPopup}
      
    >
      <CityForm onSubmit={handleCitySubmit} data={handleData}/>
    </PopUp>
    
    <div className='addCities-table'>
     <DataGrid
      columns={columns}
      rows = {data}
      getRowId={(row)=> row.cityName}
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
    </div>
    </SideBar>
    </>
  )
}

export default AddREditCity