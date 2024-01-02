import './player.css'
import SideBar from './Sidebar'
import Body from './Body'
import Footer from './Footer'


const Player =({ spotify })=>{
    return(
        <div className='player'>
        <div className='player-body'>
        <SideBar/>
        <Body spotify={spotify}/>
        </div>
        <Footer spotify={spotify}/>
        </div>
    )
}

export default Player