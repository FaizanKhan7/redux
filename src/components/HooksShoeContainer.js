import { useSelector, useDispatch } from "react-redux";
import { buyShoe } from "../redux";

function HooksShoeContainer() {
  const numOfShoes = useSelector((state) => state.shoe.numOfShoes);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>with hooks</h3>
      <h2>Number of shoes - {numOfShoes}</h2>
      <button onClick={() => dispatch(buyShoe())}>buy shoes</button>
    </div>
  );
}

export default HooksShoeContainer;
