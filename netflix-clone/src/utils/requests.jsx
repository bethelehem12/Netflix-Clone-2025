const API_KEY = process.env.VITE_API_KEY;

// "282a5343424e0e7235395a4ae497b0f5";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchDocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
};

export default requests;

// https://api.themoviedb.org/3/trending/all/week?api_key=282a5343424e0e7235395a4ae497b0f5&language=en-US
