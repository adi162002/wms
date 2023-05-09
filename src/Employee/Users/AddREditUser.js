import React, { useState } from 'react'
import Buttons from '../../Components/Buttons'
import PopUp from '../../Components/PopUp'
import AddUserForm from './AddUserForm'
//import DataTable from "react-data-table-component"
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import SideBar from '../../Sidebar/SideBar'
import Navbar from '../../Navbar/Navbar'
import { useEffect } from 'react'
import axios from 'axios'
import { apiLink } from '../../Config'
import "./Users.css"


function AddREditUser() {
  const [openPopup, setOpenPopup] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    async function getuser() {
      try {
        const response = await axios.get(`${apiLink}/users/all-users`, {
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
    getuser();
  }, []);

  const handleEdit = (row) => {
    
  };

  const handleDelete = async (Id) => {
    try {
      await axios.delete(`${apiLink}/users/${Id}`);
      setData(data.filter((row) => row.userId !== Id));
    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    // {
    //   name: "User Id",
    //   selector: row => row.userId
    // },
    // {
    //   name: "Email",
    //   selector: row => row.userEmail
    // },
    // {
    //   name: "Role",
    //   selector: row => row.userRole
    // },
    // {
    //   name: "Name",
    //   selector: row => row.userName
    // },
    // {
    //   name: "Address",
    //   selector: row => row.userAddress
    // },
    // {
    //   name: "City Assigned",
    //   selector: row => row.assignCity
    // },
    // {
    //   name: "Meter Id",
    //   selector: row => row.assignMeterId
    // },

    {
      field: 'userName',
      headerName: 'User Name',
      width: 200,
      editable: true,
      flex: 1,
    },
    {
      field: 'userEmail',
      headerName: 'User Email',
      width: 150,
      editable: true,
      flex: 1,
    },
    {
      field: 'roleName',
      headerName: 'Role',
      width: 100,
      editable: true,
      flex: 1,
    },
    {
      field: 'cityName',
      headerName: 'City Assign',
      width: 200,
      editable: true,
      flex: 1,
    },
    {
      field: 'meterName',
      headerName: 'Assign Meter',
      width: 150,
      editable: true,
      flex: 1,
    },
    {
      field: 'edit',
      headerName: 'Actions',
      width: 200,
      flex: 1,
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
            onClick={() => handleDelete(params.row.userId)}
            style={{ marginLeft: 8 }}
          >
            Delete
          </Button>
        </React.Fragment>
      ),
    },
  ]
  function handleOnSubmit() {

    setOpenPopup(false)
  }
  function handleData(userData) {
    setData(userData)
  }
  return (
    <>
        <div className='addUsers-container'>
          <div className='addUsers'>
            <Button
              variant="outlined"
              onClick={() => setOpenPopup(true)}
              style={{ backgroundColor: "white" }}
            >Add User</Button>
          </div>
          <PopUp
            title="Add User"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          >
            <AddUserForm onSubmit={handleOnSubmit} data={handleData} />
          </PopUp>

          <div className='addUsers-table'>
          
              <DataGrid
                columns={columns}
                rows={data}
                getRowId={(row) => row.userEmail}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                style={{ backgroundColor: "white" }}
              />
           
          </div>
        </div>
    </>
  )
}

export default AddREditUser