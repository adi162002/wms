import React, { useState } from 'react'
import Buttons from '../../Components/Buttons'
import PopUp from '../../Components/PopUp'
//import DataTable from 'react-data-table-component'
import UtilityForm from './UtilityForm'
//import UtilityViewTable from '../Components/UtilityViewTable'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { useEffect } from 'react'
import axios from 'axios'
import { apiLink } from '../../Config'
import "./Utilities.css"

function AddUtility() {
  
  const [openPopup, setOpenPopup] = useState(false)
    const [tableData, setTableData] = useState([])
    useEffect(() => {
      async function getUtility() {
        try {
          const response = await axios.get(`${apiLink}/utility/all-utility`, {
            headers: {
              "ngrok-skip-browser-warning": "true"
            }
          });
          console.log(response);
          setTableData(...tableData, response.data)
        } catch (error) {
          console.log(error);
        }
      }
      getUtility();
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
      //   name: "Utility Id",
      //   selector: row => row.utilityId,
      //   sortable: true
      // },
      // {
      //   name: "U Name",
      //   selector: row => row.utilityName,
      //   sortable: true,
      // },
      // {
      //   name: "U Address",
      //   selector: row => row.utilityAddress,
      //   sortable: true,
      // },
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
  
    function handleData(utilityData){
      
      setTableData(utilityData)
    }

    const handleUtilitySubmit = () => {
      setOpenPopup(false)
   
  }

    
  return (
    <>
    <div className='addUtilities-container'>
     <div className='add-Utilities'>  
    <Buttons
     text="Add Utility"
     onClick={()=>setOpenPopup(true)}
     
    />
    </div>
    <PopUp
        title="Add Utility"
        openPopup = {openPopup}
        setOpenPopup = {setOpenPopup}
    >
      <UtilityForm onSubmit={handleUtilitySubmit} data={handleData}/>
    </PopUp>

    {/* <UtilityViewTable/> */}
    <div className='addUtilities-table'>
     <DataGrid
      columns={columns}
      rows = {tableData}
      getRowId={(row)=>row.utilityName}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
    /> 
    </div>
    </div>
    </>
  )
}

export default AddUtility