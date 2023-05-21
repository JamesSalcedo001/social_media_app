import {useState} from "react"

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

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
                })
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    }


    return (
        <div>
            <form onSubmit={submit}>
                <label htmlFor="username">Username</label>
                <input type="text" value={username} onChange={changeHandler} name=""/>
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={changeHandler} name=""/>
                <input type="submit" value="Login!"/>
            </form>
            {errors ? <div>{errors}</div> : null}
        </div>
    )
}

export default Login;