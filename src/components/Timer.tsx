import React, { useState, useEffect } from "react";

const Timer: React.FC<{}> = () => {
  const [seconds, setSeconds] = useState([0,0]);

  const [player, setPlayer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(([a,b]) => {
        if (player === 0) {
          return ([a+1, b]);
        } else {
          return ([a, b+1]);
        }
      })
    }, 1000);
    return () => clearInterval(interval);
  }, [player]);

  // TODO: add css
  return (
    <div>
      {seconds[0] + " - " + seconds[1]}
    </div>
  );
};

export default Timer
