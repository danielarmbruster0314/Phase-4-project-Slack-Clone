import "./Chat.css";
import Message from "./Message";
import ChatInput from "./ChatInput.js";



function Chat({ room }){
    console.log(room)
return (
    <div className="chat">
        <div className="chat_header">
    <div className="chat_header_left">
    <h4 className="chat_channelName">
    <strong> # {room.name}</strong>
    </h4>
    </div>


    <div className="chat_header_right">
    <p>
    Deatils
    </p>
    </div>
        </div>
        <div className="chat_messages">
            {room.messages?.map(message => <Message key={message.id} message={message.content} />)}
    <Message />
        </div>
        <ChatInput />
        
    </div>
)
}

export default Chat 