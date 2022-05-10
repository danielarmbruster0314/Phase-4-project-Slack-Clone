import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import React from "react";
import "./SideBar.css";
import  SideBarOption from '/home/daniel/Development/code/phase-4/project-template-react-rails-api/client/src/Workspace/SidebarOPtion.js';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import {FaComments} from 'react-icons/fa';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {BiBuildings} from 'react-icons/bi';
import { Accordion } from 'semantic-ui-react'
import {MdAddBox} from 'react-icons/md';




function SideBar({channels}) {


	function addChannelOption(){

	}
	const panels = [{
		key: 1,
		title: "Connections",
		content: {
			content: <SideBarOption  title="Slack Connect"/>},},
		{
			key: 1,
			title: "Channels",
			content: {
				content: <SideBarOption Icon={MdAddBox} addChannelOption={addChannelOption} title="Add channels" />},},
			{
				key: 1,
				title: "Direct messages",
				content: "hello",}
	
	
	]
	


	let user = {}
	return (
		<div className="sidebar">
			<div className="sidebar_header">
				<div className='sidebar_header_info'>
					<h2>Workspace Name</h2>
					<h3>
						<FiberManualRecordIcon />
						{user?.username}
					</h3>
				</div>
				<CreateIcon />
			</div>
			<SideBarOption Icon={ InsertCommentIcon } title="Threads"/>
			<SideBarOption Icon={ FaComments }  name=" dms" title="All DMs"/>
			<SideBarOption Icon={ AlternateEmailIcon } title="Mentions & reactions"/>
			<SideBarOption Icon={ BiBuildings } title="Slack Connect"/>
			<Accordion 
			className="sidebar_accordain"
    defaultActiveIndex={[1]}
    panels={panels}
    exclusive={false}
    fluid
	inverted
	style={{color:"white"}}
  />
			<hr />
			
			
		</div>
	);
}

export default SideBar;
