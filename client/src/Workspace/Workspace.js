import React, { useState, useEffect } from "react";
import "./Workspace.css";
import BannerHeader from "./Header.js";
import SideBar from "./SideBar.js";
import Channel from "./Channel.js";
import Chat from "./Chat.js";

// each file will have their own css, make sure to import them

function Workspace({workspace,user, setUser, cableApp}) {
const [room, setRoom] = useState({name:"Please Select A Chat"})
const [messages, setmessages] = useState([{content:"user Messages apear hear"}])

function handleChannelData(obj){
	if (cableApp.cableApp.cable.subscriptions['subscriptions'].length > 1) {
		cableApp.cableApp.cable.subscriptions.remove(cableApp.cableApp.cable.subscriptions['subscriptions'][1])
		cableApp.cableApp.cable.subscriptions.create(
			{
			channel: "RoomsChannel",
			id: obj.id,
			},
			{
			received: (data) => {
				console.log(data)
				setmessages(messages => [...messages,data])
			},
			}
		)
	}else{
		cableApp.cableApp.cable.subscriptions.create(
		{
		channel: "RoomsChannel",
		id: obj.id,
		},
		{
		received: (data) => {
			setmessages(messages => [...messages,data])
		},
		}
	)
	
	}
}

let workspaceadmin = (workspace.user.id === user.id ? true : false)

function filterReciveiedData(messages,data){

}



	return (
		<div className="workspace">
		
			<BannerHeader user={user} setUser={setUser}/>
			<div className="workspace_view">
			<SideBar 
			channels={workspace.list_rooms} 
			workspace={workspace} 
			user={user} 
			setRoom={setRoom} 
			setmessages={setmessages} 
			messages={messages} 
			cableApp={cableApp} 
			handleChannelData={handleChannelData}/>
			<Chat room={room} messages={messages} setRoom={setRoom} user={user} setmessages={setmessages} workspaceadmin={workspaceadmin}/>
			</div>
			
		</div>
	);
}
export default Workspace;
