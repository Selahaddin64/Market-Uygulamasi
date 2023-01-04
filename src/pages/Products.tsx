import {ProductItem} from '../components/ProductsItem';
import useFetch from '../hooks/useFetch';

function Products() {
  const {data} = useFetch(
    `http://localhost:3000/products`,
  ); 
  return(
    <div className="mx-auto pt-10 pb-24 sm:px-4 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" >
      {data.map((item: any) => (
          <div key={item.id} >
            <ProductItem {...item} />
          </div>
        ))}
    </div>
  )
}

export default Products