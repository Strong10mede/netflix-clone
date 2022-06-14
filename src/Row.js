import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    //if [], run once when the row loads and dont run again
    //if [movies], var movies changes it will run again plus run once at start
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  //in above array space write the variables used in  useEffect as it is a dependency we have to write it and if not useEffect will not render again

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: true,
    },
  };
  //movieTrailer not supports series only movies upto some scale
  // function handleClick(movie) {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     //movieTrailer is a npm module it will find the right trailer of name given
  //     movieTrailer(movie?.name)
  //       .then((url) => {
  //         //https://www.youtube.com/watch?v=XtMThy8QKqU&banana=5
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerUrl(urlParams.get("v")); //it gives XtMThy8QKqU
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // }

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=be28dcff9a330c7c404c3b473d0b51cd`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };

  return (
    <div className="row">
      <h2 style={{ color: "white" }}>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id} //key is used here to load faster or efficient rendering by only re rendering if movie.id is changing
            className={`row__poster ${isLargeRow && "row__posterLarger"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={`movie.name`}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
