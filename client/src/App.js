// // import logo from './logo.svg';
// import './App.css';
// import {useState, useEffect} from "react"
// import Header from './Header';
// import ProfilePage from './ProfilePage';
// import Signup from './Signup';
// import Login from './Login';
// import { createContext } from 'react';
// import {Route, Switch} from "react-router-dom"
// import Home from './Home';

// export const UserContext = createContext()

// function App() {
// const [currentUser, setCurrentUser] = useState(null)

// useEffect(() => {
//   fetch("/authenticate_user")
//   .then((res) => {
//     if (res.ok) {
//       res.json().then((user) => {
//         updateUser(user)
//       })
//     }
//   })
// },[])
// console.log(currentUser)
// const updateUser = (user) => setCurrentUser(user)

//   return (
//     <UserContext.Provider value={currentUser} >
//     <div className="App">
//     <Header/>
//         <Switch>
          
//           <Route path="/login">
//             <Login updateUser={updateUser}/>
//           </Route>

//           <Route path="/profile_users/new">
//             <Signup/>
//           </Route>

//           <Route path="/profile_users/:id">
//             <ProfilePage/>
//           </Route>

//           <Route exact path="/">
//             <Home/>
//           </Route>

//         </Switch>
//     </div>
//     </UserContext.Provider>
//   );
// }

// export default App;





import './App.css';
import {useState, useEffect} from "react"
import Header from './Header';
import ProfilePage from './ProfilePage';
import Signup from './Signup';
import Login from './Login';
import {Route, Switch} from "react-router-dom"
import Home from './Home';


function App() {
const [currentUser, setCurrentUser] = useState("")

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
// console.log(currentUser)

const updateUser = (user) => setCurrentUser(user)

  return (
    <div className="App">
    <Header currentUser={currentUser} updateUser={updateUser}/>
        <Switch>
          
          <Route path="/login">
            <Login updateUser={updateUser}/>
          </Route>

          <Route path="/profiles/new">
            <Signup updateUser={updateUser}/>
          </Route>

          <Route path="/profiles/:id">
            <ProfilePage currentUser={currentUser}/>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>

        </Switch>
    </div>
  );
}

export default App;
