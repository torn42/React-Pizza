import { ICartItem } from '../redux/cart/types';

const CalcTotalPrice = (items: ICartItem[]) => {
  return items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};

export default CalcTotalPrice;