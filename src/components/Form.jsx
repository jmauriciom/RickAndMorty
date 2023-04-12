import React, { useState } from "react";
import Validation from "./Validation";


export default function Form ({login}) {

  const [userData, setUserdata] = useState({
    email: "",
    password: "",
  })
  
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData)
  }


  const handleInputChange = (event) => {
    const { name, value} = event.target;
    setUserdata({ ...userData, [name]: value });
    Validation({ ...userData, [name]: value }, errors, setErrors)
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

