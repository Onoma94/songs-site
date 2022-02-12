import React, { useState, useEffect } from "react";
import SongsService from "../services/songsService";
import { Link } from "react-router-dom";

function Song({match}) {
    const [song, setSong] = useState([]);
    const [chartRun, setChartRun] = useState([]);

    useEffect(() => {
        retrieveSong();
        findChartRun();
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
    
    const findChartRun = () =>
    {
        SongsService.getChartRun(match.params.id)
            .then(response => {
                setChartRun(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    return(<div className="site-section">
        {
            song ? (
                <div>
                    <h3>Song</h3>
                <div>
                    <label>Title: </label>
                    {song.songTitle}
                </div>
                <div>
                    <label>Artist Name: </label>
                    <Link to={`/artist/${song.artistId}`} className="song-artistname">{song.artistname}</Link>
                </div>
                <div>
                    <label>Song ID: </label>
                    {song.songId}
                </div>
                </div>
            ) : (
                <div>
                  <br />
                  <p>no song chosen</p>
                </div>)
        }

            <h3>Chart statistics:</h3>
            {(chartRun.length > 0) ?
                (
                <div>
                    <div>
                        <label>First sighted: </label>
                        <Link to={`/chart/${chartRun[0].chartno}`}>
                            {chartRun[0].chartno} ({chartRun[0].chartdate})
                        </Link>
                    </div>
                    <div>
                        <label>Last sighted: </label>
                        <Link to={`/chart/${chartRun[chartRun.length - 1].chartno}`}>
                        {chartRun[chartRun.length - 1].chartno} ({chartRun[chartRun.length - 1].chartdate})
                        </Link>
                    </div>
                    <div>
                        <label>Total points: </label>
                    </div>
                    <div>
                        <label>Weeks on chart (Top 30): </label>
                        {chartRun.filter((ch) => {return (ch.chartpos < 31)}).length}
                    </div>
                </div>
            ) : (<div></div>)}

        <div className="all-chart-positions">
            <h3>Chart positions:</h3>
                {chartRun && chartRun.map(chart =>
                (<Link to={`/chart/${chart.chartno}`}>
                    <div className="chart" key={chart.chartno}>
                    <div className="page-item">{chart.chartno}</div>
                    <div className="page-item">{chart.chartdate}</div>                
                    <div className="page-item">{(chart.chartpos === 31) ?
                    ("bubbling under") : chart.chartpos}</div>
                    </div>
                </Link>
                )
                )}
        </div>
    </div>);
}
export default Song;