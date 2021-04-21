import React from "react";
import { connect } from "react-redux";
import { buySandle } from "../redux";

function SandleContainer(props) {
  return (
    <div>
      <h2>number of sandles - {props.numOfSandles}</h2>
      <button onClick={props.buySandle}>buy sandle</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfSandles: state.sandle.numOfSandles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buySandle: () => dispatch(buySandle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SandleContainer);
