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

					<p>Don't forget to hydrate and <strong>get some rest 😴</strong></p>

					<Message style={{justifyContent: "center"}}>
						<Header as='h4' color='purple' textAlign='center' paddingBottom= '15'>
							Logged out by accident? <br /><br/>
							<Link to='/' style={{ paddingTop: "10px" }}>
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