import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        //question mark ? is used if ${movie} doesn't load then don't crash justt load without it
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        {/*<<<background image*/}
        {/* title */}
        <h1>{movie?.title || movie?.name || movie?.orignal_name}</h1>
        {/* div->2 buttons */}
        {/* description */}
      </div>
    </header>
  );
}

export default Banner;
