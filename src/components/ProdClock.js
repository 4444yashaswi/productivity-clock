import React, { useState } from "react";
import "./ProdClock.css";
import deleteIcon from "../delete-button-svgrepo-com.svg";
import Clock from "./Clock";

const ProdClock = ({ id, prodClockDeleteHandler }) => {
  const [title, setTitle] = useState("Untitled");
  const [isStart, setIsStart] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const startHandler = () => {
    setIsReset(false);
    setIsStart((prev) => !prev);
  };

  const titleUpdateHandler = (event) => {
    setTitle(event.target.value);
  };

  const deleteHandler = () => {
    prodClockDeleteHandler(id);
  };

  const resetHandler = () => {
    setIsStart(false);
    setIsReset(true);
  };

  return (
    <div className="clock-tile">
      <input
        value={title}
        onChange={titleUpdateHandler}
        className="clock-title"
      />
      <div className="clock-container">
        <div className="clock-timer">
          <Clock isStart={isStart} isReset={isReset} />
        </div>
        <button className="clock-delete-btn" onClick={deleteHandler}>
          <img src={deleteIcon} alt="Delete" className="clock-delete-icon" />
        </button>
      </div>
      <div className="clock-controls">
        <button className="start-reset--btn" onClick={startHandler}>
          {isStart ? "Stop" : "Start"}
        </button>
        <button className="start-reset--btn" onClick={resetHandler}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProdClock;
