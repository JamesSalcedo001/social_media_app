import { useHistory } from "react-router-dom";

function Header({currentUser, updateUser}) {
    const history = useHistory()

    function logout() {
        fetch(`/logout`, {
            method: "DELETE"
        })
        updateUser("")
        history.push("/")
    }

    return (
        <div id="headerSection">
            {currentUser ? <button className="formInput" onClick={logout}>Logout</button> : null}
        </div>
    )
}

export default Header;