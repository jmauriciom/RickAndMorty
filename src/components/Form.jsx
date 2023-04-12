import React, { useState } from "react";

export default function Form () {

  const [userData, setUserdata] = useState({
    email: "",
    password: "",
  })
  
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(errors);
    if(errors.email || errors.password) {
      alert("ERROR")
    } else {
      alert("LOGIN EXITOSO")
    }
  }

  const validation = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    }
    return errors;
  };

  const handleInputChange = (event) => {
    const { name, value} = event.target;
    setUserdata({ ...userData, [name]: value });
    setErrors(validation(userData));
    }
    
  return (
        <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="Email">Email:</label> 
                <input type="text" name="email" value={userData.email} onChange={handleInputChange}/>
                  <span>{errors.email}</span>
              </div>
              <div>
              <label htmlFor="Password">Password:</label>
                <input type="text" name="password" value={userData.password} onChange={handleInputChange}/>
                  <span>{errors.password}</span>
              </div>
              {
                errors.email || errors.password ? <button type="submit" disabled>Submit</button> : <button type="submit">Submit</button>
              }
        </form>
      )
}

