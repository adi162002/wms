import React, { useState } from "react";

function ContactForm() {
  const [utilityName, setUtilityName] = useState("");
  const [utilityAddress, setUtilityAddress] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {

    event.preventDefault();
    
    if (!utilityName || !utilityAddress || !description || !email) {
      setErrorMessage('Please fill in all required fields.');
    } else {
        console.log('Form data:', {
        utilityName,
        utilityAddress,
        description,
        email,
        name,
        subject,
      });
     
      setUtilityName('');
      setUtilityAddress('');
      setDescription('');
      setEmail('');
      setName('');
      setSubject('');
      setErrorMessage('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="utilityName">Name of Utility *</label>
        <input
          type="text"
          name="utilityName"
          value={utilityName}
          onChange={(e) => setUtilityName(e.target.value)}
        />
      </div><br/>

      <div>
        <label htmlFor="utilityAddress">Address of Utility *</label>
        <input
          type="text"
          name="utilityAddress"
          value={utilityAddress}
          onChange={(e) => setUtilityAddress(e.target.value)}
        />
      </div><br/>

      <div>
        <label htmlFor="subject">Subject (optional)</label>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div><br/>

      <div>
        <label htmlFor="description">Description *</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div><br/>

      <div>
        <label htmlFor="name">Name (optional)</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div><br/>

      <div>
        <label htmlFor="email">Email Id *</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div><br/><br/>
        
     
      <div>
        <button type="submit" >Submit</button>
      </div>

      {errorMessage && <p>{errorMessage}</p>}

    </form>
  );
}

export default ContactForm;
