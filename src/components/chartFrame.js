import { useState, useEffect } from "react";
import SongsService from "../services/songsService";

function ChartFrame()
{
    const [chartNo, setChartNo] = useState(791);
    const [chart, setChart] = useState([]);
    const [chartDate, setChartDate] = useState("");

    useEffect(() => {
        retrieveChart();
        retrieveChartDate();
    }, []);

    const onChangeSearchNo = e =>
    {
        const number = e.target.value;
        setChartNo(number);
        setChartDate(chartDate);
    };

    const retrieveChart = () =>
    {
        SongsService.getChart(chartNo)
          .then(response => {
              console.log(response.data);
              setChart((response.data));
          })
    }

    const retrieveChartDate = () =>
    {
        SongsService.getChartDates()
            .then(response => {
                setChartDate(response.data[chartNo].chartdate);
            })
    }

    return(
        <div className="container">
            <input
                type="text"
                className="search-form"
                placeholder="Search by chart number"
                value={chartNo}
                onChange={onChangeSearchNo}
            />
            <div className="input-group-append">
                <button
                    className="search-btn"
                    type="button"
                    onClick={retrieveChart}
                >
                Search
                </button>
            </div>
            <h4>Chart No. {chartNo} ({chartDate})</h4>
            {
                chart && chart.filter(function (song) { return song.chartpos < 31 }).map(song =>
                    (
                        <div className={"song-frame"}>
                            <div className="chart-pos">{song.chartpos}</div>
                            <div className="song-artistname">{song.artistname}</div>
                            <div className="song-songtitle">{song.songtitle}</div>
                        </div>
                    )
                )
            }
            <h4>Bubbling Under</h4>
            {
                chart && chart.filter(function (song) { return song.chartpos > 30 }).map(song =>
                    (
                        <div className={"song-frame"}>
                            <div className="chart-pos">   </div>
                            <div className="song-artistname">{song.artistname}</div>
                            <div className="song-songtitle">{song.songtitle}</div>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default ChartFrame;