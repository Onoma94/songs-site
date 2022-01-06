import React, { useState, useEffect } from "react";
import SongsService from "../services/songsService";
import { Link } from "react-router-dom";

const SongList = () => {


    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");
    
    useEffect(() => {
        retrieveSongs();
      }, []);

    const onChangeSearchTitle = e =>
    {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    const retrieveSongs = () =>
    {
        SongsService.getAll()
          .then(response => {
            setSongs(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    };

    const refreshList = () =>
    {
        retrieveSongs();
        setCurrentSong(null);
        setCurrentIndex(-1);
    };

    const setActiveSong = (song, index) => {
        setCurrentSong(song);
        setCurrentIndex(index);
      };

    const findByTitle = () =>
    {
        SongsService.findByTitle(searchTitle)
          .then(response => {
            setSongs(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
        });
    };
    
    return(
        <div className="container">
            <input
                type="text"
                className="search-form"
                placeholder="Search by title"
                value={searchTitle}
                onChange={onChangeSearchTitle}
            />
            <div className="input-group-append">
                <button
                    className="search-btn"
                    type="button"
                    onClick={findByTitle}
                >
                Search
                </button>
            </div>
            <div className="songs-container">
                <h4>All Songs</h4>
                <ul>
                    {
                        songs && songs.map((song, index) =>
                            (
                                <li className={"list-group-item" + (index === currentIndex ? "active" : "")}
                                    onClick={() => setActiveSong(song, index)}
                                    key={index}>
                                    {song.title}
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
            <div className="song">
                {currentSong ? (
                <div>
                    <h4>Song</h4>
                <div>
                    <label>Title:</label>{" "}
                    {currentSong.title}
                </div>
                <div>
                    <label>Artist Name:</label>{" "}
                    {currentSong.artistName}
                </div>
                <Link to={"/songs/" + currentSong.id} />
                </div>) : (
                <div>
                <br />
                    <p>Please click on a Song...</p>
                </div>
                )}
            </div>
        </div>
    )
}



export default SongList;