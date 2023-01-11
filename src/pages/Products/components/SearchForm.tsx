import { FC } from 'react';
import { SearchCircleIcon } from '@heroicons/react/outline';

interface ISearchFormProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchForm: FC<ISearchFormProps> = ({ query, setQuery }) => (
  <form action='/search' className='search-form pt-32'>
    <div className='form-field with-icon'>
      <input
        type='text'
        name='query'
        value={query}
        placeholder='Search'
        onChange={e => setQuery(e.target.value)}
      />
      <SearchCircleIcon className='h-6 w-6' />
    </div>
  </form>
);

export default SearchForm;
