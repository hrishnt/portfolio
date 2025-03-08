import "./FormStyles.css"

import React from 'react'

export default function Form() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "641c7355-bbaf-43b9-b56f-3b44447736f1");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text"/>
        <label>Email</label>
        <input type="email"/> 
        <label>Subject</label>
        <input type="text"/>
        <label>Message</label>
        <textarea rows="6" placeholder="Type Your Message Here"/>
        <button className="btn">Submit</button>
        <input type="hidden" name="access_key" value="641c7355-bbaf-43b9-b56f-3b44447736f1"/>
      </form>
      <span>{result}</span>
    </div>
  )
}


