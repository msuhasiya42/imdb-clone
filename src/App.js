import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePageContainer from "./containers/HomePage";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePageContainer />}></Route>
        </Routes>
        <Routes>
          <Route path="/aboutme" element={<AboutMe />}></Route>
        </Routes>
        <Routes>
          <Route path="/contactme" element={<ContactMe />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
