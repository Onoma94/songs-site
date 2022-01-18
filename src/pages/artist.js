import React, { useState, useEffect } from "react";
import SongsService from "../services/songsService";

const Artist = ({match}) => {
    const [artist, setArtist] = useState([]);

    useEffect(() => {
        getArtist();
    }, []);
    
    const getArtist = () =>
    {
        SongsService.getArtist(match.params.id)
            .then(response => {
                setArtist(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    };
    
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
    </div>);
}
export default Artist;