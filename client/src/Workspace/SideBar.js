import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import React from "react";
import "./SideBar.css";
import SideBarOption from './SidebarOPtion'
import { InsertComment } from '@mui/icons-material';




function SideBar() {
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
			<SideBarOption Icon={InsertComment} title={"Threads"}/>
			<SideBarOption Icon={InsertComment} title={"Threads"}/>
			<SideBarOption Icon={InsertComment} title={"Threads"}/>
			<SideBarOption Icon={InsertComment} title={"Threads"}/>
			<SideBarOption Icon={InsertComment} title={"Threads"}/>
		</div>
	);
}

export default SideBar;
