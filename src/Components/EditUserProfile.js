import React, {useState} from 'react'
import { Button } from '@mui/material';

function EditUserProfile({onSubmit}) {
    //const [userProfileData, setUserProfileData] = useState([])
    const[formValues, setFormValues] = useState({
        userEmail: "bramham@gmail.com",
        userRole: "User",
        userName:"",
        userAddress: "",
        assignCity: "Bengaluru",
        assignMeterName: "bramham",
        errorMessage: "",

    })

    function handleChange(e) {
      const { name, value } = e.target;
      setFormValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      
    }
    function handleSubmit(e){
        e.preventDefault()
        if (!formValues.userName || !formValues.userAddress) {
          setFormValues((prevState) => ({
            ...prevState,
            errorMessage: "Please fill in all required fields."
          }));
          return;
        }
       
        
        setFormValues({
          userId: "",
          userEmail: "",
          userRole: "",
          userName:"",
          userAddress: "",
          assignCity: "",
          assignMeterName: "",
          errorMessage: "",

        })
        onSubmit()
        
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="userName" >User Name*: </label>
            <input 
            type="text"
            name="userName"
            value={formValues.userName}
            onChange={handleChange}
            /><br/><br/>

            <label htmlFor="userEmail" >User Email*: </label>
            <label>{formValues.userEmail}</label><br/><br/>

            <label htmlFor="userRole">User Role*:</label>
            <label>{formValues.userRole}</label><br/><br/>

            <label htmlFor="assignCity" >Assign City*: </label>
            <label>{formValues.assignCity}</label><br/><br/>

            <label htmlFor="assignMeterName" >Assign Meter Name: </label>
            <label>{formValues.assignMeterName}</label><br/><br/>

        <label htmlFor="userAddress">Address*: </label><br/>
        <textarea
          type="text"
          name="userAddress"
          value={formValues.userAddress}
          onChange={handleChange}
        /><br/><br/>

        <Button type="submit" style={{marginLeft:"120px"}}>Submit</Button>
    </form>
     {formValues.errorMessage && <p>{formValues.errorMessage}</p>}
     </>
  )
}

export default EditUserProfile