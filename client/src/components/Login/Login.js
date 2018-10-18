import React from "react";
import "./Login.css";


const Login = () => (
	<div className= "login">
    <h22>Login Form</h22>
    <form action="/action_page.php">
    <div class="container">
    
<label for="username">User Name:</label>
      <input type="text" id="username" name="username"></input>

      <label for="password">Password:</label>
      <input type="text" id="password" name="password"></input>

<button className = "loginbutton" type="loginbutton">Login</button>
<br/>
       <button type="button" class="cancelbtn">Cancel</button>

</div>
    </form>
    </div>
 
    
    

);


export default Login;


