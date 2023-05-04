import React, { useState } from 'react'
//import PopUp from "./PopUp"
import { Link } from "react-router-dom"
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';
//import EditEmployeeProfile from './EditEmployeeProfile';
import { IconButton } from '@mui/material';

function EmployeeProfile() {
  //const [openPopup, setOpenPopup] = useState(false)
  const [name, setName] = useState("Bramham");
  const [address, setAddress] = useState("Koramangala, Bengaluru");
  const [nameEditable, setNameEditable] = useState(false)
  const [addressEditable, setAddressEditable] = useState(false)
  function handleEditClick() {
    setNameEditable(true);
    setAddressEditable(true);
  }

  // function handleProfileEditSubmit() {

  // }

  function handleSaveClick() {
    // axios.post('/employee/profile', {
    //   name,
    //   address,
    // }, {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then((response) => {
    //     // Update the profile data with the returned data
    //     setName(response.data.name);
    //     setAddress(response.data.address);

    //     // Set the editable state variables to false
    //     setNameEditable(false);
    //     setAddressEditable(false);
    //   })
    //   .catch((error) => {
    //     console.error('Error updating profile:', error);
    //   });
    setNameEditable(false);
    setAddressEditable(false);
    console.log(name, address)
  }


  return (
    <div style={{ backgroundColor: '#D2EBC7' }}>
      <div className="profile-back">
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Home">
            <IconButton
              component={Link}
              to="/employee"
              sx={{ p: 0 }}
            >
              <Avatar alt="Bramham" style={{ height: "auto", width: "60px", marginRight: "15px", marginTop: "10px" }} src={"../../home.png"} />
            </IconButton>
          </Tooltip>
        </Box>
      </div>
      <section style={{ width: "100%", minHeight: "100vh" }}>
        <MDBContainer className="py-5">
          <MDBRow style={{ marginTop: "30px" }}>
            <MDBCol lg="4" md="6" sm="12">
              <MDBCard className="mb-4" style={{ height: 'auto', backgroundColor: "powderblue" }}>
                <MDBCardBody className="text-center" style={{ marginTop: "50px" }}>
                  <MDBCardImage
                    src={"../../dp.jpg"}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '200px', height: "200px" }}
                    fluid />
                  <p className="text-muted mb-1" style={{ marginTop: "8px", fontSize: "20px" }}>Bramham</p>

                  <div className="d-flex justify-content-center mb-2" style={{ marginTop: "45px" }}>
                    <MDBBtn outline className="ms-1" style={{ backgroundColor: "beige" }} onClick={handleEditClick}>Edit Profile</MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="8" md="6" sm="12">
              <MDBCard className="mb-4" style={{ height: "auto", backgroundColor: "cornsilk" }}>
                <MDBCardBody style={{ marginTop: "40px" }}>
                  <MDBRow style={{ padding: "15px", fontSize: "20px" }}>
                    <MDBCol sm="3">
                      <MDBCardText>Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      {/* <MDBCardText className="text-muted">Bramham</MDBCardText> */}
                      {nameEditable ? (
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                      ) : (
                        <MDBCardText className="text-muted">{name}</MDBCardText>
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow style={{ padding: "15px", fontSize: "20px" }}>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">bramham@gmail.com</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow style={{ padding: "15px", fontSize: "20px" }}>
                    <MDBCol sm="3">
                      <MDBCardText>Role</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Employee</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow style={{ padding: "15px", fontSize: "20px", marginBottom: "60px" }}>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      {/* <MDBCardText className="text-muted">Koramangala, Bengaluru</MDBCardText> */}
                      <MDBCol sm="9">
                        {addressEditable ? (
                          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                        ) : (
                          <MDBCardText className="text-muted">{address}</MDBCardText>
                        )}
                      </MDBCol>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
                <div>
                <MDBBtn outline className="ms-1" style={{ backgroundColor: "beige" }} onClick={handleSaveClick}>Save</MDBBtn>
                </div>
              </MDBCard>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* <PopUp title="Edit Profile" openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <EditEmployeeProfile onSubmit={handleProfileEditSubmit} />
      </PopUp> */}
    </div>
  )
}

export default EmployeeProfile