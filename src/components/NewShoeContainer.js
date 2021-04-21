import { useState } from "react";
import { connect } from "react-redux";
import { buyShoe } from "../redux";

function NewShoeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>number of shoes - {props.numOfShoes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyShoe(number)}>buy {number} shoes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfShoes: state.shoe.numOfShoes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyShoe: (number) => dispatch(buyShoe(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewShoeContainer);
