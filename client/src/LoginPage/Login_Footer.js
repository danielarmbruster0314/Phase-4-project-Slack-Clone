import React from "react";
import { List, Segment, Container } from "semantic-ui-react";
import "./Login.css";

function Footer() {
	return (
		<Segment
			className='Footer'
			vertical
			style={{ margin: "5em 0em 0em", padding: "1em 0em" }}
		>
			<Container textAlign='center'>
				<List horizontal divided link size='small'>
					<List.Item as='a' href='#'>
						Site Map
					</List.Item>
					<List.Item as='a' href='#'>
						Contact Us
					</List.Item>
					<List.Item as='a' href='#'>
						Terms and Conditions
					</List.Item>
					<List.Item as='a' href='#'>
						Privacy Policy
					</List.Item>
				</List>
			</Container>
		</Segment>
	);
}

export default Footer;
