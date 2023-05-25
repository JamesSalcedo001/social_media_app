import MessageCard from "./MessageCard";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function MessageChat() {
    const [chats, setChats] = useState([])

    useEffect(() => {
        fetch("/chats")
        .then(res => res.json())
        .then(data => setChats(data))
    },[])
    const c = chats.map((chat) => (
    <li className="chatCards" key={chat.id}>
        <h1>{chat.title}</h1>
        <img className="chatImage" src={chat.image}/>
    </li>))
    return (
        <div>
            <ul>
            {/* <Navlink to=""> */}
                {c}
            {/* </Navlink> */}
            </ul>
            <MessageCard/>
        </div>
    )
}

export default MessageChat;