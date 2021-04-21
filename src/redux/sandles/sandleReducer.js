import { BUY_SANDLE } from "./sandleTypes";

const initialState = {
  numOfSandles: 20,
};

const sandleReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SANDLE:
      return {
        ...state,
        numOfSandles: state.numOfSandles - 1,
      };
    default:
      return state;
  }
};

export default sandleReducer;
