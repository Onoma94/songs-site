import { useState, useEffect } from "react";
import SongsService from "../services/songsService";
import ChartSongFrame from "../components/chartSongFrame";

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
        <br /><br />This music chart has been compiled since November 4, 2000 based on requests and song popularity in Dołuje, Poland. It contained hot and fresh hit songs from genres such as Pop, Rock, Hip-Hop, and EDM. It was cancelled in April 2016. <br /><br />
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