import { useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import useFetchAnime from "../Hooks/useFetchAnime";
const AnimeDetails = () => {
  let { id } = useParams();
  const [Src,setSrc]= useState("")
  const data=useFetchAnime()
  return (
    <div className="Main_container w-[100%] flex gap-1">
    <div className="left w-[20%] border-2 border-amber-200 h-[50vh]">
    </div>
    <div className="right w-[70%]">
     <VideoPlayer className=' w-[100]' src="https://mmd.jonextugundu.net/_v7/74a50cfd4c1c68eb65e43d21048f2e2dad2e8db6b42e757ada8fbfd1b4fb38d74b1c23d794f22381a22e44f43c7733f840067afe2e967767eb8a99a3c03102440da0706c30b5e4ed0751e68d7ffd5a686afffad7e16b4c77f16bf345606bdeab79112d52a761e9e003f90a8008a67d833314df0265b6c93971604bd7d00d4179/master.m3u8" />
    <div className="server w-[100%] h-[20vh] border-2 border-amber-300">
      <div className="sub">
        
      </div>
      <div className="dub"></div>
    </div>
    </div>
    
  </div>
  )
  
};

export default AnimeDetails;
