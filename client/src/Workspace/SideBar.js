import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import { useState, useEffect } from "react";
import React from "react";
import "./SideBar.css";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 352c0011cc3d8063b9670fc132dd26a6daaa654c
=======
>>>>>>> 352c0011cc3d8063b9670fc132dd26a6daaa654c
=======
>>>>>>> parent of 9ac46a7d (oops)
import SideBarOption from "./SidebarOPtion";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import { FaComments } from "react-icons/fa";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { BiBuildings } from "react-icons/bi";
import { Accordion } from "semantic-ui-react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 352c0011cc3d8063b9670fc132dd26a6daaa654c

function SideBar({ user, workspace, setRoom, setmessages }) {
	const [listofChannels, setListOfChannels] = useState([]);
	useEffect(() => {
		setListOfChannels(workspace.list_rooms);
	}, []);

	function changeRoom(obj) {
		fetch(`/rooms/${obj.id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setRoom(data);
				setmessages(data.messages);
			});
=======
import  SideBarOption from '/home/daniel/Development/code/phase-4/project-template-react-rails-api/client/src/Workspace/SidebarOPtion.js';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import {FaComments} from 'react-icons/fa';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {BiBuildings} from 'react-icons/bi';
import { Accordion } from 'semantic-ui-react'
import {MdAddBox} from 'react-icons/md';
import {FaRegEdit} from 'react-icons/fa'
>>>>>>> 352c0011cc3d8063b9670fc132dd26a6daaa654c
=======
>>>>>>> parent of 9ac46a7d (oops)

function SideBar({ user, workspace, setRoom, setmessages }) {
	const [listofChannels, setListOfChannels] = useState([]);
	useEffect(() => {
		setListOfChannels(workspace.list_rooms);
	}, []);


function SideBar({ user,workspace,setRoom, setmessages}) {
const [listofChannels, setListOfChannels] = useState([])
useEffect(() => {
	setListOfChannels(workspace.list_rooms)
},[]) 

function changeRoom(obj){
	fetch(`/rooms/${obj.id}`)
	.then(res => res.json())
	.then(data => {
		console.log(data)
		setRoom(obj)
		setmessages(obj.messages)
	})
	
}


let allchannels = listofChannels?.map( channel => (
<SideBarOption key={channel.id} changeRoom={changeRoom} title={channel.name} channel={channel}/>
))





	function addChannelOption(){
		
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> parent of e4a6fc04 (got the messaginng to work)
>>>>>>> 352c0011cc3d8063b9670fc132dd26a6daaa654c
=======
>>>>>>> parent of 9ac46a7d (oops)
	}

	let allchannels = listofChannels?.map((channel) => (
		<SideBarOption
			key={channel.id}
			changeRoom={changeRoom}
			title={channel.name}
			channel={channel}
		/>
	));

	function addChannelOption() {}

	const panels = [
		{
			key: 1,
			title: "Connections",
			content: {
				content: <SideBarOption title='Slack-clone' />,
			},
		},
		{
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 352c0011cc3d8063b9670fc132dd26a6daaa654c
			key: 2,
			title: "Channels",
			content: {
				content: (
					<>
						{allchannels}
						<SideBarOption
							Icon={MdAddBox}
							addChannelOption={() => addChannelOption}
							title='Add channels'
						/>
					</>
				),
			},
		},
		{
			key: 3,
			title: "Direct messages",
			content: "hello",
		},
	];
<<<<<<< HEAD


	
console.log(user)

=======
=======
		key: 3,
		title: "Direct messages",
		content: "hello",}
	]
	
console.log(user)
>>>>>>> parent of e4a6fc04 (got the messaginng to work)
>>>>>>> 352c0011cc3d8063b9670fc132dd26a6daaa654c

=======
		key: 3,
		title: "Direct messages",
		content: "hello",}
	]
	
console.log(user)

>>>>>>> parent of 9ac46a7d (oops)
	return (
		<div className='sidebar'>
			<div className='sidebar_header'>
				<div className='sidebar_header_info'>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> parent of 9ac46a7d (oops)
					<h2 className="sidebar_workspacename">{workspace.name}</h2>
					<h3>
						<FiberManualRecordIcon />
						{user?.username}
<<<<<<< HEAD
	</h3>*/}</h3>
=======
<<<<<<< HEAD
					<h2 className='sidebar_workspacename'>{workspace.name}</h2>
					{/* <h3>
=======
					<h2 className="sidebar_workspacename">{workspace.name}</h2>
					<h3>
>>>>>>> parent of e4a6fc04 (got the messaginng to work)
						<FiberManualRecordIcon />
						{user?.username}
					</h3>
>>>>>>> 352c0011cc3d8063b9670fc132dd26a6daaa654c
=======
					</h3>
>>>>>>> parent of 9ac46a7d (oops)
				</div>
				<span className='sidebaroption_edit'>
					<FaRegEdit />
				</span>
			</div>
			<SideBarOption Icon={InsertCommentIcon} title='Threads' />
			<SideBarOption Icon={FaComments} name=' dms' title='All DMs' />
			<SideBarOption Icon={AlternateEmailIcon} title='Mentions & reactions' />
			<SideBarOption Icon={BiBuildings} title='Slack Connect' />
			<Accordion
				className='sidebar_accordain'
				defaultActiveIndex={[1]}
				panels={panels}
				exclusive={false}
				fluid
				inverted
				style={{ color: "white" }}
			/>
			<hr />
		</div>
	);
}

export default SideBar;
