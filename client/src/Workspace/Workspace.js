import React, { useState } from "react";
import "./Workspace.css";
import Header from "./Header.js";
import SideBar from "./SideBar.js";
import Channel from "./Channel.js";
import Chat from "./Chat.js";

// each file will have their own css, make sure to import them

function Workspace({workspace,user}) {
const [room, setRoom] = useState({name:"Please Select A Chat"})
const [messages, setmessages] = useState([{content:"user Messages apear hear"}])

	return (
		<div className="workspace">
		
			<Header user={user}/>
			<div className="workspace_view">
			<SideBar channels={workspace.list_rooms} workspace={workspace} user={user} setRoom={setRoom} setmessages={setmessages}/>
			<Chat room={room} messages={messages} setRoom={setRoom} user={user} setmessages={setmessages}/>
			</div>
			
		</div>
	);
}
export default Workspace;
