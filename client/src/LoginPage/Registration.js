import React,{useState} from "react";
import {Link,useNavigate} from "react-router-dom"
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

function Registration({setUser}) {
	const navigate = useNavigate();
	const [username, setuserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setpassword] = useState('')
	const [confirmpassword, setconfirmpassword] = useState('')

	function handleCreateAccount(){
		const newuser ={
			username: username,
			email: email,
			password: password,
			password_confirmation: confirmpassword
		}
		fetch('/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newuser)
  	})
  	.then(res => res.json())
  	.then(data => {
		  setUser(data)
		  navigate('/landingpage')
		})
	  setUser('')
	  setEmail('')
	  setpassword('')
	  setconfirmpassword('')
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
								value={username}
								onChange={(e)=>setuserName(e.target.value)}
							/>
							<Form.Input
								fluid
								icon='mail'
								iconPosition='left'
								placeholder='E-mail address'
								value={email}
								onChange={(e)=>setEmail(e.target.value)}
							/>
							<Form.Input
								fluid
								icon='lock'
								iconPosition='left'
								placeholder='Password'
								type='password'
								value={password}
								onChange={(e)=>setpassword(e.target.value)}
							/>

							<Form.Input
								fluid
								icon='lock'
								iconPosition='left'
								placeholder='Confirm Password'
								type='password'
								value={confirmpassword}
								onChange={(e)=>setconfirmpassword(e.target.value)}
							/>
							<p>Must match the first password input field.</p>

							<Button onClick={()=>handleCreateAccount()} color='purple' fluid size='large'>
								<p> Join </p>
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
