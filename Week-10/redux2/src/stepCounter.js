import React from "react";
import "./stepCounter.css";

const StepCounter = () => {
  return (
    <div className="container">
      <h2> You've walked today!</h2>

      <button className="stepInc"> Add a step</button>
      <button className="resetStep"> Reset steps</button>
    </div>
  );
};

export default StepCounter;
