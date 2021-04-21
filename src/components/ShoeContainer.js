import React from "react";
import { connect } from "react-redux";
import { buyShoe } from "../redux";

function ShoeContainer(props) {
  return (
    <div>
      <h2>number of shoes - {props.numOfShoes}</h2>
      <button onClick={props.buyShoe}>buy shoes</button>
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
    buyShoe: () => dispatch(buyShoe()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoeContainer);
