import axios from "axios";

export const getMovies = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};