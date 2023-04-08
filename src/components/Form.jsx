import React from "react";

export default function Form () {
  return <div>
        <form> 
              <label>Email:</label> 
              <input type="email" name="email"/>
  
              <label>Password:</label>
              <input type="password" name="password"/>

              <button type="submit">Submit</button> 
        </form>
    </div>
}