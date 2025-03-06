import React from 'react';
import { Link } from 'react-router-dom';

function AnimeCard({ anime }) {
  return (
    <Link 
      to={`/anime/${anime.id}`} 
      className="block w-[45%] sm:w-[45%] md:w-[45%] lg:w-[18%] xl:w-[15%] max-w-[180px] h-auto"
    >
      <div 
        className="relative Animecard h-full w-full rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 
        bg-red-500 group"
        style={{
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", 
          backdropFilter: "blur(4px)", 
          WebkitBackdropFilter: "blur(4px)", 
          border: "1px solid rgba(255, 255, 255, 0.18)"
        }}
      >
        {/* Anime Poster */}
        <div className="relative overflow-hidden h-[85%] w-full rounded-2xl">
          <img 
            src={anime.poster} 
            className="h-full w-full rounded-2xl object-cover transition-all duration-300 group-hover:blur-md"
            alt={anime.name} 
          />

          {/* Play Button with Blur Background */}
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4l12 6-12 6V4z" />
            </svg>
          </div>
        </div>

        {/* Anime Name */}
        <div className="more w-full text-center p-1">
          <p className="text-white text-xs md:text-sm">{anime.name}</p> 
        </div>
      </div>
    </Link>
  );
}

export default AnimeCard;
