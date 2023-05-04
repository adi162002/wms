import React, {useState} from 'react'
import { Button } from '@mui/material';

function EditEmployeeProfile({onSubmit}) {
    // const [profileData, setProfileData] = useState([]);
    const[formValues, setFormValues] = useState({
        employeeEmail: "bramham@gmail.com",
        employeeRole: "Employee",
        employeeName:"Bramham",
        employeeAddress: "Koramangala, Bengaluru",
        errorMessage: "",
        
    })

    function handleChange(e) {
      const { name, value } = e.target;
      setFormValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      
    }

    function handleSubmit(e) {
      e.preventDefault();
      if (!formValues.employeeName || !formValues.employeeAddress) {
        setFormValues((prevState) => ({
          ...prevState,
          errorMessage: "Please fill in all required fields."
        }));
        return;
      }
      setFormValues({
        employeeEmail: "",
        employeeRole: "",
        employeeName: "",
        employeeAddress: "",
        errorMessage: "",
      });
      
      onSubmit()
      
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="employeeName" >Employee Name: </label>
        <input 
        type="text"
        name="employeeName"
        value={formValues.employeeName}
        onChange={handleChange}
        /><br/><br/>

        <label htmlFor="employeeEmail" >Employee Email: </label>
        <label>{formValues.employeeEmail}</label><br/><br/>

        <label htmlFor="employeeRole">Role: </label>
        <label>{formValues.employeeRole}</label><br/><br/>

        <label htmlFor="employeeAddress">Address: </label><br/>
        <textarea
          type="text"
          name="employeeAddress"
          value={formValues.employeeAddress}
          onChange={handleChange}
        /><br/><br/>


        <Button type="submit" style={{marginLeft:"120px"}}>Submit</Button>
      </form>

      {formValues.errorMessage && <p>{formValues.errorMessage}</p>}
    </div>
  )
}

export default EditEmployeeProfile