import React,{ useEffect, useState} from "react";
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
import "./LandingPage.css";
import LogoHeader from "./Header";
import Footer from "./Footer";

function LandingPage({user, setWorkspace}) {
	const navigate = useNavigate();
const [theWorkspcaes, setTheWorkspace] = useState([])

useEffect(() => {
	fetch(`/users/${user.id}`)
	.then(res => res.json())
	.then(data => {
		console.log(data)
		setTheWorkspace(data.avaliable_workspaces)
	})
},[]) 


function handleChatRoom(id){
	fetch(`/workspaces/${id}`)
	.then(res => res.json())
	.then(data => {
	setWorkspace(data)
	navigate('/workspace')
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
					<Header as='h1' color='purple' textAlign='center'>
						Welcome, Select a WorkSpace to get started!
					</Header>
					<p>Friendly reminder to stay hydrated 😎 </p>
					<Form size='large'>
						<Segment stackable>
							<p>Workspace for {user.email}</p>
							{theWorkspcaes?.map((space) => (
								<Button
								fluid
								size='big'
								animated='fade'
								color='#fffff'
								style={{ marginBottom: "1em" }}
								pointing
								content={space.name}
								icon='arrow right'
								labelPosition='right'
								onClick={()=> handleChatRoom(space.id)}
							></Button>
							))}
							<Button
								fluid
								size='big'
								animated='fade'
								color='#fffff'
								style={{ marginBottom: "1em" }}
								pointing
								content='This is your first workspace'
								icon='arrow right'
								labelPosition='right'
							></Button>
							<Button
								fluid
								animated='fade'
								size='big'
								color='purple'
								style={{ marginBottom: "1em" }}
								pointing
								content='This is your second workspace'
								icon='arrow right'
								labelPosition='right'
							></Button>

							<Button
								fluid
								size='big'
								animated='fade'
								color='blue'
								style={{ marginBottom: "1em" }}
								pointing
								content='Create Another Workspace'
								icon='plus'
								labelPosition='right'
							/>
						</Segment>
					</Form>
					<Message
						size='large
                    '
					>
						Need a nap? <br /> Don't forget to
						<a href='/'>
							<strong> Log Out</strong>
						</a>
					</Message>
				</Grid.Column>
			</Grid>
			<br />
			<br />
			<br />
			<Footer />
		</>
	);
}
export default LandingPage;
