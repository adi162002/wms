import React, {useState} from 'react'
import { Button } from '@mui/material';

function EditAdminProfile({onSubmit}) {
    const[formValues, setFormValues] = useState({
        adminEmail: "bramham@gmail.com",
        adminRole: "Admin",
        adminName:"Bramham",
        adminAddress: "Koramangala, Bengaluru",
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
      if (!formValues.adminName || !formValues.adminAddress) {
        setFormValues((prevState) => ({
          ...prevState,
          errorMessage: "Please fill in all required fields."
        }));
        return;
      }
      setFormValues({
        adminEmail: "",
        adminRole: "",
        adminName: "",
        adminAddress: "",
        errorMessage: "",
      });
      
      onSubmit()
      
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="adminName" >Admin Name: </label>
      <input 
      type="text"
      name="adminName"
      value={formValues.adminName}
      onChange={handleChange}
      /><br/><br/>

      <label htmlFor="adminEmail" >Admin Email: </label>
      <label>{formValues.adminEmail}</label><br/><br/>

      <label htmlFor="adminRole">Role: </label>
      <label>{formValues.adminRole}</label><br/><br/>     

      <label htmlFor="adminAddress">Address: </label><br/>
      <textarea
        type="text"
        name="adminAddress"
        value={formValues.adminAddress}
        onChange={handleChange}
      /><br/><br/>

      <Button type="submit" style={{marginLeft:"120px"}}>Submit</Button>
    </form>

    {formValues.errorMessage && <p>{formValues.errorMessage}</p>}
  </div>
  )
}

export default EditAdminProfile