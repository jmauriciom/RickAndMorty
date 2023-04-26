import React, { useState } from "react";
import Validation from "./Validation";
import styles from './form.module.css'


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
    <div className={styles.loginContainer}>
        <form onSubmit={handleSubmit}>
            <h2>Iniciar Sesión</h2>
              <label htmlFor="Email">Email:</label> 
                <input type="text" name="email" value={userData.email} placeholder="Email@email.com" onChange={handleInputChange}/>
                  <div>
                  <span>{errors.email}</span>
                  </div>
                <label htmlFor="Password">Contraseña:</label>
                <input type="password" name="password" value={userData.password} placeholder="Contraseña" onChange={handleInputChange}/>
                  <div>
                  <span>{errors.password}</span>
                  </div>
              {
                errors.email || errors.password ? <button className={styles.btLogin} type="submit" disabled>Continuar</button> : <button className={styles.btLogin}type="submit">Submit</button>
              }
        </form>
        </div>
      )
}

//haceme un login en javascript?
