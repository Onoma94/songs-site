import { useState, useEffect } from "react";
import SongsService from "../services/songsService";
import ChartSongFrame from "./chartSongFrame";

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
        const number = parseInt(e.target.value);
        setChartNo(number);
    };

    const retrieveChart = () =>
    {
        SongsService.getChart(chartNo)
          .then(response => {
              setChart((response.data));
              retrieveChartDate();
          });
    }

    const retrieveChartDate = () =>
    {
        SongsService.getChartDates()
            .then(response => {
                setChartDate(response.data[chartNo]);
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
                        <ChartSongFrame song={song} />
                    )
                )
            }
            <h4>Bubbling Under</h4>
            {
                chart && chart.filter(function (song) { return song.chartpos > 30 }).map(song =>
                    (
                        <ChartSongFrame song={song} />
                    )
                )
            }
        </div>
    )
}

export default ChartFrame;