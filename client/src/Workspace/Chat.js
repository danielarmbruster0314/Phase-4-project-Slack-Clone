import "./Chat.css";
import Message from "./Message";
import ChatInput from "./ChatInput.js";
import React, { useEffect, useRef } from 'react'
import {
	Button,
    Popup
} from "semantic-ui-react";
import Workspace from "./Workspace";

function Chat({ room, messages, user, setmessages, workspaceadmin, setRoom }){
    const messagesEndRef = useRef(null)

  



    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }

      
      function handleChannelDelete(){
        fetch("/room", { method: "DELETE" })
        .then((r) => {
          if (r.ok) {
            setUser(null);
            navigate('/logout')
          }
          }); 
      }

      useEffect(() => {
        scrollToBottom()
      }, [messages]);
console.log(messages)
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
    Details
    {workspaceadmin? <Popup inverted floated="right"
        trigger={
          <Button color='black' icon='ellipsis vertical'  style={{fontSize: 10,}}/>
        }
        content={<Button inverted color='red' onClick={()=>handleChannelDelete}content='Delete this channel' />}
        on='click'
        position='top right'
      /> : null }
    </p>
    </div>
        </div>
        <div className="chat_messages">
            {messages?.map(message => <Message key={message.id} message={message.content} user={message.user} date={message.created_at}/>)}
    <div ref={messagesEndRef} />
        </div>
        <ChatInput room={room} user={user} messages={messages} setmessages={setmessages}/>
        
    </div>
)
}

export default Chat 