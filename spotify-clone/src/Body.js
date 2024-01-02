import PlayCircleOutline from '@mui/icons-material/PlayCircleOutline'
import './body.css'
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

const Body = ({ spotify }) => {

    const[{discover_weekly}, dispatch] = useDataLayerValue()

    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:album:1Je1IMUlBXcx1Fz0WE7oPT`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    
      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };

    return(
        <div className='body'>
            <Header spotify={spotify}/>
            <div className='body-info'>
                <img src={discover_weekly?.images[0].url} alt=''/>
                <div className='info-Text'>
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className='body-songs'>
                <div className='body-icon'>
                    <PlayCircleOutline className='body-shuffle' onClick={playPlaylist}/>
                    <FavoriteIcon fontSize='large'/>
                    <MoreHorizIcon/>
                </div> 
                {
                    discover_weekly?.tracks.items.map((items)=>{
                        return(
                            <SongRow playsong={playSong} tracks={items.track}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body