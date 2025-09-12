import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests';
const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row
        title="Science Fiction Movies"
        fetchUrl={requests.fetchScienceFictionMovies}
      />
      <Row title="Thriller Movies" fetchUrl={requests.fetchThrillerMovies} />

      <Row title="War Movies" fetchUrl={requests.fetchWarMovies} />
      <Row title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies} />
      <Row
        title="Documentary Movies"
        fetchUrl={requests.fetchDocumentaryMovies}
      />
      <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
    </>
  );
}

export default RowList

