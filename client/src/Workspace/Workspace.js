import React from "react";
import "./Workspace.css";
import Header from "./Header.js";
import SideBar from "./SideBar.js";
import Channel from "./Channel.js";

// each file will have their own css, make sure to import them

function Workspace() {
	return (
		<>
			<Header />
			<div className="workspace_view">
			<SideBar />
			<Channel />
			</div>
		</>
	);
}
export default Workspace;
