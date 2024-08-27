export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item
  };
};

//remove items
export const REMOVE = (id) => {
  return {
    type: "REMOVE_CART",
    payload: id
  };
};

//decrement individual item
export const REMOVE_INDIVIDUAL = (item) => {
  return {
    type: "REMOVE_INDIVIDUAL",
    payload: item
  };
};
