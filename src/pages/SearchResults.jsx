import { useParams } from "react-router-dom";

const SearchResults = () => {
  let { query } = useParams();

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      {/* Fetch and display search results here */}
    </div>
  );
};

export default SearchResults;
