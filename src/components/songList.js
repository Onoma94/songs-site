import React, { useState, useEffect } from "react";
import SongsService from "../services/songsService";
import { Link } from "react-router-dom";
import Pagination from "../components/pagination";
import SongFrame from "../components/songFrame";

const SongList = () => {

    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);
    /*const [currentIndex, setCurrentIndex] = useState(-1);*/
    const [searchTitle, setSearchTitle] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [songsPerPage, setSongsPerPage] = useState(50);
    
    const plCollator = new Intl.Collator('pl');

    useEffect(() => {
        retrieveSongs();
      }, []);

    const indexOfLastSong = currentPage * songsPerPage;
    const indexOfFirstSong = indexOfLastSong - songsPerPage;
    const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);

    const onChangeSearchTitle = e =>
    {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    const retrieveSongs = () =>
    {
        SongsService.getAllSongs()
          .then(response => {
            console.log(response.data);
            setSongs((response.data).sort(function(a, b) {return plCollator.compare(a.artistname, b.artistname) }));
          })
          .catch(e => {
            console.log(e);
          });
        setCurrentPage(1);
    };

    const refreshList = () =>
    {
        retrieveSongs();
        setCurrentSong(null);
        /*setCurrentIndex(-1);*/
    };

    const setActiveSong = (song, /*index*/) => {
        setCurrentSong(song);
        /*setCurrentIndex(index);*/
      };

    const findByTitle = () =>
    {
        SongsService.findByTitle(searchTitle)
          .then(response => {
            setSongs(response.data.sort(function(a, b) {return plCollator.compare(a.artistname, b.artistname) }));
          })
          .catch(e => {
            console.log(e);
        });
        setCurrentPage(1);
    };

    const paginate = pageNumber => setCurrentPage(pageNumber);
    
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
            <div className="song">
                {currentSong ? (
                <div>
                    <h4>Song</h4>
                <div>
                    <label>Title:</label>{" "}
                    {currentSong.songTitle}
                </div>
                <div>
                    <label>Artist Name:</label>{" "}
                    {currentSong.artistname}
                </div>
                <Link to={`/song/${currentSong.songId}`} 
                    className="song-btn">
                    More information
                </Link>
                </div>) : (
                <div>
                <br />
                    <p>Please click on a Song...</p>
                </div>
                )}
            </div>
            <div className="songs-container">
                <h4>All Songs</h4>
                    {
                        currentSongs && currentSongs.map(song =>
                            (
                                <SongFrame song={song} />
                            )
                        )
                    }
                <Pagination itemsPerPage={songsPerPage} totalItems={songs.length} paginate={paginate} />
            </div>
        </div>
    )
}



export default SongList;