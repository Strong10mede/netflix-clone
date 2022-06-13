import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Building Netflix_Clone</h1>
      <Row
        title="NETFLIX Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      {/* <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
