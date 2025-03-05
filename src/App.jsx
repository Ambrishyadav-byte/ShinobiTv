import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnimeDetails from "./pages/AnimeDetails";
import SearchResults from "./pages/SearchResults";
import Watch from "./pages/Watch";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
