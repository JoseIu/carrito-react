import { useState } from 'react';
import HeaderFilters from './components/HeaderFilters';
import ProductsList from './components/ProductsList';
import Shoop from './components/Shoop';
import { FiltersProvider } from './context/FiltersProvider';
import { ShoopProvider } from './context/ShoopProvider';
import './css/styles.css';

const App = () => {
  const [shoopModal, setShoopModal] = useState(false);
  return (
    <main className='wrapper main'>
      <FiltersProvider>
        <ShoopProvider>
          <button
            className='shoopIcon'
            onClick={() => handleClick(setShoopModal, shoopModal)}
          >
            🛒
          </button>
          <Shoop shoopModal={shoopModal} setShoopModal={setShoopModal} />
          <HeaderFilters />
          <ProductsList />
        </ShoopProvider>
      </FiltersProvider>
    </main>
  );
};
const handleClick = (setShoopModal, shoopModal) => {
  setShoopModal(!shoopModal);
};

export default App;
