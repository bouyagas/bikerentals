import {
  ADD_TO_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
} from '../actions/actionTypes/cart-action';
import bikes from '../../bikerentals.json';

const initState = {
  bikes: bikes,
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let addedItem = state.bikes.products.find(bike => bike.id === action.id);
      let existed_item = state.addedItems.find(bike => action.id === bike.id);
      if (existed_item) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
        };
      } else {
        addedItem.quantity = 1;
        let newTotal = state.total + addedItem.price;

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        };
      }

    case ADD_QUANTITY:
      let addedQuan = state.bikes.products.find(item => item.id === action.id);
      addedQuan.quantity += 1;
      let newTotal = state.total + addedQuan.price;
      return {
        ...state,
        total: newTotal,
      };

    case SUB_QUANTITY:
      let subQuan = state.bikes.products.find(item => item.id === action.id);

      if (subQuan.quantity === 1) {
        let new_items = state.addedItems.filter(item => item.id !== action.id);
        let newTotal = state.total - subQuan.price;
        return {
          ...state,
          addedItems: new_items,
          total: newTotal,
        };
      } else {
        subQuan.quantity -= 1;
        let newTotal = state.total - subQuan.price;
        return {
          ...state,
          total: newTotal,
        };
      }
    default:
      return state;
  }
};

export default cartReducer;
