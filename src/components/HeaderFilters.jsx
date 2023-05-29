import useFilters from '../hooks/useFilters';

const HeaderFilters = () => {
  const { setCategory, price, setPrice } = useFilters();
  return (
    <div className='Header-filter'>
      <div className='Header-price'>
        <label htmlFor='price'>Precio</label>
        <input
          type='range'
          name='price'
          min={'0'}
          max={'2000'}
          onChange={e => setPrice(e.target.value)}
        />
        <span>{price}</span>
      </div>
      <div className='Header-category'>
        <label htmlFor='category'>Categoía</label>
        <select
          className='Header-select'
          id='category'
          onChange={e => setCategory(e.target.value)}
        >
          <option className='Header-option' value='all'>
            Todo
          </option>
          <option className='Header-option' value='laptops'>
            Portatiles
          </option>
          <option className='Header-option' value='smartphones'>
            Móviles
          </option>
        </select>
      </div>
    </div>
  );
};

export default HeaderFilters;
