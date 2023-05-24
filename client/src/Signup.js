import {useState} from "react"
import { useHistory } from "react-router-dom"

function Signup({updateUser}) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        avatar: ""
    })
    let history = useHistory();


    const [errors, setErrors] = useState([])
    const {username, password, avatar} = formData

    function changeHandler(e) {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }
 
    function submit(e) {
        e.preventDefault()
        const user = {
            username,
            password,
            avatar
        }

        fetch("/profile_users", {
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

                <label htmlFor="avatar">Avatar</label>
                <input className="formInput" type="text" value={avatar} onChange={changeHandler} name="avatar"/>
                
                <input className="login" type="submit" value="Sign Up!"/>
            </form>
            {errors ? <div>{errors}</div> : null}
        </div>
    )
}

export default Signup;