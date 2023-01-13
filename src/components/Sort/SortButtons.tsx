import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../../FilterContext/filter_context';

export const SortButtons = () => {
  const { gridView, setGridView, setListView } = useFilterContext();
  return (
    <div className='btn-container'>
      <button
        type='button'
        className={gridView ? 'active' : undefined}
        onClick={setGridView}
      >
        <BsFillGridFill />
      </button>
      <button
        type='button'
        className={!gridView ? 'active' : undefined}
        onClick={setListView}
      >
        <BsList />
      </button>
    </div>
  );
};
