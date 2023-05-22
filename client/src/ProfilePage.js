import MessageChat from "./MessageChat";

function ProfilePage({currentUser}) {

    return (
        <div id="profile">
            <img className="image" src={currentUser.avatar} alt="user avatar"/>
            <h1 id="username">Hey {currentUser.username}!</h1>
            <MessageChat/>
        </div>
    )
}

export default ProfilePage;