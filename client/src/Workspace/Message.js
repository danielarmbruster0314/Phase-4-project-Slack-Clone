import './Message.css'
import {Avatar} from "@material-ui/core";

function Message({ message, user, userImage }){
    console.log(user)
    return (
        <div className="message">
            <div className='img'>
            <Avatar 
				className="header_avatar"
				alt={user?.name}
				src={user?.image}
				variant="rounded"
				style={{ width: 50, height: 50 }}
				/>
            </div>
            <div className='message_info'>
                
              <h4>{user?.username} user name</h4>
                <p>
                {message}
                </p>
            </div>

            </div>
    )
}

export default Message;