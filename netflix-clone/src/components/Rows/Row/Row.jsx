import React, { useEffect, useState, useRef } from "react";
import "./Row.css";
import {axiosInstance} from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { ChevronLeft, ChevronRight } from "lucide-react";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
 const rowRef = useRef(null);
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const request = await axiosInstance.get(fetchUrl);
        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log("Trailer error", error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };
  // Scroll functions
  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      {/* left arrow */}
      <div className="row-container">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <ChevronLeft size={30} />
        </button>
        <div className="row-posters" ref={rowRef}>
          {movies?.map((movie, index) => (
            <img
              onClick={() => handleClick(movie)}
              key={index}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            />
          ))}
        </div>
        {/* Right arrow */}
        <button className="scroll-btn right" onClick={scrollRight}>
          <ChevronRight size={30} />
        </button>
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
