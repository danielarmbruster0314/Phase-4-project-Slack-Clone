import './ChatInput.css'
import {useState} from 'react';

function ChatInput({ channelName, channelId, user}){
 const [input, setInput] = useState('')

function sendMessage(e){
    e.preventDefault();
    if(channelId){

    }
}

return(
    <di className='chat_input'>
        <form>
            <input 
            value={input}
            placeholder={`Message #${channelName}`}
            onChange={e => setInput(e.target.value)}/>
            <button type="submit" onClick={sendMessage}>SEND</button>
        </form>
    </di>


)}

export default ChatInput 