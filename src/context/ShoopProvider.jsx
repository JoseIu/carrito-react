import { createContext, useState } from 'react';

export const ShoopContext = createContext();

export const ShoopProvider = ({ children }) => {
  const [shoops, setShoops] = useState([]);
  console.log(shoops);

  const addShop = product => {
    const existeProduct = shoops.findIndex(shoop => shoop.id === product.id);
    console.log(existeProduct);

    if (existeProduct >= 0) {
      const newSoops = structuredClone(shoops);
      newSoops[existeProduct].quantity += 1;
      newSoops[existeProduct].totalPrice += newSoops[existeProduct].price;
      return setShoops(newSoops);
    }

    setShoops(prevShoops => [
      ...prevShoops,
      { ...product, quantity: 1, totalPrice: product.price }
    ]);
  };

  return (
    <ShoopContext.Provider value={{ addShop, shoops }}>
      {children}
    </ShoopContext.Provider>
  );
};
