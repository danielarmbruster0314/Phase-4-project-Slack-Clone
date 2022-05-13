import React, {useState} from "react";
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { FiSearch } from 'react-icons/fi';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {  Icon,Button, Header, Image, Modal, Input } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import "./Header.css";

function BannerHeader({user, setUser}) {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false)
	const [image, setImage] =useState(null)
	const [newusername, setNewUsername] = useState(null)
	const nameCapitalized = user?.username.charAt(0).toUpperCase() + user?.username.slice(1)

function hadnleLogout(){
	fetch("/logout", { method: "DELETE" })
	.then((r) => {
		if (r.ok) {
		  setUser(null);
		  navigate('/logout')
		}
	  });
}

function handleUpdateInfo(){
	const theName = (newusername? newusername : user.username )
	const theImage = (image? image : user.image )
	fetch(`/users/${user.id}`, {
  method: 'PATCH',
  body: JSON.stringify({
    username: theName,
	image: theImage
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => setUser(json));
  setNewUsername(null)
  setImage(null)
	
}

const imageDefault= (image? image : user.image )

	console.log(newusername)
	console.log(user)
	return (	
	<div className="header_div">
		

	
			<div className="header_div_left">
				<AccessTimeIcon />
			</div>
			<div className="header_div_center">
				<button className="header_search_button">Search Workspace <FiSearch /></button>
			</div>
			<div className="header_div_right">
				<HelpOutlineIcon />
<Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
		<Avatar 
		className="header_avatar"
		alt={user?.name}
		src={user?.image}
		variant="rounded"
		style={{ width: 24, height: 24,cursor: "pointer"}}
		/>
	
	}
    >
      <Modal.Header>Profile</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={imageDefault}   wrapped />
        <Modal.Description>
          <Header>{nameCapitalized}</Header>
		  <Header>{user?.email}</Header>
		   <Input iconPosition='left' placeholder='Update username' >
      <Icon name='user' />
      <input value={newusername} onChange={(e) => setNewUsername(e.target.value)} />
    </Input>
	<div style={{paddingBottom: 30}}></div>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
		  <p>If not added image url <strong>Here</strong></p>
		  <Input label='http://' placeholder='Image url' style={{paddingBottom: 15 }} value={image} onChange={(e)=> setImage(e.target.value)}/>
		  
		 
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
	  <Button color='red' 
	  floated="left"
	  onClick={() => {
		hadnleLogout()
		setOpen(false)
		}}>
	Logout
</Button>
        <Button color='black' onClick={() => {

			setOpen(false)
			}}>
          close
        </Button>
        <Button
          content="Yep, that's me (update)"
          labelPosition='right'
          icon='checkmark'
          onClick={() => {
			  handleUpdateInfo()
			  setOpen(false)
			}}
          positive
        />
      </Modal.Actions>
    </Modal>




			</div>
		</div>
	);
}

export default BannerHeader;

