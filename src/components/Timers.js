import React, {  useState } from "react";
import "./Timers.css";
import ProdClock from "./ProdClock";

const Timers = () => {
  const [prodClockList, setProductivityClockList] = useState([]);
  const [count, setCount] = useState(1);

  const addHandler = () => {
    const newElement = {
      id: `id#${count}`,
    };
    setProductivityClockList((prev) => [...prev, newElement]);
    setCount((count) => count + 1);
  };

  const prodClockDeleteHandler = (id) => {
    setProductivityClockList((prev) =>
      prev.filter((element) => element.id !== id)
    );
  };

  return (
    <div className="timers-container">
      {prodClockList.map((prodClockElement) => (
        <ProdClock
          key={prodClockElement.id}
          id={prodClockElement.id}
          prodClockDeleteHandler={prodClockDeleteHandler}
        />
      ))}
      <button className="add-btn" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default Timers;
