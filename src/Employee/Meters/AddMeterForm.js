import axios from "axios";
import React, { useState, useEffect } from "react";
import { apiLink } from "../../Config";

function AddMeterForm({ onSubmit, data }) {
  const [userData, setUserData] = useState([]);
  const [formValues, setFormValues] = useState({
    meterName: "",
    crossSecArea: "",
    criticalVolume: "",
    locationPin: "",
    cityName: "",
  });
  const [options, setOptions] = useState([]);
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
          setOptions(response.data);
        })
        .catch((response) => {
          console.log(response.data);
        });
    }
    fetch();
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
      !formValues.meterName ||
      !formValues.crossSecArea ||
      !formValues.criticalVolume ||
      !formValues.locationPin ||
      !formValues.cityName
    ) {
      setFormValues((prevState) => ({
        ...prevState,
        errorMessage: "Please fill in all required fields.",
      }));
      return;
    }

    // setUserData([...userData, formValues]);
   
    await axios.post(`${apiLink}/meter`,formValues)
    .then(()=>{
      data((prevUtilityData) => [...prevUtilityData, formValues]);
      onSubmit();
      setFormValues({
        meterName: "",
        crossSecArea: "",
        criticalVoluume: "",
        locationPin: "",
        cityName: "",
      });

    })
    .catch(()=>{
      throw console.error("not possible");

    })
   
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="meterName">Meter Name*: </label>
        <input
          type="text"
          name="meterName"
          value={formValues.meterName}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="crossSecArea">Meter Cross Sec Area*: </label>
        <input
          type="number"
          name="crossSecArea"
          value={formValues.crossSecArea}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="criticalVolume">Critical Volume*: </label>
        <input
          type="number"
          name="criticalVolume"
          value={formValues.criticalVolume}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="locationPin">Location Pin*: </label>
        <input
          type="number"
          name="locationPin"
          value={formValues.locationPin}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="cityName">City Name*: </label>
        <select
          name="cityName"
          value={formValues.cityName}
          onChange={handleChange}
        >
          <option value="">Select a city</option>
          {Object.values(options).map((option) => (
            <option key={option.id} value={option.id}>
              {option.cityName}
            </option>
          ))}
        </select>
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      {formValues.errorMessage && <p>{formValues.errorMessage}</p>}
    </>
  );
}

export default AddMeterForm;
