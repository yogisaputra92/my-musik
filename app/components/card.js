import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';
export default function Card({ result }) {
  return (
    <div className='group cursor-pointer sm:shadow-md rounded-lg sm:border-2 md:border-slate-400 sm:m-2 transition-shadow duration-200 text-center bg-slate-900 m-3'>
      <Link href={`/movie/${result.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt={result.title || result.name}
          className='aspect-square sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 w-full sm:h-36 object-cover lg:aspect-auto lg:h-50 border-white'
          // className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-50"
        ></img>
        <div className='p-2'>
          {/* <p className='line-clamp-3 text-sm'>{result.overview}</p> */}
          <h2 className='font-bold truncate my-2 text-xl'>
            {result.title || result.name}
          </h2>
          <p className='text-yellow-300'>
            {result.vote_average}
          </p>
          <p className=' items-center text-xs text-slate-400'>
            {result.release_date || result.first_air_date}
            {/* <FiThumbsUp className='h-5 mr-1 ml-3' /> */}
          </p>
        </div>
      </Link>
    </div>
  );
}