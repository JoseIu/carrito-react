import useShoop from '../hooks/useShoop';

const ProductsListRow = ({ products }) => {
  if (!products.length) return <p>No se encontron productos</p>;

  const { addShop } = useShoop();
  return products.map(product => (
    <li className='card' key={product.id}>
      <img className='card-img' src={product.thumbnail} alt={product.title} />
      <div className='card-content'>
        <h2 className='card-title'>
          {product.title}-{product.price}$
        </h2>

        <button className='card-add' onClick={() => addShop(product)}>
          🛒
        </button>
      </div>
    </li>
  ));
};
export default ProductsListRow;
