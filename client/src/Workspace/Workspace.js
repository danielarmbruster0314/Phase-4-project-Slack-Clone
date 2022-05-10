import React, { useState } from "react";
import "./Workspace.css";
import Header from "./Header.js";
import SideBar from "./SideBar.js";
import Channel from "./Channel.js";
import Chat from "./Chat.js";
// each file will have their own css, make sure to import them

function Workspace() {
const [boom, setBoom] = useState("")
let room ={name:"general"}

	return (
		<div className="workspace">
		
			<Header />
			<div className="workspace_view">
			<SideBar />
			<Chat room={room}/>
			</div>
			
		</div>
	);
}
export default Workspace;
