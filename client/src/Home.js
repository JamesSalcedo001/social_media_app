import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div>
            <NavLink to="/login">
                <button>Login!</button>
            </NavLink>
            <NavLink to="/profile_users/new">
                <button>Signup!</button>
            </NavLink>
        </div>
    )
}

export default Home;