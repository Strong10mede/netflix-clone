import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  //A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    //if [], run once when the row loads and dont run again
    //if [movies], var movies changes it will run again plus run once at start
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  //in above array space write the variables used in  useEffect as it is a dependency we have to write it and if not useEffect will not render again

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
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
