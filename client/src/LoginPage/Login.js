import React from "react";
import { Link } from "react-router-dom";
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

function Login() {
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
						Log-in to your account
					</Header>

					<p>
						We suggest using the <strong> e-mail you use at work.</strong>
					</p>
					<Form size='large'>
						<Segment stacked>
							<Form.Input
								fluid
								icon='user'
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

							<Button color='purple' fluid size='large'>
								<a href='/landingpage'> Login </a>
							</Button>
						</Segment>
					</Form>
					<Message>
						New to us?{" "}
						<Link to='/registration'>
							<strong> Sign Up</strong>
						</Link>
					</Message>
				</Grid.Column>
			</Grid>

			<Footer />
		</>
	);
}

export default Login;
