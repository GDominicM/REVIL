import React from "react";
import "./contact.css"
const Contact = () => {
  return (
    <div className = "Contact">
      <h2> Contact Us </h2>
      <form>
        <label> Name </label>
        <input type="text" required />
        <label> Email </label>
        <input type="text" required />
        <label> Message </label>
        <textarea type="text" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;