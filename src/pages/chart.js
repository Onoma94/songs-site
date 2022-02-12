import { useState, useEffect } from "react";
import SongsService from "../services/songsService";
import ChartSongFrame from "../components/chartSongFrame";
/*
function Chart({match})
{
    console.log(match.params.id);
    return(
        <div className="site-section">
                <br /><br />This page will contain music charts. <br /><br />
            <ChartFrame chartno={match.params.id} />
        </div>
    )
}
*/

function Chart({match})
{
    const [chartNo, setChartNo] = useState(match.params.id);
    const [chart, setChart] = useState([]);
    const [chartDate, setChartDate] = useState("");

    useEffect(() => {
        retrieveChart(chartNo);
        retrieveChartDate();
    }, []);

    const retrieveChart = (chartNumber) =>
    {
        SongsService.getChart(chartNumber)
          .then(response => {
              setChart((response.data));
              retrieveChartDate(chartNumber);
          });
    }

    const retrieveChartDate = (chartNumber) =>
    {
        SongsService.getChartDates()
            .then(response => {
                setChartDate(response.data[chartNumber]);
            })
    }

    const buttonClick = () =>
    {
        let input = parseInt(document.querySelector("input").value);
        if (!(isNaN(input)))
        {
            setChartNo(input);
            retrieveChart(input);
        }
    }

    return(
        <div className="site-section">
        <br /><br />This page will contain music charts. <br /><br />
        <div className="container">
            <input
                type="text"
                className="search-form"
                placeholder="Search by chart number"
            />
            <div className="input-group-append">
                <button
                    className="search-btn"
                    type="button"
                    onClick={buttonClick}
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
        </div>
    )
}

export default Chart;