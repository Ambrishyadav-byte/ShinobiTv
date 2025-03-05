import { RouterProvider } from "react-router-dom";
import router from "./routes";
import useFetchAnime from "./Hooks/useFetchAnime";

function App() {
  
  return <RouterProvider router={router} />;
}

export default App;
