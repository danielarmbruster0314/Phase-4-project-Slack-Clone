import React from "react";
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
import { Link } from "react-router-dom";

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

					<Form size='large'>
						<Segment stacked>
							{/* User Info  */}
							<Form.Input
								fluid
								name='username'
								icon='user'
								iconPosition='left'
								placeholder='User Name'
								type='text'
							/>

							{/* User E-mail  */}
							<Form.Input
								fluid
								name='email'
								icon='mail'
								iconPosition='left'
								placeholder='E-mail address'
								type='email'
							/>
							{/* User Password*/}
							<Form.Input
								fluid
								name='password'
								icon='lock'
								iconPosition='left'
								placeholder='Password'
								type='password'
							/>
							{/* End of Password Input */}
							<Form.Input
								fluid
								name='passwordConfirmation'
								icon='repeat'
								iconPosition='left'
								placeholder='Confirm Password'
								type='password'
							/>
							<p>Must match the first password input field.</p>
							{/* End of Passwor Confirmation Input */}

							<Button color='purple' fluid size='large'>
								<a href='/landingpage'> Join </a>
							</Button>
						</Segment>
					</Form>
					<Message>
						Already Have An Account?
						<Link to='/'>
							<strong> Log In </strong>
						</Link>
					</Message>
				</Grid.Column>
			</Grid>

			{/* <main>
				<section>
					<h2>Register</h2>
					<form>
						<label htmlFor='register'>Username:</label>
						<input
							type='text'
							id='username'
							autoComplete='off'
							placeholder='name@example.com'
						/>
						<p>
							4 to 24 characters.
							<br />
							Must begin with a letter. <br />
							Letters, numbers, underscores, hyphens allowed.
						</p>

						<label htmlFor='password'>Password:</label>
						<input type='password' id='password' placeholder='Pa$$w0rd!' />
						<p>
							4 to 24 characters.
							<br />
							Must include uppercase and lowercase letters, a number and a
							special character. <br />
							Allowed special characters:
							<span aria-label='exclamation mark'>!</span>
							<span aria-label='at symbol'>@</span>
							<span aria-label='hastag'>#</span>
							<span aria-label='dollar sign'>$</span>
							<span aria-label='percent'>%</span>
						</p>
						<label htmlFor='confirm_pwd'>Confirm Password:</label>
						<input type='password' id='confirm_pwd' placeholder='Pa$$w0rd!' />
						<p>Must match the first password input field.</p>
						<button> Sign Up </button>
					</form>
					<p>
						Already registered? <br />
						<span>
							<a href='./Login'>Sign In</a>
						</span>
					</p>
				</section>
			</main> */}
			<br />
			<br />
			<br />
			<Footer />
		</>
	);
}
export default Registration;
