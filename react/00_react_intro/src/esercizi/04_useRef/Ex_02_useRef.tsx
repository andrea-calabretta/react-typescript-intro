import { useRef, useState } from 'react';

const Stopwatch_with_useRef = () => {
  const intervalRef = useRef<number | null>(null); // ref per memorizzare l'ID dell'intervallo
  const [seconds, setSeconds] = useState(0);

  const handleStartClick = () => {
    if (!intervalRef.current) {
      intervalRef.current = window.setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
  };

  const handleStopClick = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handleStopClick}>Stop</button>
    </div>
  );
};

export default Stopwatch_with_useRef;

/*
function renderStopwatches() {
  return (
    <div>
      <h1>Stopwatch 1</h1>
      <Stopwatch_with_useRef />
      <h1>Stopwatch 2</h1>
      <Stopwatch_with_useRef />
    </div>
  );
}

*/
