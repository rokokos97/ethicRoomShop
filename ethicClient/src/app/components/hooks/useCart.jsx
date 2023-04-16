import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {getCart} from '../../store/cart';

const useCart = () => {
  const cart = useSelector(getCart());
  const [isCartFill, setIsCartFill] = useState(null);
  useEffect(() => {
    setIsCartFill(cart.length);
  }, [cart]);
  return isCartFill;
};
export default useCart;
