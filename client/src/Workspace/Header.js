import React from "react";
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { FiSearch } from 'react-icons/fi';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import "./Header.css";

function Header() {
const user = {}
	return (
		<div className="header_div">
			<div className="header_div_left">
				<AccessTimeIcon />
			</div>
			<div className="header_div_center">
				<button className="header_search_button">Search Workspace <FiSearch /></button>
			</div>
			<div className="header_div_right">
				<HelpOutlineIcon />
				<Avatar 
				className="header_avatar"
				alt={user?.name}
				src={user?.image}
				variant="rounded"
				style={{ width: 24, height: 24 }}
				/>
			</div>
		</div>
	);
}

export default Header;

