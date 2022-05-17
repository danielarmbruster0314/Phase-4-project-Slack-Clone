import './SideBarOption.css'
import {
	Button,
	Form,
	Grid,
	Header,
	Message,
	Segment,
	Modal,
	Input,
    Icon,
    Popup
} from "semantic-ui-react";
import React, {useState} from 'react';






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










function SideBarOption({ Icon, title, name, addChannelOption,changeRoom,channel,workspace,listofChannels,setListOfChannels, cableApp, setmessages, messages }){
const[isOn, setisOn] = useState(true)
const [channelname, setChannelName] = useState('')


    
const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  })
  const { open, dimmer } = state


console.log(workspace)

function handleCreateChannel(){
    const newchannel ={
		name: channelname,workspace_id: workspace.id
	}
	fetch('/rooms', {
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: JSON.stringify(newchannel)
  })
  .then(res => res.json())
  .then(data => {
      
    setListOfChannels([...listofChannels,data])
	  dispatch({ type: 'CLOSE_MODAL' })
	})
}

function selectChannel(){
changeRoom(channel)
}

const style = {
    borderRadius: 0,
    opacity: 0.7,
    padding: '2em',
  }

function addChannel(){
  dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })
}

    return (
        <div 
        className={name? ("sidebar_option" + name): ("sidebar_option")} 
        onClick={addChannelOption ? addChannel : selectChannel}
        >
        
            {Icon && <Icon  onClick={()=>dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' }) }className="sidebaroption_icon"/>}
            {Icon ? (
                <h3>{title}</h3>
            ): (
                <h3 className="sidebaroption_chanel">
                   <span className='sidebaroption_hash'>#</span>{title}    
                </h3>
            )}
             <Modal
             
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
      >
        <Modal.Header>Create a new channel</Modal.Header>
        <Modal.Content >
		<Input fluid icon='users' iconPosition='left' placeholder='#channel-name-here' value={channelname} onChange={(e)=>setChannelName(e.target.value)} />
		
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
        </div>
    )
}


export default  SideBarOption