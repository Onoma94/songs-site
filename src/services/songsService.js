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

}

export default new SongsService()