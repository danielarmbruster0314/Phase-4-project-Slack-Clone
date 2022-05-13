import React,{ useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import {
	Button,
	Form,
	Grid,
	Header,
	Message,
	Segment,
	Modal,
	Input
} from "semantic-ui-react";
import "./LandingPage.css";
import LogoHeader from "./Header";
import Footer from "./Footer";



function exampleReducer(state, action) {
	switch (action.type) {
	  case 'OPEN_MODAL':
		return { open: true, dimmer: action.dimmer }
	  case 'CLOSE_MODAL':
		return { open: false }
	  default:
		throw new Error()
	}
  }






function LandingPage({user, setWorkspace, setUser}) {
	const navigate = useNavigate();
const [theWorkspcaes, setTheWorkspace] = useState([])
const [channelname, setChannelname] = useState('')
const [newworkspace,setNewworkspace] =useState(null)


const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  })
  const { open, dimmer } = state



  function handleCreateChannel(){
	const newworkspace ={
		name: channelname, user_id: user.id
	}
	fetch('/workspaces', {
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: JSON.stringify(newworkspace)
  })
  .then(res => res.json())
  .then(data => {
	  createInvitation(data)
	})
}


function createInvitation(obj){
	const newinvitation ={
		user_id: user.id,workspace_id: obj.id
	}
	fetch('/invitations', {
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: JSON.stringify(newinvitation)
  })
  .then(res => res.json())
  .then(data => {
	  console.log(data)
	  setTheWorkspace([...theWorkspcaes,data.workspace])
	  dispatch({ type: 'CLOSE_MODAL' })
	})
}


console.log(channelname)

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
								content='Create Workspace'
								icon='plus'
								labelPosition='right'
								onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })}
							/>
							 <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
      >
        <Modal.Header>Create a new channel</Modal.Header>
        <Modal.Content>
		<Input fluid icon='users' iconPosition='left' placeholder='#workspace-name-here' value={channelname} onChange={(e)=>setChannelname(e.target.value)}/>
		
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Close
          </Button>
          <Button positive onClick={() =>handleCreateChannel()}>
            Create
          </Button>
        </Modal.Actions>
      </Modal>
						</Segment>
					</Form>
					<Message style={{justifyContent: "center"}}
						size='large'
					>
						Need a nap? Don't forget to
						
							<strong onClick={()=>handleLogout()} style={{justifyContent: "center", paddingLeft: 10, cursor:"pointer",color: 'blue'}}> Log Out</strong>
						
					</Message>
					<Footer></Footer>
				</Grid.Column>
			</Grid >
		
			
		</>
	);
}
export default LandingPage;
