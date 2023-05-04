import axios from "axios";
import React, { useState, useEffect } from "react";
import { apiLink } from "../../Config";

function AddUserForm({ onSubmit, data }) {
  const [userData, setUserData] = useState([]);
  const [formValues, setFormValues] = useState({
    userEmail: "",
    roleName: "",
    userName: "",
    userAddress: "",
    cityName: "",
    meterName: "",
  });
  const [city, setCity] = useState([]);
  const [meter, setMeter] = useState([]);
  useEffect(() => {
    async function fetch() {
      await axios
        .get(`${apiLink}/city/all-city `, {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        })
        .then((response) => {
          console.log(response.data);
          setCity(response.data);
        })
        .catch((response) => {
          console.log(response.data);
        });
    }
    async function fetchmeter() {
      await axios
        .get(`${apiLink}/meter/all-meter `, {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        })
        .then((response) => {
          console.log(response.data);
          setMeter(response.data);
        })
        .catch((response) => {
          console.log(response.data);
        });
    }

    fetch();
    fetchmeter();
  }, []);
  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (
      !formValues.userEmail ||
      !formValues.roleName ||
      !formValues.userName ||
      !formValues.userAddress ||
      !formValues.cityName ||
      !formValues.meterName
    ) {
      setFormValues((prevState) => ({
        ...prevState,
        errorMessage: "Please fill in all required fields.",
      }));
      return;
    }

    setUserData([...userData, formValues]);

    console.log(formValues);
    await axios.post(`${apiLink}/users`, formValues).then(() => {
      data((prevUtilityData) => [...prevUtilityData, formValues]);
      onSubmit();
      setFormValues({
        userEmail: "",
        roleName: "",
        userName: "",
        userAddress: "",
        cityName: "",
        meterName: "",
      });
    })
    .catch(()=>{
      throw console.error("not possible");

    })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">User Name*: </label>
        <input
          type="text"
          name="userName"
          value={formValues.userName}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="userEmail">User Email*: </label>
        <input
          type="email"
          name="userEmail"
          value={formValues.userEmail}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="userRole">User Role*:</label>
        <select
          name="roleName"
          value={formValues.roleName}
          onChange={handleChange}
        >
          <option value="">--Select--</option>
          <option value="CUSTOMER">CUSTOMER</option>
        </select>
        <br />
        <br />
        <label htmlFor="assignCity">Assign City*: </label>
        <select
          name="cityName"
          value={formValues.cityName}
          onChange={handleChange}
        >
          <option value="">Select a city</option>
          {city.map((option) => (
            <option key={option.cityId} value={option.cityName}>
              {option.cityName}
            </option>
          ))}
        </select>
        {/* <input
          type="text"
          name="assignCity"
          value={formValues.assignCity}
          onChange={handleChange}
        /> */}
        <br />
        <br />
        <label htmlFor="assignMeter">Assign Meter Name*: </label>
        <select
          name="meterName"
          value={formValues.meterName}
          onChange={handleChange}
        >
          <option value="">Select a meter</option>
          {meter.map((option) => (
            <option key={option.meterId} value={option.meterName}>
              {option.meterName}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="userAddress">Address*: </label>
        <br />
        <textarea
          type="text"
          name="userAddress"
          value={formValues.userAddress}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      {formValues.errorMessage && <p>{formValues.errorMessage}</p>}
    </>
  );
}

export default AddUserForm;
