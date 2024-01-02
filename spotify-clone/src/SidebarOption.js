import './sidebarOption.css'

const SidebarOption = ({title, Icon})=>{
    return(
        <div className='sidebar-option'>
            {Icon && <Icon className='sidebarOption-icon'/>}
          {Icon ? <h4>{title}</h4>:<p>{title}</p>}
        </div>
    )
}
export default SidebarOption