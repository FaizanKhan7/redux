import { BUY_SHOES } from "./shoeTypes";

const initialState = {
  numOfShoes: 10,
};

const shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SHOES:
      return {
        ...state,
        numOfShoes: state.numOfShoes - action.payload,
      };
    default:
      return state;
  }
};

export default shoeReducer;
