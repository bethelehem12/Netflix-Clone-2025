const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
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
