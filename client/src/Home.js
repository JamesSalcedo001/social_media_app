import { NavLink } from "react-router-dom";
// import logo from './logo.svg';

function Home() {
    return (
        <div id="home">
            <NavLink to="/login">
                <button className="home-button">Login!</button>
            </NavLink>
            <NavLink to="/profile_users/new">
                <button className="home-button">Signup!</button>
            </NavLink>
            <img className="App-logo" src={"https://cdn-icons-png.flaticon.com/512/6635/6635373.png"}/>

        </div>
    )
}

export default Home;