import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../components/Modal';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTrailer, setCurrentTrailer] = useState('');

  useEffect(() => {
    // Replace YOUR_IMDB_API_KEY with your actual IMDb API key
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://imdb-api.com/en/API/Top250Movies/NEXT_PUBLIC_API_KEY`);
        const moviesData = response.data.items.slice(0, 10); // Get the top 10 movies
        const movieTrailers = await Promise.all(
          moviesData.map(async (movie) => {
            const trailerResponse = await axios.get(`https://imdb-api.com/en/API/YouTubeTrailer/NEXT_PUBLIC_API_KEY/${movie.id}`);
            return {
              id: movie.id,
              title: movie.title,
              trailerUrl: trailerResponse.data.videoUrl,
            };
          })
        );
        setMovies(movieTrailers);
      } catch (error) {
        console.error("Error fetching movies or trailers:", error);
      }
    };

    fetchMovies();
  }, []);

  const openModal = (trailerUrl) => {
    setCurrentTrailer(trailerUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTrailer('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Movie Trailers</h1>
      {movies.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="p-4 bg-white shadow rounded-lg flex flex-col items-center"
            >
              <h2 className="text-lg font-semibold mb-2">{movie.title}</h2>
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                onClick={() => openModal(movie.trailerUrl)}
              >
                Watch Trailer
              </button>
            </div>
          ))}
        </div>
      )}
      <Modal isOpen={isModalOpen} closeModal={closeModal} videoUrl={currentTrailer} />
    </div>
  );
}