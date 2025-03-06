import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import useFetchAnime from "../Hooks/useFetchAnime";

const AnimeDetails = () => {
  let { id } = useParams();
  const API_URL ="https://aniwatch-api-g3o3.vercel.app";

  const [Src, setSrc] = useState(""); // Video source state
  const [epId, setEpId] = useState("");
  const [EpisodeData, setEpisodeData] = useState(null);
  const [subtitles, setSubtitles] = useState([]); // State for subtitles

  console.log("Anime ID:", id);

  // Fetch all episodes
  const data = useFetchAnime(
    `${API_URL}/api/v2/hianime/anime/${id}/episodes`
  );

  useEffect(() => {
    if (data?.episodes?.length > 0 && !epId) {
      setEpId(data.episodes[0].episodeId); // ✅ Set first episode as default
    }
  }, [data]);

  console.log("Current Video Source:", Src);

  // Handle episode selection
  const handleEpisodeClick = (episodeId) => {
    setEpId(episodeId);
  };

  // Fetch episode source when `epId` updates
  useEffect(() => {
    if (!epId) return;

    const fetchEpisodeSource = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/v2/hianime/episode/sources?animeEpisodeId=${epId}&server=hd-1&category=sub`
        );
        const result = await response.json();
        
        console.log("Fetched Episode Data:", result); // Debugging
    
        // ✅ Extract the correct video URL
        const videoUrl = result.data?.sources?.[0]?.url;
        let subtitleTracks = result.data?.tracks || []; // Extract subtitles

        // ✅ Filter to keep only English subtitles
        subtitleTracks = subtitleTracks.filter(sub => 
          sub.label?.toLowerCase().includes("english")
        );

        if (videoUrl) {
          setEpisodeData(result.data);
          setSrc(videoUrl);
          setSubtitles(subtitleTracks); // ✅ Set only English subtitles
          console.log("Updated Video Source:", videoUrl);
        } else {
          console.error("No valid video URL found in API response");
        }
      } catch (error) {
        console.error("Error fetching episode source:", error);
      }
    };

    fetchEpisodeSource();
  }, [epId]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#181A1B] text-white">
      {/* Header */}
      <div className="p-4 bg-gray-800 shadow-md text-center">
        <h1 className="text-3xl font-bold text-red-500">Enjoy</h1>
      </div>

      <div className="Main_container flex flex-col-reverse md:flex-row-reverse gap-4 p-4">
        {/* Left Sidebar - Episode List */}
        <div className="w-full h-[50vh] overflow-scroll md:w-[30%] p-4 rounded-lg bg-gray-800">
          <h2 className="text-xl font-semibold text-center mb-3 text-red-500 sticky top-0 bg-gray-800">
            Episodes
          </h2>
          <div className="grid grid-cols-5 gap-2">
            {data?.episodes?.map((episode, index) => (
              <div
                key={episode.episodeId}
                className="block border-red-500 h-[90%] w-[20%] cursor-pointer"
                onClick={() => handleEpisodeClick(episode.episodeId)}
              >
                <div className="ep w-[45px] h-[45px] bg-red-500 hover:bg-amber-600 rounded-md border border-amber-300 flex justify-center items-center transition-all">
                  <p className="text-gray-900 font-bold">{index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Video Player */}
        <div className="w-full md:w-[70%]">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <VideoPlayer className="w-full" src={Src} subtitles={subtitles} />
          </div>
          <div className="server w-full h-[15vh] mt-4 p-2 bg-gray-800 rounded-lg">
            <p className="text-center text-red-500">Server Selection (Coming Soon)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
