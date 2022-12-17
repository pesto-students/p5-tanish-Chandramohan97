import React from "react";
import "./Toggle.css";
import { useSelector, useDispatch } from "react-redux";
import { lightOn, lightOff } from "./redux/action";

const Toggle = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className={state ? "lit" : "dark"}>
      <h2> the room is {state ? "lit" : "dark"}</h2>
      <button
        onClick={() => (state ? dispatch(lightOff()) : dispatch(lightOn()))}
      >
        {" "}
        flip
      </button>
    </div>
  );
};

export default Toggle;
