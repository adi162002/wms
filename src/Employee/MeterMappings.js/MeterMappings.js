import React ,{useState, useEffect} from 'react'
import axios from 'axios';
import { apiLink } from '../../Config';
import { Button } from '@mui/material';
import Navbar from '../../Navbar/Navbar';
import SideBar from '../../Sidebar/SideBar';
import PopUp from '../../Components/PopUp';
import { DataGrid } from '@mui/x-data-grid';
import MeterMappingForm from './MeterMappingForm';
function MeterMappings() {
  const auth = JSON.parse(sessionStorage.getItem("response"));

    const [openPopup, setOpenPopup] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {
        async function getmetermapping() {
            try {
                const response = await axios.get(`${apiLink}/water-mappings`, {
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
        getmetermapping();
    }, []);
    const handleEdit = (row) => {
     };
     const handleDelete = async (meterId) => {
    //    try {
    //      await axios.delete(`${apiLink}/meter/${meterId}`);
    //      setData(data.filter((row) => row.meterId !== meterId));
    //    } catch (error) {
    //      console.error(error);
    //    }
     };
    const columns = [
        {
            field: 'sourceName',
            headerName: 'Source Name',
            width: 150,
            editable: true,
            flex: 1,
        },
        {
            field: 'targetName',
            headerName: 'Target Name',
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
                        onClick={() => handleDelete(params.row.meterId)}
                        style={{ marginLeft: 8 }}
                    >
                        Delete
                    </Button>
                </React.Fragment>
            ),
        },
    ]
    function handleData(metermapData) {
        setData(metermapData)
    }
    const handleAddMapSubmit = () => {
        setOpenPopup(false)
    }
    return (
        <>
    <Navbar prop={auth}/>
    <SideBar role={auth}>
        <div className='addMeters-container'>
          <div className='addMeters'>
            <Button
              variant="outlined"
              onClick={() => setOpenPopup(true)}
              style={{ backgroundColor: "white" }}
            >Add Meter Mapping</Button>
          </div>
          <PopUp
            title="Add Meter Mapping"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          >
            <MeterMappingForm onSubmit={handleAddMapSubmit} data={handleData}/>
          </PopUp>
          <div className='addMeters-table'>
              <DataGrid
                columns={columns}
                rows={data}
                getRowId={(row) => row.mappingId}
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
        </SideBar>
    </>
    )
}
export default MeterMappings