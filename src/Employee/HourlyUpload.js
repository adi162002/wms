import React from 'react'
import csvtojson from "csvtojson"
import "./EmployeePage.css"

export default function HourlyUpload() {
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      // Handle case where file is null or undefined
      return;
    }
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = async (e) => {
      const csvData = e.target.result;

      const jsonData = await csvtojson({
        // noheader: true,
        output: "json",
        // headers: ["meterName", "volume", "timeStamp", "percentageLoss",]    


      }).fromString(csvData);
      console.log(jsonData)



      // axios.post('/api/data', jsonData)
      // .then((response) => {
      //   console.log(response);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
    }
  }
  return (
    <div className='hourly-upload-container'>
      <label htmlFor='fileup' className='hourly-update-label'>Upload Meter Reading: </label>
      <input id="fileup" type="file" accept='.csv' onChange={handleFileInputChange} style={{ marginLeft: "10px" }} />
    </div>
  )

}
