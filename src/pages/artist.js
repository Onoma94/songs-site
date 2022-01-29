import React, { useState, useEffect } from "react";
import SongsService from "../services/songsService";
import SongFrame from "../components/songFrame";

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
    
    return(<div className="site-section">
        {
            artist ? (
                <div>
                    <h3>Artist</h3>
                <div>
                    <label>Artist Name: </label>
                    {artist.artistName}
                </div>
                <div>
                    <label>Artist ID: </label>
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
                    <SongFrame song={song} />
                )
            )
        }
    </div>);
}
export default Artist;