import MessageChat from "./MessageChat";

function ProfilePage({currentUser}) {

    return (
        <div>
            <h1>Hey {currentUser.username}!</h1>
            <img src={currentUser.avatar} alt="user avatar"/>
            <MessageChat/>
        </div>
    )
}

export default ProfilePage;