import React from "react";

const stepCounter = () => {
  return (
    <div className="container">
      <h2> You've walked steps {steps} today!</h2>

      <button className="stepInc"> Add a step</button>
      <button className="resetStep"> Reset steps</button>
    </div>
  );
};

export default stepCounter;
