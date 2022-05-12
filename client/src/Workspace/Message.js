import './Message.css'


function Message({ message, user, userImage }){
    return (
        <div className="message">
            <div className='message_info'>
              <h4>{user} user name</h4>
                <p>
                {message}
                </p>
            </div>

            </div>
    )
}

export default Message;