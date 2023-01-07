import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePageContainer from "./containers/HomePage";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import PageNotFound from "./components/PageNotFound";
import Movie from "./components/Movie";
import MoviesList from "./components/MoviesList";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePageContainer />} />

          <Route path="movie/:id" element={<Movie />} />

          <Route path="movies/:type" element={<MoviesList />} />

          <Route path="about-me" element={<AboutMe />} />

          <Route path="contact-me" element={<ContactMe />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
