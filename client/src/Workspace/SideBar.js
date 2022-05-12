import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import { useState, useEffect } from "react";
import React from "react";
import "./SideBar.css";
import SideBarOption from "/Users/altheajohn/Documents/GitHub/Phase-4-project-Slack-Clone/client/src/Workspace/SideBar.js";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import { FaComments } from "react-icons/fa";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { BiBuildings } from "react-icons/bi";
import { Accordion } from "semantic-ui-react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

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

	return (
		<div className='sidebar'>
			<div className='sidebar_header'>
				<div className='sidebar_header_info'>
					<h2 className='sidebar_workspacename'>{workspace.name}</h2>
					{/* <h3>
						<FiberManualRecordIcon />
						{user?.username}
					</h3> */}
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
