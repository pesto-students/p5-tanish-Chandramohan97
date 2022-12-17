import React from "react";
import "./stepCounter.css";
import stepReducer from "./redux/stepReducer";
import { increaseStep, resetStep } from "./redux/action";
import { useSelector, useDispatch } from "react-redux";

const StepCounter = () => {
  const steps = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2> You've walked {steps} steps today!</h2>

      <button className="stepInc" onClick={() => dispatch(increaseStep())}>
        {" "}
        Add a step
      </button>
      <button className="resetStep" onClick={() => dispatch(resetStep())}>
        {" "}
        Reset steps
      </button>
    </div>
  );
};

export default StepCounter;
