import React from 'react';
import { Link } from 'react-router-dom';

function AnimeCard({ anime }) {
  return (
    <Link to={`/anime/${anime.id}`} className="block border-2 border-amber-300 h-[90%] w-[20%]">
      <div 
        className="relative Animecard h-[100%] w-[100%] border-3 border-red-500 rounded-2xl bg-[rgba(237,87,87,0.25)] shadow-lg transition-transform duration-300 hover:scale-105"
        style={{
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", 
          backdropFilter: "blur(4px)", 
          WebkitBackdropFilter: "blur(4px)", 
          border: "1px solid rgba(255, 255, 255, 0.18)"
        }}
      >
        {/* Anime Poster with Blur on Hover */}
        <div className="relative overflow-hidden h-[90%] w-[100%] rounded-2xl">
          <img 
            src={anime.poster} 
            className="h-full w-full rounded-2xl object-cover transition-all duration-300 group-hover:blur-sm"
            alt={anime.name} 
          />
          
          {/* Play Icon (Appears on Hover) */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 hover:opacity-70">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4l12 6-12 6V4z" />
            </svg>
          </div>
        </div>

        {/* Anime Name */}
        <div className="more w-[100%] text-center">
          <p className="text-white">{anime.name}</p> 
        </div>
      </div>
    </Link>
  );
}

export default AnimeCard;
