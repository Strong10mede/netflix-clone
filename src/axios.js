import axios from "axios";

// base url to make requests to the movie databse
const instance = axios.created({
  baseURL: "https://api.themovie.org/3",
});

export default instance;
