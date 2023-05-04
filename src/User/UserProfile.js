import React, { useState } from 'react'
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
import PopUp from '../Components/PopUp';
import EditUserProfile from '../Components/EditUserProfile';

function UserProfile() {
  const[openPopup, setOpenPopup] = useState(false)

  function handleEditProfile(){
    setOpenPopup(true)
  }

  function handlePopUpClose(){
    setOpenPopup(false)
  }
  return (
    <>
    <section style={{ backgroundColor: '#D2EBC7', width: "100%", minHeight:"100vh"}}>
      <MDBContainer className="py-5">
        

        <MDBRow style={{marginTop:"30px"}}>
          <MDBCol lg="4" md="6" sm="12">
            <MDBCard className="mb-4" style={{height:'auto', backgroundColor:"powderblue"}}>
              <MDBCardBody className="text-center" style={{marginTop:"50px"}}>
                <MDBCardImage
                src={"../../dp.jpg"}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '200px', height:"200px" }}
                  fluid />
                <p className="text-muted mb-1" style={{marginTop:"8px", fontSize:"20px"}}>Bramham</p>
               
                <div className="d-flex justify-content-center mb-2" style={{marginTop:"45px"}}>                
                  <MDBBtn outline className="ms-1" style={{backgroundColor:"beige", marginBottom:"25px"}} onClick={handleEditProfile}>Edit Profile</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>          
          </MDBCol>
          
          <MDBCol lg="8" md="6" sm="12">
            <MDBCard className="mb-4" style={{height:"auto", backgroundColor:"cornsilk"}}>
              <MDBCardBody style={{marginTop:"40px"}}>
                <MDBRow style={{padding:"15px", fontSize:"20px"}}>
                  <MDBCol sm="3">
                    <MDBCardText>Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bramham</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow style={{padding:"15px", fontSize:"20px"}}>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">bramham@gmail.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow style={{padding:"15px", fontSize:"20px"}}>
                  <MDBCol sm="3">
                    <MDBCardText>Role</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">User</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow style={{padding:"15px", fontSize:"20px"}}>
                  <MDBCol sm="3">
                    <MDBCardText>Assigned City</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bengaluru</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow style={{padding:"15px", fontSize:"20px"}}>
                  <MDBCol sm="3">
                    <MDBCardText>Assigned Meter Id</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">101</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow style={{padding:"15px", fontSize:"20px", marginBottom:"50px"}}>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Koramangala, Bengaluru</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <PopUp title="Edit Profile" openPopup={openPopup} setOpenPopup={setOpenPopup}>
      <EditUserProfile onSubmit={handlePopUpClose}/>
    </PopUp>
    </>
  )
}

export default UserProfile