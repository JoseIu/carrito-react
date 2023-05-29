import useFilters from '../hooks/useFilters';
import ProductsListRow from './ProductsListRow';

const ProductsList = () => {
  const { productsFiltered } = useFilters();
  return (
    <ul className='cards'>
      <ProductsListRow products={productsFiltered} />
    </ul>
  );
};

export default ProductsList;
