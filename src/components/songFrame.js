import { Link } from "react-router-dom";

function SongFrame({song})
{
    console.log(song);
    return(
        <div className="song-frame"
            key={song.songId}>
            <Link to={`/artist/${song.artistId}`} className="song-artistname">{song.artistname}</Link>
            <Link to={`/song/${song.songId}`} className="song-songtitle">{song.songTitle}</Link>
        </div>
    )
}

export default SongFrame;