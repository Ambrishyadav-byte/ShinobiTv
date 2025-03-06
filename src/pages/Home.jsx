import React from 'react';
import banner from '../assets/Banner.png';
import useFetchAnime from '../Hooks/useFetchAnime';
import AnimeCard from '../components/AnimeCard';
import loadingGif from '../assets/Loading.gif';

function Home() {
    const data = useFetchAnime("https://aniwatch-api-g3o3.vercel.app/api/v2/hianime/home");

    const sectionStyle = {
        // background: "rgba(240, 48, 48, 0.15)",
        // boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        // backdropFilter: "blur(3.5px)",
        // WebkitBackdropFilter: "blur(3.5px)",
        // borderRadius: "10px",
        // border: "1px solid rgba(255, 255, 255, 0.18)",
        // padding: "20px",
        // marginBottom: "20px"
    };

    return (
        <div className="Homecomponent w-[100vw] flex">
            <div id="left_div" className="w-[100%] border-amber-100">
                <div
                    className="banner h-[35vh] w-[100%] mx-auto"
                    style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundPosition: "center" }}
                ></div>
                
                {["Trending", "Latest Episodes", "Top Upcoming Animes", "Top Airing Animes"].map((sectionTitle, index) => {
                    const animeDataKey = ["trendingAnimes", "latestEpisodeAnimes", "topUpcomingAnimes", "topAiringAnimes"][index];
                    return (
                        <div key={sectionTitle}>
                            <p className='text-4xl text-center text-red-500 p-1'>{sectionTitle}</p>
                            <div className='w-[100%] flex flex-wrap justify-center gap-10 items-center' style={sectionStyle}>
                                {data?.[animeDataKey] ? (
                                    data[animeDataKey].slice(0, 10).map((anime) => (
                                        <AnimeCard key={anime.id} anime={anime} />
                                    ))
                                ) : (
                                    <img src={loadingGif} alt="Loading..." />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
