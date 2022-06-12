import axios from "axios";

// base url to make requests to the movie databse
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

//instance.get('/foo-bar'); means https://api.themoviedb.org/3"/foo-bar

export default instance;
