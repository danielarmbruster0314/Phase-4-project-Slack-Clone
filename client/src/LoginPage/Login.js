import React from "react";
// import { Link } from "react-router-dom";
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

function Login() {
	// const [username, setUsername] = useState('')
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	function onSubmit(e) {
		e.preventDefault();
		const user = {
			email: email,
			password,
		};

		fetch(`http://localhost:4000/users`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				if (json.errors) setErrors(Object.entries(json.errors));
			});
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
						We suggest using the <strong> e-mail you use at work.</strong>
					</p>
					<Form onSubmit={onSubmit} size='large'>
						<Segment stacked>
							<Form.Input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								fluid
								icon='user'
								iconPosition='left'
								placeholder='E-mail address'
								type='email'
							/>
							<Form.Input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
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
					{errors
						? errors.map((e) => (
								<div key={errors.length++}>{e[0] + ": " + e[1]}</div>
						  ))
						: null}
					<Message>
						New to us?
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
