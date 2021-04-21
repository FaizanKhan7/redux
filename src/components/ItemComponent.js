import React from "react";
import { connect } from "react-redux";
import { buySandle, buyShoe } from "../redux";

function ItemComponent(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buytItem}>Buy Item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.shoe
    ? state.shoe.numOfShoes
    : state.sandle.numOfSandles;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.shoe
    ? () => dispatch(buyShoe())
    : () => dispatch(buySandle());

  return {
    buytItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemComponent);
