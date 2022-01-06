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
	
	findByTitle(title) 
	{
    	return http.get(`/songs?title=${title}`);
    }
}

export default new SongsService()