import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addSecond } from "../reducer";

interface Props {
  seconds: Array<number>;
  currentPlayer: number;
  addSecond: (index: number) => void;
}

const Timer: React.FC<Props> = props => {
  useEffect(() => {
    const interval = setInterval(() => {
      //props.addSecond(props.currentPlayer);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // TODO: add css
  return <div>{props.seconds[0] + " - " + props.seconds[1]}</div>;
};

const mapStateToProps = state => {
  return {
    seconds: state.seconds,
    currentPlayer: state.currentPlayer
  };
};

export default connect(mapStateToProps, { addSecond })(Timer);
