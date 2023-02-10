import axios from 'axios';

export const getNowPlayingMovies = async () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => console.log(error.message));
};
