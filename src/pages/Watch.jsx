import { useParams } from "react-router-dom";

const Watch = () => {
  let { id } = useParams();

  return (
    <div>
      <h1>Now Watching Anime ID: {id}</h1>
      {/* Embed video player here */}
      <video width="100%" controls>
        <source src={`https://your-video-source.com/${id}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Watch;
