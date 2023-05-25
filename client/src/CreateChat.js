import { useState } from "react";

function CreateChat() {
    const [formData, setFormData] = useState({
        title: "",
        image: ""
    })

    const {title, image} = formData

    function changeHandler(e) {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    function submit(e) {
        e.preventDefault()
        const chat = {
            title,
            image
        }
        fetch("/chats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chat)
        })
        .then((res) => res.json())
        .then(data => {
            setFormData(data)
        })
    }

  

    console.log(formData)

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name="title" onChange={changeHandler} value={title}/>
                <input type="text" name="image" onChange={changeHandler} value={image}/>
                <input type="submit" value="New Chat!"/>
            </form>
        </div>
    )
}

export default CreateChat;