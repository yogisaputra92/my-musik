import Navbar from '../../ui/navbar';
import Results from '../../components/Result';
import SearchBox from '../../components/searchbox';
export default async function SearchPage({ params }) {
  const { searchTerm } = await params;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      <Navbar/>
      <SearchBox/>
      {!results ||
        (results.length === 0 && (
          <h1 className='text-center pt-6'>No results found</h1>
        ))}
      {results && results.length !== 0 && <Results results={results} />}

    </div>
  );
}