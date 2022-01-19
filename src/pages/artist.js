import React, { useState, useEffect } from "react";
import SongsService from "../services/songsService";

const Artist = ({match}) => {
    const [artist, setArtist] = useState([]);
    const [songs, setSongs] = useState([]);

    const plCollator = new Intl.Collator('pl');

    useEffect(() => {
        retrieveArtist();
        findArtistSongs();
    }, []);
    
    const retrieveArtist = () =>
    {
        SongsService.getArtist(match.params.id)
            .then(response => {
                setArtist(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    };

    const findArtistSongs = () =>
    {
        SongsService.findByArtistId(match.params.id)
          .then(response => {
            setSongs(response.data.sort(function(a, b) {return plCollator.compare(a.songTitle, b.songTitle) }));
          })
          .catch(e => {
            console.log(e);
        });
    }
    
    return(<div>
        {
            artist ? (
                <div>
                    <h4>Artist</h4>
                <div>
                    <label>Artist Name:</label>{" "}
                    {artist.artistName}
                </div>
                <div>
                    <label>Artist ID:</label>{" "}
                    {artist.artistId}
                </div>
                </div>
            ) : (
                <div>
                  <br />
                  <p>no artist chosen</p>
                </div>)
        }
            <h4>Songs by the Artist</h4>
        {
            songs && songs.map(song =>
                (
                    <div className={"song-frame" /*+ (index === currentIndex ? "active" : "")*/}
                        
                        key={song.songId}>
                        <div className="song-songtitle">{song.songTitle}</div>
                    </div>
                )
            )
        }
    </div>);
}
export default Artist;