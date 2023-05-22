import MessageChat from "./MessageChat";

function ProfilePage({currentUser}) {

    return (
        <div id="profile">
            <h1>Hey {currentUser.username}!</h1>
            <img className="image" src={currentUser.avatar} alt="user avatar"/>
            <MessageChat/>
        </div>
    )
}

export default ProfilePage;