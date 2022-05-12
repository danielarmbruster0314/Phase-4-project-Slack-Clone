import React from "react";
import { Link } from "react-router-dom";
import { Grid, Header, Message } from "semantic-ui-react";
import "./Login.css";
import LogoHeader from "./Login_Header";
import Footer from "./Login_Footer";

function LogOut() {
	return (
		<>
			<LogoHeader />

			<Grid
				textAlign='center'
				style={{ height: "40vh" }}
				verticalAlign='middle'
			>
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as='h2' color='purple' textAlign='center'>
						You have succesfully logged out.
					</Header>

					<p>Don't forget to hydrate and get some rest 😴</p>

					<Message textAlign='center'>
						<Header as='h4' color='purple' textAlign='center'>
							Logged out by accident? <br />
							<Link to='/' style={{ padding: "5px" }}>
								<strong> Log back in Here </strong>
							</Link>
						</Header>
					</Message>
				</Grid.Column>
			</Grid>

			<Footer />
		</>
	);
}

export default LogOut;
