import React from 'react';
import banner from '../assets/Banner.png';
import useFetchAnime from '../Hooks/useFetchAnime';
import AnimeCard from '../components/AnimeCard';
import loadingGif from '../assets/Loading.gif';

function Home() {
    const API_URL = "https://aniwatch-api-g3o3.vercel.app";
    const data = useFetchAnime(`${API_URL}/api/v2/hianime/home`);

    // Style object for sections
    const sectionStyle = {
        background: "rgba(240, 48, 48, 0.15)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(3.5px)",
        WebkitBackdropFilter: "blur(3.5px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        padding: "20px",
        marginBottom: "20px"
    };

    return (
        <div className="Homecomponent w-[100vw] flex">
            <div className="w-[100%] border-amber-100">
                {/* Banner Section */}
                <div
                    className="banner w-full mx-auto h-[13vh] sm:h-[20vh] md:h-[25vh] lg:h-[30vh]"
                    style={{ 
                        backgroundImage: `url(${banner})`, 
                        backgroundSize: "cover", 
                        backgroundPosition: "center"
                    }}
                ></div>
                
                {/* Anime Sections */}
                {["Trending", "Latest Episodes", "Top Upcoming Animes", "Top Airing Animes"].map((sectionTitle, index) => {
                    const animeDataKey = ["trendingAnimes", "latestEpisodeAnimes", "topUpcomingAnimes", "topAiringAnimes"][index];

                    return (
                        <div key={sectionTitle} style={sectionStyle}>
                            {/* Section Title */}
                            <p className="text-4xl text-center text-red-500 p-1">{sectionTitle}</p>
                            
                            {/* Anime List */}
                            <div className="w-full flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 items-center">
                                {data?.[animeDataKey] ? (
                                    data[animeDataKey].slice(0, 18).map((anime) => {
                                        const uniqueId = crypto.randomUUID(); // Generate outside hooks

                                        return (
                                            <AnimeCard 
                                                key={anime.id || anime.title || uniqueId} 
                                                anime={anime} 
                                            />
                                        );
                                    })
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
