// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import Header from './Header';
import ProfilePage from './ProfilePage';
import Signup from './Signup';
import Login from './Login';
import { createContext } from 'react';
import {Route, Switch} from "react-router-dom"

export const UserContext = createContext()

function App() {
const [currentUser, setCurrentUser] = useState(null)

useEffect(() => {
  fetch("/authenticate_user")
  .then((res) => {
    if (res.ok) {
      res.json().then((user) => {
        updateUser(user)
      })
    }
  })
},[])

const updateUser = (user) => setCurrentUser(user)

  return (
    <UserContext.Provider value={currentUser}>
    <div className="App">
    <Header/>
        <Switch>
          
          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/signup">
            <Signup/>
          </Route>

          <Route path="/profile_users/:id">
            <ProfilePage/>
          </Route>

        </Switch>
    </div>
    </UserContext.Provider>
  );
}

export default App;



    /* <header className="App-header"> */
        /* <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome {profileUser.username}!</h1>
        <img className="image" src={profileUser.avatar} alt="avatar"/> */
      /* </header> */