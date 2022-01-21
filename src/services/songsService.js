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

	getChartDates()
	{
		return http.get(`/chartdates`);
	}

}

export default new SongsService()