import { BUY_CHAPPLE } from "./chappleTypes";

const initialState = {
  numOfChapples: 15,
};

const chappleReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CHAPPLE:
      return {
        ...state,
        numOfChapples: state.numOfChapples - 1,
      };
    default:
      return state;
  }
};

export default chappleReducer;
