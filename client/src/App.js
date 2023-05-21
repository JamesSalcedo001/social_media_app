import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"

function App() {
const [profileUser, setProfileUser] = useState([])

useEffect(() => {
  fetch(`profile_users/1`)
  .then((res) => res.json())
  .then((data) => setProfileUser(data))
},[])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome {profileUser.username}!</h1>
        <img className="image" src={profileUser.avatar} alt="avatar"/>
      </header>
    </div>
  );
}

export default App;
