import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiLink } from "../../Config";
function CityForm({ onSubmit, data }) {
  const [res, setres] = useState({});
   useEffect(() => {
    async function fetch(){
    await axios
      .get(`${apiLink}/utility/all-utility `,{
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
      
      })
      .then((response) => {
        console.log(response.data)
        setres(response.data);
      })
      .catch((response) => {
        console.log(response.data);
      });
    }
    fetch()
  }, []);
  const [cityData, setCityData] = useState([]);

  const [formValues, setFormValues] = useState({
    cityName: "",
    utilityName: "",

    errorMessage: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formValues.cityName) {
      setFormValues((prevState) => ({
        ...prevState,
        errorMessage: "Please fill in all required fields.",
      }));
      return;
    }
    // setCityData([...cityData, formValues]);
    await axios.post(`${apiLink}/city`, {
      cityName: formValues.cityName,
      utilityName: formValues.utilityName,
    })
    .then(()=>{
      data(prevCityData => [...prevCityData, formValues]);
    onSubmit();

    setFormValues({
      cityName: "",
      utilityName: "",

      errorMessage: "",
    });

    })
    .catch(()=>{
      throw console.error("not possible");
    })
    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cityName">City Name*</label>
        <input
          type="text"
          name="cityName"
          placeholder="city name"
          value={formValues.cityName}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="utilityName">Assign Utility*</label>
        <select
          name="utilityName"
          value={formValues.utilityName}
          onChange={handleChange}
        >
          <option value="">Select utility</option>
          {Object.values(res).map((option) => (
            <option key={option.utilityId} value={option.utilityName}>
              {option.utilityName}
            </option>
          ))}
        </select>

        {/* <label htmlFor="utilityName">Utility Name*</label>
        <input
          type="text"
          name="utilityName"
          placeholder="utility name"
          value={formValues.utilityName}
          onChange={handleChange}
        />
        <br />
        <br /> */}

        <div>
          <button type="submit" onClick={handleSubmit}>
            Add City
          </button>
        </div>
      </form>

      {formValues.errorMessage && <p>{formValues.errorMessage}</p>}
    </>
  );
}

export default CityForm;
