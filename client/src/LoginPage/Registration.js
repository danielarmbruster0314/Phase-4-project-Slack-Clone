import React from "react";
import {Link} from "react-router-dom"
import "./Login.css";
import {
	Button,
	Form,
	Grid,
	Header,
	Message,
	Segment,
} from "semantic-ui-react";
import "./Login.css";

import LogoHeader from "./Login_Header";
import Footer from "./Login_Footer";

function Registration() {
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
						Join Slack
					</Header>

					<p>
						We suggest using an <strong> e-mail and password you will remember. There is no recovery feature! 😬 </strong>
					</p>

					<Form size='large'>
						<Segment stacked>
							<Form.Input
								fluid
								icon='user'
								iconPosition='left'
								placeholder='User Name'
							/>
							<Form.Input
								fluid
								icon='mail'
								iconPosition='left'
								placeholder='E-mail address'
							/>
							<Form.Input
								fluid
								icon='lock'
								iconPosition='left'
								placeholder='Password'
								type='password'
							/>

							<Form.Input
								fluid
								icon='lock'
								iconPosition='left'
								placeholder='Confirm Password'
								type='password'
							/>
							<p>Must match the first password input field.</p>

							<Button color='purple' fluid size='large'>
								<a href='/landingpage'> Join </a>
							</Button>
						</Segment>
					</Form>
					<Message style={{justifyContent: "center", paddingLeft: 10}}  >
						Already Have An Account?
						<Link to='/' style={{justifyContent: "center", paddingLeft: 10}} >
							<strong> Log In </strong>
						</Link>
					</Message>
				</Grid.Column>
			</Grid>

			<div style={{ paddingTop: 100}}>
			<Footer/></div>
		</>
	);
}
export default Registration;
