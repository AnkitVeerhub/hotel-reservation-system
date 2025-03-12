import React from "react";
import { FaRandom, FaSyncAlt } from "react-icons/fa";
import "./Controls.css";

const Controls = ({ onRandomize, onReset }) => {
  return (
    <div className="controls-card">
      <h3 className="controls-title">⚙️ Manage Actions</h3>
      <div className="buttons-container">
        <button className="control-btn generate" onClick={onRandomize}>
          <FaRandom className="btn-icon" /> Generate
        </button>
        <button className="control-btn reset" onClick={onReset}>
          <FaSyncAlt className="btn-icon" /> Reset
        </button>
      </div>
    </div>
  );
};

export default Controls;
