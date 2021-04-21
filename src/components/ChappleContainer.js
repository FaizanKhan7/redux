import { useSelector, useDispatch } from "react-redux";
import { buyChapple } from "../redux";

function ChappleContainer() {
  const numOfChapples = useSelector((state) => state.chapple.numOfChapples);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Numer of chapples - {numOfChapples}</h1>
      <button onClick={() => dispatch(buyChapple())}>Buy Chapples</button>
    </div>
  );
}

export default ChappleContainer;
