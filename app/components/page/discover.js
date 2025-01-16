"use client"

import { useState, useEffect } from "react";

export default function Populer () {
    
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTYxNjk3MmU4MDMwNzVlMDFkNzJiZmJmODhkYTMzNyIsIm5iZiI6MTczNjYwNjY2NS43NjEsInN1YiI6IjY3ODI4M2M5YWJhYmJiYTA0MGJiMjJlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VbKw9BB-O6M_S1ebhhdLOIbuNvxv31GcFR6l948xsiE'
      }
    };
    
    const [movies, setMovies] = useState([]);

    useEffect (() => {
        fetch(url, options)
          .then(res => res.json())
          .then(json => setMovies(json.results))
          .catch(err => console.error(err));
    })

    return (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Populer Movie</h2>
  
            <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
              {movies.map((movie, index) => (
                <div key={index} className="bg-slate-900 group relative rounded-lg">
                  <img
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Gunakan URL gambar TMDB
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 block justify-between text-center">
                    <div>
                      <h3 className="text-base text-white">
                        <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {movie.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-yellow-200">{movie.vote_average}</p>
                    </div>
                    <p className="text-sm font-medium text-slate-500">{movie.release_date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}
