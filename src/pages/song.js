import React, { useState, useEffect } from "react";
import SongsService from "../services/songsService";

function Song({match}) {
    const [song, setSong] = useState([]);

    useEffect(() => {
        retrieveSong();
    }, []);

    const retrieveSong = () =>
    {
        SongsService.getSong(match.params.id)
            .then(response => {
                setSong(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    };
    
    return(<div>
        {
            song ? (
                <div>
                    <h4>Song</h4>
                <div>
                    <label>Title:</label>{" "}
                    {song.songTitle}
                </div>
                <div>
                    <label>Artist Name:</label>{" "}
                    {song.artistname}
                </div>
                <div>
                    <label>Song ID:</label>{" "}
                    {song.songId}
                </div>
                </div>
            ) : (
                <div>
                  <br />
                  <p>no song chosen</p>
                </div>)
        }
    </div>);
}
export default Song;