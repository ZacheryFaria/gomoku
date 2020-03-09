import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addSecond } from "../reducer";
import { BoardState } from "../store";

interface Props {
  seconds: Array<number>;
  currentPlayer: number;
  addSecond: (index: number) => void;
}

const Timer: React.FC<Props> = props => {
  useEffect(() => {
    const interval = setInterval(() => {
      props.addSecond(props.currentPlayer);
    }, 1000);
    return () => clearInterval(interval);
  }, [props.currentPlayer]);

  useEffect(() => {
    console.log(props.seconds);
  });

  console.log(props.seconds);
  // TODO: add css
  return <div>{props.seconds[0] + " - " + props.seconds[1]}</div>;
};

const mapStateToProps = (state: BoardState) => {
  return {
    seconds: state.seconds,
    currentPlayer: state.currentPlayer
  };
};

export default connect(mapStateToProps, { addSecond })(Timer);
