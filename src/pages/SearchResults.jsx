import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetchAnime from "../Hooks/useFetchAnime";
import AnimeCard from "../components/AnimeCard";
import loadingGif from "../assets/Loading.gif";

const API_URL = "https://aniwatch-api-g3o3.vercel.app";

const SearchResults = () => {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get("query");
    const [page, setPage] = useState(1);

    const data = useFetchAnime(`${API_URL}/api/v2/hianime/search?q=${searchQuery}&page=${page}`);

  
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [searchQuery, page]);

    return (
        <div className="w-full flex flex-col items-center">
            <h2 className="text-4xl text-red-500 font-bold mt-5">Search Results for "{searchQuery}"</h2>

            {/* Total Pages Display */}
            {data?.totalPages && (
                <p className="text-xl text-gray-300 mt-2">
                    Page {data.currentPage} of {data.totalPages}
                </p>
            )}

            {/* Anime Results */}
            <div className="w-full flex flex-wrap justify-center gap-4 p-4">
                {data?.animes ? (
                    data.animes.map((anime) => (
                        <AnimeCard key={anime.id} anime={anime} />
                    ))
                ) : (
                    <img src={loadingGif} alt="Loading..." className="mt-10" />
                )}
            </div>

            {/* Pagination Buttons */}
            <div className="flex gap-4 my-6">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className={`px-4 py-2 text-white rounded-lg ${
                        page === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
                    }`}
                >
                    Previous
                </button>
                
                <button
                    onClick={() => setPage((prev) => prev + 1)}
                    disabled={!data?.hasNextPage}
                    className={`px-4 py-2 text-white rounded-lg ${
                        !data?.hasNextPage ? "bg-gray-500 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
                    }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default SearchResults;
