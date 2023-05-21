import { useContext } from "react";
import { UserContext } from "./App";

function MessageCard() {
    const user = useContext(UserContext)
    // console.log(user.username)
    return (
        <div>Welcome!</div>
    )
}

export default MessageCard;