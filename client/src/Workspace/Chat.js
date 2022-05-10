import "./Chat.css";

function Chat({ room }){
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
    </div>
)
}

export default Chat 