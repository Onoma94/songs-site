import React, { useState, useEffect } from "react";
import SongsService from "../services/songsService";
import { Link } from "react-router-dom";
import Pagination from "../components/pagination";

const ArtistList = () => {


    const [artists, setArtists] = useState([]);
    const [currentArtist, setCurrentArtist] = useState(null);
    /*const [currentIndex, setCurrentIndex] = useState(-1);*/
    const [searchName, setSearchName] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [artistsPerPage, setArtistsPerPage] = useState(50);
    
    const plCollator = new Intl.Collator('pl');

    useEffect(() => {
        retrieveArtists();
      }, []);

    const indexOfLastArtist = currentPage * artistsPerPage;
    const indexOfFirstArtist = indexOfLastArtist - artistsPerPage;
    const currentArtists = artists.slice(indexOfFirstArtist, indexOfLastArtist);

    const onChangeSearchName = e =>
    {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    const retrieveArtists = () =>
    {
        SongsService.getAllArtists()
          .then(response => {
            setArtists((response.data).sort(function(a, b) {return plCollator.compare(a.artistName, b.artistName) }));
          })
          .catch(e => {
            console.log(e);
          });
        setCurrentPage(1);
    };

    const refreshList = () =>
    {
        retrieveArtists();
        setCurrentArtist(null);
        /*setCurrentIndex(-1);*/
    };

    const setActiveArtist = (artist, /*index*/) => {
        setCurrentArtist(artist);
        /*setCurrentIndex(index);*/
      };

    const findByName = () =>
    {
        SongsService.findByName(searchName)
          .then(response => {
            setArtists(response.data.sort(function(a, b) {return plCollator.compare(a.artistName, b.artistName) }));
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
                placeholder="Search by name"
                value={searchName}
                onChange={onChangeSearchName}
            />
            <div className="input-group-append">
                <button
                    className="search-btn"
                    type="button"
                    onClick={findByName}
                >
                Search
                </button>
            </div>
            <div className="artist">
                {currentArtist ? (
                <div>
                    <h4>Artist</h4>
                <div>
                    <label>Artist Name:</label>{" "}
                    {currentArtist.artistName}
                </div>
                <Link to={`/artist/${currentArtist.artistId}`} 
                    className="song-btn">
                    More information
                </Link>
                </div>) : (
                <div>
                <br />
                    <p>Please click on an Artist...</p>
                </div>
                )}
            </div>
            <div className="songs-container">
                <h4>All Artists</h4>
                    {
                        currentArtists && currentArtists.map(artist =>
                            (
                                <div className={"song-frame" /*+ (index === currentIndex ? "active" : "")*/}
                                    onClick={() => setActiveArtist(artist)}
                                    key={artist.artistId}>
                                    <div className="song-artistname">{artist.artistName}</div>
                                </div>
                            )
                        )
                    }
                <Pagination itemsPerPage={artistsPerPage} totalItems={artists.length} paginate={paginate} />
            </div>
        </div>
    )
}



export default ArtistList;