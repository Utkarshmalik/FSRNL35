import { useState } from "react";
import "./Login.css";

function Login(props){

       const [userName, changeUserName] = useState(""); 
       const [password, changePassword] = useState("");
  

    function onLoginClick(e){
        e.preventDefault();

       const userDetails={
            userName,
            password
        }
        console.log("Calling backend API with details: ",userDetails)

        setTimeout(()=>{
            const isValidCredentials=true;
            if(isValidCredentials){
            props.onLogin();
            }
        },2000);
        
    }

    function onUserNameChange(e){
        changeUserName(e.target.value);
    }

    function onPasswordChange(e){
        changePassword(e.target.value);
    }

    return <div className="loginPage">
        <h1> Login Page </h1>

        <div className="loginFormBox">
            <form className="loginForm">
                <div>
                       <label id="userName"> UserName </label>
                      <input onChange={onUserNameChange} value={userName} type="text" placeholder="Username" />
                </div>                    <div>
                       <label id="password"> Password </label>
                      <input onChange={onPasswordChange} value={password} type="password" placeholder="Password" />
                </div>

                <input onClick={onLoginClick} type="submit" value="Login" /> 
            </form>
        </div>
    </div>

}


export default Login;