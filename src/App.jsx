import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <div className="flex gap-4 p-4 bg-gray-900 text-white">
        <Link to="/"><button className="px-4 py-2 bg-blue-600 rounded">Home</button></Link>
        <Link to="/about"><button className="px-4 py-2 bg-green-600 rounded">About</button></Link>
        <Link to="/search"><button className="px-4 py-2 bg-yellow-600 rounded">Search</button></Link>
        <Link to="/watch"><button className="px-4 py-2 bg-red-600 rounded">Watch</button></Link>
      </div>

      <AppRoutes />
    </Router>
  );
}

export default App;
