import MessageCard from "./MessageCard";
import { useEffect, useState } from "react";
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
                {c}
            </ul>
            <MessageCard/>
        </div>
    )
}

export default MessageChat;