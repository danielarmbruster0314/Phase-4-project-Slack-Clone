import React from "react";
import "./Login.css";
import slacklogo from "../images/slacklogo.png";

function Header() {
	return (
		<header className='header_logo'>
			<img src={slacklogo} width='250px' alt='slack header logo' />
		</header>
	);
}
export default Header;
