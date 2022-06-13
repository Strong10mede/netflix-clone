import React, { useEffect, useState } from "react";
import axios from "./axios";

function Row({ title, fetchUrl }) {
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
  //in above array space write the variables used in  useEffect as it is a dependency we have to write it

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
