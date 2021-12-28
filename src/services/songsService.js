import http from "../http-common";

class SongsService
{
	getAll()
	{
		return http.get("/songs");
	}
	
	create(data) 
	{
		return http.post("/add_songs/", data);
	}
	
	findByTitle(title) 
	{
    	return http.get(`/songs?title=${title}`);
    }
}

export default new SongsService()