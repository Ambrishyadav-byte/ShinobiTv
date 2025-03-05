import React from 'react';

function AnimeCard({ anime }) {
  return (
    <div 
      className="Animecard h-[90%] w-[20%] border-3 border-red-500 rounded-2xl bg-[rgba(237,87,87,0.25)] shadow-lg transition-transform duration-300 hover:scale-105" 
      style={{
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", 
        backdropFilter: "blur(4px)", 
        WebkitBackdropFilter: "blur(4px)", 
        border: "1px solid rgba(255, 255, 255, 0.18)"
      }}
    >
      <img 
        src={anime.poster} 
        className="h-[90%] w-[100%] rounded-2xl" 
        alt={anime.name} 
      />
      <div className="more w-[100%] text-center">
        <p className=" text-white">{anime.name}</p> 
      </div>
    </div>
  );
}

export default AnimeCard;
