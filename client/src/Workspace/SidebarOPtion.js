import './SideBarOption.css'

function SideBarOption({ Icon, title }){
    return (
        <div className="sidebar_option">
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


export default SideBarOption