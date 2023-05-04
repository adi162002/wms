import axios from "axios";
import React, { useState,useEffect } from "react";
import { apiLink } from "../../Config";

function UtilityForm({ onSubmit, data }) {
  
  
  const [formValues, setFormValues] = useState({
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

    if (!formValues.utilityName) {
      setFormValues((prevState) => ({
        ...prevState,
        errorMessage: "Please fill in all required fields.",
      }));
      return;
    }

    // setUtilityData([...utilityData, formValues]);
    await axios
      .post(`${apiLink}/utility`, { utilityName: formValues.utilityName })
      .then(() => {
        data((preUtilityData) => [...preUtilityData, formValues]);

        onSubmit();
        setFormValues({
          utilityName: "",

          errorMessage: "",
        });
      })
      .catch(()=>{
             throw console.error("not possible");
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="utilityName" className="label">
          Utility Name*
        </label>
        <input
          name="utilityName"
          value={formValues.utilityName}
          onChange={handleChange}
        ></input>
        <br />
        <br />

        <div>
          <button type="submit" className="button">
            Add Utility
          </button>
        </div>

        {formValues.errorMessage && (
          <p className="error">{formValues.errorMessage}</p>
        )}
      </form>
      <style jsx>{`
        .form {
          display: flex;
          flex-direction: column;
          margin-top: 2rem;
          max-width: 30rem;
        }

        .label {
          font-weight: bold;
          margin-top: 1rem;
        }

        .input,
        .select,
        .textarea {
          padding: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 0.25rem;
          font-size: 1rem;
          font-family: inherit;
          width: 100%;
        }

        .textarea {
          height: 6rem;
        }

        .button {
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 0.25rem;
          padding: 0.5rem;
          cursor: pointer;
          font-size: 1rem;
          margin-top: 1rem;
        }

        .button:hover {
          background-color: #0069d9;
        }

        .error {
          color: red;
          margin-top: 1rem;
        }
      `}</style>
    </>
  );
}

export default UtilityForm;
