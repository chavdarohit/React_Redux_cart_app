const INIT_STATE = {
  carts: []
};
export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp]
        };
      }
    case "REMOVE_CART":
      return {
        ...state,
        carts: [...state.carts.filter((e) => e.id !== action.payload)]
      };
    case "REMOVE_INDIVIDUAL":
      const itemIndexToRemove = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndexToRemove].qnty >= 1) {
        const delItem = (state.carts[itemIndexToRemove].qnty -= 1);
        console.log(...state.carts, delItem);
        return {
          ...state,
          carts: [...state.carts]
        };
      } else if (state.carts[itemIndexToRemove].qnty === 1) {
        return {
          ...state,
          carts: [...state.carts.filter((e) => e.id !== action.payload.id)]
        };
      }
    default:
      return state;
  }
};
