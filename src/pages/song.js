import React, { useState, useEffect } from "react";
import SongsService from "../services/songsService";

function Song({match}) {
    const [song, setSong] = useState([]);
    const [chartRun, setChartRun] = useState([]);

    useEffect(() => {
        retrieveSong();
        console.log(song.songId);
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
        var run = [];
        //console.log(song.songId);
        SongsService.findChartRun(match.params.id)
            .then(response => {
                setChartRun(response.data);
                console.log(run);
            })
            .catch(e => {
                console.log(e);
            });
    }

    return(<div className="site-section">
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

        <div className="all-chart-positions">
            <h4>Chart positions:</h4>
            {chartRun && chartRun.map(chart =>
                (<div className="chart">
                    <div className="page-item">{chart.chartno}</div>
                    <div className="page-item">{chart.chartpos}</div>
                </div>
                )
            )}
        </div>
    </div>);
}
export default Song;