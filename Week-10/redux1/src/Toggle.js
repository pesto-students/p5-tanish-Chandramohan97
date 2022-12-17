import React from "react";
import "./Toggle.css";

const Toggle = () => {
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
