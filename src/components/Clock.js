import React, { useEffect, useState } from "react";

const Clock = ({ isStart, isReset }) => {
  const [timer, setTimer] = useState(35990);

  // Side Effects
  useEffect(() => {
    let interval = null;
    if (isStart) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [isStart]);

  useEffect(() => {
    if (isReset) setTimer(0);
  }, [isReset]);

  return (
    <div>
      {(timer / (60 * 60)) % 60 < 10
        ? `0${new String((timer / (60 * 60)) % 60).slice(0, 1)}`
        : new String((timer / (60 * 60)) % 60).slice(0, 2)}
      :
      {(timer / 60) % 60 < 10
        ? `0${new String((timer / 60) % 60).slice(0, 1)}`
        : new String((timer / 60) % 60).slice(0, 2)}
      :{timer % 60 > 9 ? timer % 60 : `0${timer % 60}`}
    </div>
  );
};

export default Clock;
