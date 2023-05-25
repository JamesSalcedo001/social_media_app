import MessageChat from "./MessageChat";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

function ProfilePage({currentUser}) {
    // const params = useParams()
    // const {id} = params

    // useEffect(() => {
    //     fetch(`/profile_users/${id}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [])


    return (
        <div id="profile">
            <img className="image" src={currentUser.avatar} alt="user avatar"/>
            <h1 id="username">Hey {currentUser.username}!</h1>
            <MessageChat/>
        </div>
    )
}

export default ProfilePage;