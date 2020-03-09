import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addSecond } from "../reducer";
import { BoardState } from "../store";

interface Props {
  timePassed: Array<number>;
  currentPlayer: number;
  addSecond: (index: number) => void;
}

const Timer: React.FC<Props> = props => {
  useEffect(() => {
    const interval = setInterval(() => {
      props.addSecond(props.currentPlayer);
    }, 100);
    return () => clearInterval(interval);
  }, [props.currentPlayer]);

  useEffect(() => {
    console.log(props.timePassed);
  });

  console.log(props.timePassed);
  // TODO: add css
  return (
    <div className="Timer">
      {(props.timePassed[0] / 10).toFixed(1) +
        " - " +
        (props.timePassed[1] / 10).toFixed(1)}
    </div>
  );
};

const mapStateToProps = (state: BoardState) => {
  return {
    timePassed: state.timePassed,
    currentPlayer: state.currentPlayer
  };
};

export default connect(mapStateToProps, { addSecond })(Timer);
