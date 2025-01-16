"use client";
import { useEffect, useState } from "react";


const API_KEY = "ea616972e803075e01d72bfbf88da337"; // Pastikan API key sudah diatur di .env
const BASE_URL = "https://api.themoviedb.org/3";
// const API_KEY = "process.env.local.NEXT_PUBLIC_API_KEY"; // Pastikan API key sudah diatur di .env
// const BASE_URL = "process.env.local.NEXT_PUBLIC_API_URL";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Tambahkan state untuk melacak halaman
  const [hasMore, setHasMore] = useState(true); // Tambahkan state untuk memeriksa apakah ada data tambahan

  const fetchMovies = async (page) => {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
      );
      const data = await response.json();

      // Update state film dan cek apakah data baru ada
      if (data.results.length > 0) {
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
      } else {
        setHasMore(false); // Tidak ada data baru, hentikan pemuatan
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(page); // Muat halaman awal
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); // Tingkatkan halaman
  };

  return (
    <div className="bg-black py-0">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">Upcoming</h2>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-slate-900 group relative rounded-lg border-2 border-white"
            >
              <img
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-50"
              />
              <div className="mt-4 block justify-between text-center">
                <div>
                  <h3 className="text-base text-white">
                    <a
                      href={`https://www.themoviedb.org/movie/${movie.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {movie.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-yellow-200">
                    Rating: {movie.vote_average}
                  </p>
                </div>
                <p className="text-sm font-medium text-slate-500">
                  {movie.release_date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Load More */}
        {hasMore && !loading && (
          <div className="mt-8 text-center">
            <button
              onClick={handleLoadMore}
              className="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
            >
              Load More
            </button>
          </div>
        )}

        {loading && <p className="text-center text-white mt-4">Loading...</p>}
        {!hasMore && (
          <p className="text-center text-white mt-4">No more movies to load.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
