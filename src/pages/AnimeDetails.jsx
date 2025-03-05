import { useParams } from "react-router-dom";

const AnimeDetails = () => {
  let { id } = useParams();
  return <h1>Anime Details for ID: {id}</h1>;
};

export default AnimeDetails;
