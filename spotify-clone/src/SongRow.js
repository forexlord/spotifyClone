import './songRow.css'


const SongRow = ( {tracks, playsong} )=>{
    return(
        <div className="song-row" onClick={()=>playsong(tracks.id)}>
            <img className="songRow-album" src={tracks.album.images[0].url} alt=""/>
            <div className="songRow-info">
                <h1>{tracks.name}</h1>
                <p>{tracks.artists.map((artist) => artist.name).join(",")}-{""}{tracks.album.name}</p>
            </div>
        </div>
    )
}

export default SongRow