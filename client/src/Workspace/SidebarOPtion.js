import './SideBarOption.css'

function SideBarOption({ Icon, title, name, addChannelOption }){

function selectChannel(){

}



function addChannel(){
    const channelName = prompt("Enter Channel Name")
			if(channelName) {
				console.log(channelName)
			}else{
				console.log("No Name was entered")
			}

}

    return (
        <div 
        className={name? ("sidebar_option" + name): ("sidebar_option")} 
        onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon className="sidebaroption_icon"/>}
            {Icon ? (
                <h3>{title}</h3>
            ): (
                <h3 className="sidebaroption_chanel">
                   <span className='sidebaroption_hash'>#</span>{title}
                </h3>
            )}
        </div>
    )
}


export default  SideBarOption