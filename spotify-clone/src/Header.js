import { Avatar } from '@mui/material';
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import { useDataLayerValue } from './DataLayer';

const Header = ()=>{

    const[{user}, dispatch]=useDataLayerValue()
    return(
        <div className='header'>
            <div className='header-left'>
                <SearchIcon/>
                <input
                placeholder='Search for Artist,Songs or Album'
                type='text'
                />
            </div>
            <div className='header-right'>
                <Avatar src={user?.images[0]?.url} alt='N/A'/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}
export default Header