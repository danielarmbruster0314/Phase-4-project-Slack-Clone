import './ChatInput.css'
import {useState} from 'react';

function ChatInput({ channelName, channelId, user,room, setmessages, messages}){
 const [input, setInput] = useState('')

function sendMessage(e){
    e.preventDefault();
    if(room){
        fetch("/messages", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ user_id:user.id, room_id:room.id,content: input }),
		})
		.then((r) => {
			if (r.ok){
				r.json().then((data) => {
                    setmessages([...messages,data])
        ;
                })
			}else{
				r.json().then((error)=> console.log(error) )
			}
		})
    }
    setInput('')
}

const chatpage = document.getElementsByClassName("chat");
return(
    <di className='chat_input'>
        <form>
            <input 
            value={input}
            placeholder={`Message #${room?.name}`}
            onChange={e => setInput(e.target.value)}/>
            <button type="submit" onClick={sendMessage}>SEND</button>
        </form>
    </di>


)}

export default ChatInput 