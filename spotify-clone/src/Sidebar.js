import './sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';


const SideBar = ()=> {
const[{playlists},dispatch]= useDataLayerValue()

    return(
        <div className='sidebar'>
            <img className='sidebar-logo' src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"/>
            <SidebarOption Icon={HomeIcon} title='Home'/>
            <SidebarOption Icon={SearchIcon} title='Search'/>
            <SidebarOption Icon={LibraryMusicIcon} title='Your Library'/>
            <br/>
            <strong className='sidebarOption-title'>PLAYLIST</strong>
            <hr/>
            {playlists?.items?.map((playlist) => {
            return (
                <SidebarOption key={playlist.id} title={playlist.name} />
            );
            })}
        </div>
    )
}
export default SideBar