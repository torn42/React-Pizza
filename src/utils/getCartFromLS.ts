import calcTotalPrice from './calcTotalPrice';
import { ICartItem } from '../redux/cart/types';

const GetCartFromLs = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items: items as ICartItem[],
    totalPrice,
  };
};

export default GetCartFromLs;