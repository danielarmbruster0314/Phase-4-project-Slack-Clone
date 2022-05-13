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
	Icon
} from "semantic-ui-react";
import "./LandingPage.css";
import LogoHeader from "./Header";
import Footer from "./Footer";

function LandingPage({user, setWorkspace, setUser}) {
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

function handleLogout(){
	fetch("/logout", { method: "DELETE" })
	.then((r) => {
		if (r.ok) {
		  setUser(null);
		  navigate('/logout')
		}
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
					<Header as='h1' color='purple' textAlign='center'>
						Welcome, Select a WorkSpace to get started!
					</Header>
					<p>Friendly reminder to stay hydrated 😎 </p>
					<Form size='large'>
						<Segment stackable>
							<p>Workspace for <strong><em> {user.email}</em></strong></p>
							{theWorkspcaes?.map((space) => (
								<Button
								key={theWorkspcaes.id}
								fluid
								size='big'
								animated='fade'
								color='purple'
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
								color='blue'
								style={{ marginBottom: "1em" }}
								pointing
								content='Create Another Workspace'
								icon='plus'
								labelPosition='right'
							/>
						</Segment>
					</Form>
					<Message style={{justifyContent: "center"}}
						size='large'
					>
						Need a nap? Don't forget to
						
							<strong onClick={()=>handleLogout()} style={{justifyContent: "center", paddingLeft: 10, cursor:"pointer",color: 'blue'}}> Log Out</strong>
						
					</Message>
				</Grid.Column>
			</Grid >
		
			<div style={{ paddingTop: 100}}>
			<Footer/></div>
		</>
	);
}
export default LandingPage;
