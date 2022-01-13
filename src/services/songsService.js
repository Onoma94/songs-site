import http from "../http-common";

class SongsService
{
	getAll()
	{
		return http.get("/songs");
	}
	
	get(id) 
	{
		return http.get(`/songs/${id}`);
	}
	
	findByTitle(songtitle) 
	{
    	return http.get(`/songs?songtitle=${songtitle}`);
    }
}

export default new SongsService()