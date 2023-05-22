import MessageChat from "./MessageChat";

function ProfilePage({currentUser}) {
    console.log(currentUser)
    return (
        <div>
            <MessageChat/>
        </div>
    )
}

export default ProfilePage;