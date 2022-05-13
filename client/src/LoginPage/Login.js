import React, {useState }from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
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


function Login({setUser}) {
	const navigate = useNavigate();
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	console.log(username)
	console.log(password)

	function handleSubmit(e){
		e.preventDefault();
		fetch("/login", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		})
		.then((r) => {
			if (r.ok){
				r.json().then((user) => setUser(user))
				navigate('/landingpage')
			}else{
				r.json().then((error)=> console.log(error) )
			}
		})
	}
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
						Welcome Back! <strong> Reminder to hydrate 😎 </strong>
					</p>
					<Form size='large'>
						<Segment stacked>
							<Form.Input
								fluid
								icon='user'
								iconPosition='left'
								placeholder='Username'
								value={username}
								onChange={e => setUsername(e.target.value)}
							/>
							<Form.Input
								fluid
								icon='lock'
								iconPosition='left'
								placeholder='Password'
								type='password'
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>

							<Button color='purple' fluid size='large' onClick={handleSubmit}>
								<a href='/landingpage'> Login </a>
							</Button>
						</Segment>
					</Form>
					<Message style={{justifyContent: "center"}}>
						New to us? 
						<Link to='/registration' style={{paddingLeft: 10}} >
							<strong> Sign Up</strong>
						</Link>
					</Message>
				</Grid.Column>
			</Grid>

			<div style={{ paddingTop: 100}}>
			<Footer/></div>
		</>
	);
}

export default Login;
