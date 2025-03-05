import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout"; // Ensure Layout is created
import Home from "./pages/Home";
import About from "./pages/About";
import SearchResults from "./pages/SearchResults";
import Watch from "./pages/Watch";
import AnimeDetails from "./pages/AnimeDetails";
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="home" element={<Home />} />  
        <Route path="about" element={<About />} />
        <Route path="search" element={<SearchResults />} />
        <Route path="watch" element={<Watch />} />
        <Route path="anime/:id" element={<AnimeDetails />} />
      </Route>
    )
  );

export default router;
