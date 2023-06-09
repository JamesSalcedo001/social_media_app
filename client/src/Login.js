import {useState} from "react"
import { useHistory } from "react-router-dom"

function Login({updateUser}) {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    let history = useHistory();


    const [errors, setErrors] = useState([])
    const {username, password} = formData

    function changeHandler(e) {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }
 
    function submit(e) {
        e.preventDefault()
        const user = {
            username,
            password
        }

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if (res.ok) {
                res.json().then(user => {
                    updateUser(user)
                    history.push(`/profiles/${user.id}`)
                })
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    }


    return (
        <div>
            <form className="form" onSubmit={submit}>
                <label htmlFor="username">Username</label>
                <input className="formInput" type="text" value={username} onChange={changeHandler} name="username"/>

                <label htmlFor="password">Password</label>
                <input className="formInput" type="password" value={password} onChange={changeHandler} name="password"/>

                <input className="login" type="submit" value="Login!"/>
            </form>
            {errors ? <div>{errors}</div> : null}
        </div>
    )
}

export default Login;