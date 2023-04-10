import React, { useState } from "react";
import validation from "./validation";


export default function Form () {

  const [userData, setUserdata] = useState({
    email: "",
    password: "",
  })
  
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("LOGIN EXITOSO")
  }

  const handleInputChange = (event) => {
    const { name, value} = event.target;
    setUserdata({ ...userData, [name]: value });
    validation({ ...userData, [name]: value }, setErrors ,errors )
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
              <button type="submit">Submit</button> 
        </form>
      )
}

