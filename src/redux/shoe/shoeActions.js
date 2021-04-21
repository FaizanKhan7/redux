import { BUY_SHOES } from "./shoeTypes";

export const buyShoe = (number = 1) => {
  return {
    type: BUY_SHOES,
    payload: number,
  };
};
