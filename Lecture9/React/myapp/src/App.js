import './App.css';
import {useState} from "react";
import UserList from './components/userList/userList';
import Login from './components/Login/Login';


function App(){


  const [isLoggedIn , changeIsLoggedIn] = useState(false);
  
  console.log("inside app component");

  function onLogin(){
    changeIsLoggedIn(true);
  }

  function onLogout(){
    changeIsLoggedIn(false);
  }
    
  return <div>


    {
          (isLoggedIn) ? <UserList onLogout={onLogout} /> : <Login onLogin={onLogin} />
         
    }

  </div>
}

export default App;