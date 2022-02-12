import { Link } from "react-router-dom";

function ChartSongFrame({song})
{
    return(
        <div className="song-frame"
        key={song.songId}>
            <div className="chart-pos">{(song.chartpos < 31) ? (song.chartpos) : ("")}</div>
            <Link to={`/artist/${song.artistid}`} className="song-artistname">{song.artistname}</Link>
            <Link to={`/song/${song.songid}`} className="song-songtitle">{song.songtitle}</Link>
        </div>
    )
}

export default ChartSongFrame;