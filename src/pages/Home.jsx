import React from 'react'
import banner from '../assets/Banner.png'
import useFetchAnime from '../Hooks/useFetchAnime';
import AnimeCard from '../components/AnimeCard';
import lodingGif from '../assets/Loading.gif'

function Home() {
    const data = useFetchAnime("https://aniwatch-api-g3o3.vercel.app/api/v2/hianime/home");
    return (
        <div className="Homecomponent w-[100vw] flex">
            <div id="left_div" className="w-[100%] border-2 border-amber-100">
                <div
                    className="banner h-[35vh] w-[100%] mx-auto"
                    style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                </div>
    
                <div className="Trending_title border-2 border-amber-300">
                    <p className='text-4xl text-center text-red-500 p-1'>Trending</p>
                </div>
    
                <div id="trending" className='w-[100%] border-2 border-amber-600 flex flex-wrap justify-center gap-10 items-center'>
                    {data?.trendingAnimes ? (
                        data.trendingAnimes.slice(0, 9).map((anime) => (
                            <AnimeCard key={anime.id} anime={anime} />
                        ))
                    ) : (
                        <img src={lodingGif} alt="" />
                        
                    )}
                </div>
                <div className=" border-2 border-amber-300">
                    <p className='text-4xl text-center text-red-500 p-1'>Latest Episods</p>
                </div>
                <div id="trending" className='w-[100%] border-2 border-amber-600 flex flex-wrap justify-center gap-10 items-center'>
                    {data?.latestEpisodeAnimes ? (
                        data.latestEpisodeAnimes.map((anime) => (
                            <AnimeCard key={anime.id} anime={anime} />
                        ))
                    ) : (
                        <img src={lodingGif} alt="" />
                    )}
                </div>
                <div className=" border-2 border-amber-300">
                    <p className='text-4xl text-center text-red-500 p-1'>Top Upcoming Animes</p>
                </div>
                <div id="trending" className='w-[100%] border-2 border-amber-600 flex flex-wrap justify-center gap-10 items-center'>
                    {data?.topUpcomingAnimes ? (
                        data.topUpcomingAnimes.map((anime) => (
                            <AnimeCard key={anime.id} anime={anime} />
                        ))
                    ) : (
                        <img src={lodingGif} alt="" />
                    )}
                </div>
                <div className=" border-2 border-amber-300">
                    <p className='text-4xl text-center text-red-500 p-1'>Top Airing Animes</p>
                </div>
                <div id="trending" className='w-[100%] border-2 border-amber-600 flex flex-wrap justify-center gap-10 items-center'>
                    {data?.topAiringAnimes ? (
                        data.topAiringAnimes.map((anime) => (
                            <AnimeCard key={anime.id} anime={anime} />
                        ))
                    ) : (
                        <img src={lodingGif} alt="" />
                    )}
                </div>
            </div>
            
        </div>
    );}
    
export default Home
