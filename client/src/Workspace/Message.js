import './Message.css'
import {Avatar} from "@material-ui/core";
import { Popup } from 'semantic-ui-react'
function Message({ message, user, userImage, date }){
  
    const nameCapitalized = user?.username.charAt(0).toUpperCase() + user?.username.slice(1)
    // const date = new Date(message?.created_at)
    const datetime = date ? new Date(date) : null
    const longEnUSFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' });
    const longEnUSFormatterfordisplay = new Intl.DateTimeFormat('en-US', {
        year:  'numeric',
        month: 'long',
        day:   'numeric',
    })
    const messagedatetimefordisplay = longEnUSFormatterfordisplay.format(datetime)
    const messagedatetime = longEnUSFormatter.format(datetime)
    return (
        <div className="message">
            <div className='img'>
            <Avatar 
				className="header_avatar"
				alt={user?.name}
				src={user?.image}
				variant="rounded"
				style={{ width: 50, height: 50 }}
				/>
            </div>
            <div className='message_info'>
                
              <h4>{nameCapitalized}  <Popup   wide size='small' style={{backgroundColor: 'black', color: 'white'}} position='top center' content={messagedatetime} trigger={<em  className="message_date_time" style={{fontSize: 12, fontWeight: 500, marginLeft: 10}}>{messagedatetimefordisplay}</em>} /></h4>
                <p>
                {message}
                </p>
            </div>

            </div>
    )
}

export default Message;