import React from "react";
import "./AccountDetails.css";


const AccountDetails = (props) => (
  
	<div className={props.isLoggedIn ? "login" : "hide"}>
      <h2>Your Account Details</h2>
      <form action="/action_page.php">
        <div class="container">
          <label for="username">Your Username:</label>
          <textarea type="text" id="username" name="username">{props.userName}</textarea>
          <label for="avatar">Link An Image For Your Avatar</label>
          <textarea type="text" id="avatar" name="avatar">{props.userAvatar}</textarea>
          <button className="loginbutton" onClick={props.createUser}>Update Account Details</button>
        </div>
      </form>
    </div>
);


export default AccountDetails;


