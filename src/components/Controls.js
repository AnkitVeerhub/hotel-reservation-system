import React from "react";

const Controls = ({ onRandomize, onReset }) => {
  return (
    <div className="controls">
      <button onClick={onRandomize}>Generate Random Occupancy</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Controls;
