import Card from './card';

export default function Results({ results }) {
  return (
    <div>
    <div className='sm:grid grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
    </div>
  );
}