import { NavLink } from "react-router-dom";
// import logo from './logo.svg';

function Home() {
    return (
        <div id="home">
                <img className="App-logo" src={"https://cdn-icons-png.flaticon.com/512/6635/6635373.png"} alt="moon"/>
            <NavLink to="/login">
                <button className="home-button">Login!</button>
            </NavLink>
            <NavLink to="/profile_userss/new">
                <button className="home-button">Signup!</button>
            </NavLink>

        </div>
    )
}

export default Home;