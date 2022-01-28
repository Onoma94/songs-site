import React, { useState, useEffect } from "react";
import SongsService from "../services/songsService";

function Song({match}) {
    const [song, setSong] = useState([]);
    const [chartRun, setChartRun] = useState([]);

    useEffect(() => {
        retrieveSong();
        console.log("uzyjEfekt");
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

            <h4>Statistics:</h4>
            {(chartRun.length > 0) ?
                (
                <div><div>First sighted: {chartRun[0].chartno} ({chartRun[0].chartdate})</div>
                <div>Last sighted: {chartRun[chartRun.length - 1].chartno} ({chartRun[chartRun.length - 1].chartdate})</div>
                <div>Total points: </div>
                <div>Weeks on chart (Top 30): {chartRun.filter((ch) => {return (ch.chartpos < 31)}).length}</div>
                </div>
            ) : (<div></div>)}

        <div className="all-chart-positions">
            <h4>Chart positions:</h4>
                {chartRun && chartRun.map(chart =>
                (<div className="chart" key={chart.chartno}>
                <div className="page-item">{chart.chartno}</div>
                <div className="page-item">{chart.chartpos}</div>
                </div>
                )
                )}
        </div>
    </div>);
}
export default Song;