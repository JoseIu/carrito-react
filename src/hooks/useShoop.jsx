import { useContext } from 'react';
import { ShoopContext } from '../context/ShoopProvider';

const useShoop = () => {
  return useContext(ShoopContext);
};

export default useShoop;
