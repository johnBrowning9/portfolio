import React, { FormEvent, useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e:FormEvent) => { // React.FormEvent<HTMLInputElement>
    e.preventDefault();
    setStatus("Sending...");
    const name = (document.getElementById('name') as HTMLInputElement);
    const email = (document.getElementById('email') as HTMLInputElement);
    const message = (document.getElementById('message') as HTMLInputElement);
    //const { name, email, message } = e.target.elements
    
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        
        top: '140px',
        width: '72%',
        marginLeft: '10vw',
        minWidth: '200px'
        }}
    >
      <div style={{padding:'8px'}}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required style={{margin:'10px'}}/>
      </div>
      <div style={{padding:'8px'}}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required style={{margin:'10px'}}/>
      </div>
      <div style={{padding:'8px'}}>
        <label htmlFor="message" style={{display:'block'}}>Message:</label>
        <textarea id="message" required style={{margin:'10px', height:'200px', width:'100%'}}/>
      </div>
      <button type="submit" style={{placeSelf:'center', width:'150px'}}>{status}</button>
    </form>
  );
};

export default ContactForm;