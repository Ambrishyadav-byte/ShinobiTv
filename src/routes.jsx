import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SearchResults from "./pages/SearchResults";
import Watch from "./pages/Watch";
import AnimeDetails from "./pages/AnimeDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/watch" element={<Watch />} />
      <Route path="/anime/:id" element={<AnimeDetails />} /> {/* Dynamic Route */}
    </Routes>
  );
};

export default AppRoutes;
