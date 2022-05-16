import './Message.css'
import {Avatar} from "@material-ui/core";

function Message({ message, user, userImage }){
  
    const nameCapitalized = user?.username.charAt(0).toUpperCase() + user?.username.slice(1)
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
                
              <h4>{nameCapitalized}</h4>
                <p>
                {message}
                </p>
            </div>

            </div>
    )
}

export default Message;