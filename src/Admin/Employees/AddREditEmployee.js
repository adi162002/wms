import React, {useState} from 'react'
import AddEmployeeForm from './AddEmployeeForm'
import Buttons from '../../Components/Buttons'
import PopUp from '../../Components/PopUp'
//import DataTable from 'react-data-table-component'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import "./Employees.css"


function AddREditEmployee() {
    const [openPopup, setOpenPopup] = useState(false)
    const [data, setData] = useState([])

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
      //   name: "User Id",
      //   selector: row => row.employeeId
      // },
      // {
      //   name: "Email",
      //   selector: row => row.employeeEmail
      // },
      // {
      //   name: "Role",
      //   selector: row => row.employeeRole
      // },
      // {
      //   name: "Name",
      //   selector: row => row.employeeName
      // },
      // {
      //   name: "Address",
      //   selector: row => row.employeeAddress
      // },

      {
        field: 'employeeName',
        headerName: 'Emplooyee Name',
        width: 200,
        editable: true,
        flex: 1,
      },
      {
        field: 'employeeEmail',
        headerName: 'Employee Email',
        width: 150,
        editable: true,
        flex: 1,
      },
      {
        field: 'employeeRole',
        headerName: 'Role',
        width: 100,
        editable: true,
        flex: 1,
      },
      {
        field: 'employeeAddress',
        headerName: 'Employee Address',
        width: 100,
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
  
    function handleData(employeeData){
      setData(employeeData)
    }

    const handleAddEmployeeSubmit = () => {
      setOpenPopup(false)
   
  }

  return (
    <>
    <div className='addEmployees-container'>
    <div className='add-employees'> 
    <Buttons
     text="Add Employee"
     onClick={()=>setOpenPopup(true)}
    />
    </div>

    <PopUp
        title="Add Employee"
        openPopup = {openPopup}
        setOpenPopup = {setOpenPopup}
    >
      <AddEmployeeForm onSubmit={handleAddEmployeeSubmit} data={handleData}/>
    </PopUp>
    
    <div className='addEmployees-table'>
     <DataGrid
      columns={columns}
      rows = {data}
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
    </div>
    </div>
    </>
  )
}

export default AddREditEmployee