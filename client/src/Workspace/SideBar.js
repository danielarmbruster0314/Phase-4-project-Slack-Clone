import {Avatar} from "@material-ui/core";
import {useState, useEffect } from 'react';
import React from "react";
import "./SideBar.css";
import  SideBarOption from '/home/daniel/Development/code/phase-4/project-template-react-rails-api/client/src/Workspace/SidebarOPtion.js';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import {FaComments} from 'react-icons/fa';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {BiBuildings} from 'react-icons/bi';
import { Accordion } from 'semantic-ui-react'
import {MdAddBox} from 'react-icons/md';
import {FaRegEdit} from 'react-icons/fa'





function SideBar({ user,workspace,setRoom, setmessages, cableApp, messages, handleChannelData}) {
const [listofChannels, setListOfChannels] = useState([])
const [listOfUsers, setlListofUsers] = useState([])
useEffect(() => {
	setListOfChannels(workspace.list_rooms)
	fetch(`/users`)
	.then(res => res.json())
	.then(data => {
		console.log(data)
		setlListofUsers(data)
	})
},[]) 

function changeRoom(obj){
	fetch(`/rooms/${obj.id}`)
	.then(res => res.json())
	.then(data => {
		setRoom(data)
		setmessages(data.messages)
	})
	handleChannelData(obj)
	}


	let allchannels = listofChannels?.map( channel => (
	<SideBarOption key={channel.id} changeRoom={changeRoom} title={channel.name} channel={channel} cableApp={cableApp} setmessages={setmessages} messages={messages}/>
	))




	function addChannelOption(){
	
	}


	let allusers = listOfUsers?.map( user => (
		<div className="sidebar_user_channel">
		<Avatar 
		className="header_avatar"
		alt={user?.username}
		src={user?.image}
		variant="rounded"
		style={{ width: 24, height: 24,cursor: "pointer"}}
		/>
		<p style={{marginLeft: 10}}>{user.username}</p>
		</div>
	))


	const panels = [{
		key: 1,
		title: "Connections",
		content: {
			content: <SideBarOption  title="Slack-clone"/>},},
		{
		key: 2,
		title: "Channels",
		content: {
			content: (<>
				{allchannels}
				<SideBarOption Icon={MdAddBox} addChannelOption={()=>addChannelOption} title="Add channels" workspace={workspace} setListOfChannels={setListOfChannels} listofChannels={listofChannels}/>
					
				</>)},},
		{
		key: 3,
		title: "Direct messages",
		content: {
			content: (<>{allusers}</>),},}
	]
	


	return (
		<div className="sidebar">
			<div className="sidebar_header">
				<div className='sidebar_header_info'>
					<h2 className="sidebar_workspacename">{workspace.name}</h2>
				</div>
				<span className="sidebaroption_edit"><FaRegEdit /></span>
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
