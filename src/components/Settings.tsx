import React from "react";
import { BoardState } from "../store";
import { connect } from "react-redux";
import { resetBoard } from "../reducer";

interface Props {
  resetBoard: () => void;
}

const Settings: React.FC<Props> = props => {
  return (
    <div className="SettingsContainer">
      <button onClick={() => props.resetBoard()}>Reset</button>
    </div>
  );
};

const mapStateToProps = (state: BoardState) => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    resetBoard: resetBoard
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
