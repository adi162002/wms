import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiLink } from "../Config";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { color } from "@mui/system";
import { useLocation } from "react-router-dom";

function AdminProfile() {
  const location = useLocation();
  const x = location.state.resp.userId;
  console.log(x);
  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userAddress, setAddress] = useState("");
  const [cityName, setCity] = useState("");
  const [meterName, setMeter] = useState("");
  const [roleName, setRole] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  useEffect(() => {
    // Fetch the user data from the backend when the component mounts
    axios
      .get(`${apiLink}/users/${x}`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((response) => {
        console.log(response);
        setName(response.data.userName);
        setEmail(response.data.userEmail);
        setCity(response.data.cityName);
        setMeter(response.data.meterName);
        setRole(response.data.roleName);
        setAddress(response.data.userAddress);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleedit() {
    setIsEditMode(true);
  }
  function handlesave() {
    setIsEditMode(false);
    axios
      .put({
        userName,
        userEmail,
        userAddress,
        cityName,
        meterName,
        roleName,
      })
      .then((response) => {
        console.log(response.data);
        // handle the successful response data
      })
      .catch((error) => {
        console.log(error);
        // handle the error
      });
  }

  return (
    <>
      <section
        style={{ backgroundColor: "#eee", width: "100%", marginBottom: "20px" }}
      >
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={"../../dp.jpg"}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <p className="text-muted mb-1">{userName}</p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {!isEditMode ? (
                          userName
                        ) : (
                          <input
                            value={userName}
                            onChange={(e) => setName(e.target.value)}
                          ></input>
                        )}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {!isEditMode ? (
                          userEmail
                        ) : (
                          <input
                            value={userEmail}
                            onChange={(e) => setEmail(e.target.value)}
                          ></input>
                        )}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Role</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {!isEditMode ? (
                          roleName
                        ) : (
                          <input
                            style={{ outline: "none", border: "none" }}
                            value={roleName}
                            onChange={(e) => setRole(e.target.value)}
                          ></input>
                        )}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  =
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {!isEditMode ? (
                          userAddress
                        ) : (
                          <input
                            value={userAddress}
                            onChange={(e) => setAddress(e.target.value)}
                          ></input>
                        )}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>City</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {!isEditMode ? (
                          cityName
                        ) : (
                          <input
                            value={cityName}
                            onChange={(e) => setCity(e.target.value)}
                          ></input>
                        )}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Meter</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {!isEditMode ? (
                          meterName
                        ) : (
                          <input
                            value={meterName}
                            onChange={(e) => setMeter(e.target.value)}
                          ></input>
                        )}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBBtn color="primary" className="me-2" onClick={handleedit}>
                    Edit
                  </MDBBtn>
                  <MDBBtn color="primary" onClick={handlesave}>
                    Save
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default AdminProfile;
