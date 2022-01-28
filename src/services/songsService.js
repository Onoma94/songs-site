import http from "../http-common";

class SongsService
{
	getAllSongs()
	{
		return http.get("/songs");
	}
	
	getSong(id) 
	{
		return http.get(`/songs/${id}`);
	}

	getAllArtists()
	{
		return http.get("/artists");
	}
	
	getArtist(id) 
	{
		return http.get(`/artists/${id}`);
	}

	getChart(chartno)
	{
		return http.get(`/charts/${chartno}`);
	}

	findByTitle(songtitle) 
	{
    	return http.get(`/songs?songtitle=${songtitle}`);
    }

	findByName(artistname) 
	{
    	return http.get(`/artists?artistname=${artistname}`);
    }

	findByArtistId(artistid)
	{
		return http.get(`/songsbyartist/${artistid}`);
	}

	/* deprecated */
	findChartRun(songid)
	{
		return http.get(`/songcharts/${songid}`);
	}

	getChartRun(songid)
	{
		return http.get(`/chartrun/${songid}`);
	}

	getChartDates()
	{
		return http.get(`/chartdates`);
	}

	getChartDate(chartno)
	{
		return http.get(`/chartdates/${chartno}`);
	}

}

export default new SongsService()