import React from "react";
import { BoardState } from "../store";
import { connect } from "react-redux";
import { resetBoard, setPlayers } from "../reducer";

interface Props {
  resetBoard: () => void;
  setPlayers: (p1: boolean, p2: boolean) => void;
}

const Settings: React.FC<Props> = props => {
  return (
    <div className="SettingsContainer">
      <button onClick={() => props.resetBoard()}>Reset</button>
      <button
        onClick={() => {
          props.setPlayers(true, false);
          props.resetBoard();
        }}
      >
        Play against AI // TODO: make this into two dropdown menus
      </button>
    </div>
  );
};

const mapStateToProps = (state: BoardState) => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    resetBoard: resetBoard,
    setPlayers: setPlayers
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
