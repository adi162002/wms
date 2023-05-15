import React, { useState } from "react";
import Buttons from "../../Components/Buttons";
import PopUp from "../../Components/PopUp";
import { DataGrid } from "@mui/x-data-grid";
import AddMeterForm from "./AddMeterForm";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import SideBar from "../../Sidebar/SideBar";
import Navbar from "../../Navbar/Navbar";
import { useEffect } from "react";
import axios from "axios";
import { apiLink } from "../../Config";
import "./Meters.css";

function AddREditMeter() {
  const auth = JSON.parse(sessionStorage.getItem("response"));

  const [openPopup, setOpenPopup] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getmeter() {
      try {
        const response = await axios.get(`${apiLink}/meter/all-meter`, {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        });
        console.log(response);
        setData(...data, response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getmeter();
  }, []);
  useEffect(() => {
    async function getmeter() {
      try {
        const response = await axios.get(`${apiLink}/meter/all-meter`, {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        });
        console.log(response);
        setData(...data, response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getmeter();
  }, []);

  const handleEdit = (row) => {
    // Open dialog box with form for editing row data
  };

  const handleDelete = (id) => {
    fetch(`/api/users/${id}`, { method: "DELETE" })
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
      field: "meterName",
      headerName: "Meter Name",
      width: 150,
      editable: true,
      flex: 1,
    },
    {
      field: "crossSecArea",
      headerName: "Cross Sec Area",
      width: 150,
      editable: true,
      flex: 1,
    },
    {
      field: "criticalVolume",
      headerName: "Critical Vol",
      width: 150,
      editable: true,
      flex: 1,
    },
    {
      field: "locationPin",
      headerName: "Location Pin",
      width: 150,
      editable: true,
      flex: 1,
    },
    {
      field: "cityName",
      headerName: "City Name",
      width: 150,
      editable: true,
      flex: 1,
    },
    {
      field: "edit",
      headerName: "Actions",
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
            onClick={() => handleDelete(params.row.id)}
            style={{ marginLeft: 8 }}
          >
            Delete
          </Button>
        </React.Fragment>
      ),
    },
  ];

  function handleData(meterData) {
    setData(meterData);
  }

  const handleAddMeterSubmit = () => {
    setOpenPopup(false);
  };
  return (
    <>
      <Navbar prop={auth} />
      <SideBar role={ auth }>
        <div className="addMeters-container">
          <div className="addMeters">
            <Button
              variant="outlined"
              onClick={() => setOpenPopup(true)}
              style={{ backgroundColor: "white" }}
            >
              Add Meter
            </Button>
          </div>

          <PopUp
            title="Add Meter"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          >
            <AddMeterForm onSubmit={handleAddMeterSubmit} data={handleData} />
          </PopUp>

          <div className="addMeters-table">
            <DataGrid
              columns={columns}
              rows={data}
              getRowId={(row) => row.meterName}
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
  );
}

export default AddREditMeter;
