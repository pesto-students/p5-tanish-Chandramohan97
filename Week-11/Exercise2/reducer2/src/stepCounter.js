import React from "react";

const StepCounter = () => {
  return (
    <>
      <div className="container">You've walked steps today</div>

      <div className="buttons">
        <button className="btn1"> Add a Step </button>
        <button className="btn2"> Reset Steps</button>
      </div>
    </>
  );
};

export default StepCounter;
