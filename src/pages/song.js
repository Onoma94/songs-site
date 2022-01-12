import React, { useState, useEffect } from "react";
import SongsService from "../services/songsService";

const Song = ({match}) => {
    const [song, setSong] = useState([]);

    useEffect(() => {
        getSong();
    }, []);
    
    const getSong = () =>
    {
        SongsService.get(match.params.id)
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
                    {song.title}
                </div>
                <div>
                    <label>Artist Name:</label>{" "}
                    {song.artistName}
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