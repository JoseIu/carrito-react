import { createContext, useState } from 'react';
import { products as initialProducts } from '../mocks/products.json';

export const FilterContext = createContext();

export const FiltersProvider = ({ children }) => {
  const [products, setProduct] = useState(initialProducts);
  const { category, setCategory, price, setPrice } = useFilters();

  const filterProducts = products => {
    return products.filter(
      product =>
        product.price >= price &&
        (category === 'all' || product.category === category)
    );
  };
  const productsFiltered = filterProducts(products);
  return (
    <FilterContext.Provider
      value={{
        productsFiltered,
        setProduct,
        category,
        setCategory,
        price,
        setPrice
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilters = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    price: 0
  });
  const setCategory = category => {
    setFilters({
      ...filters,
      category
    });
  };

  const setPrice = price => {
    setFilters({ ...filters, price });
  };

  return {
    ...filters,
    setCategory,
    setPrice
  };
};
