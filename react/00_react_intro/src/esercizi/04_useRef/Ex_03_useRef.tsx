import { useState, useEffect } from 'react';

// Variabili globali condivise tra tutte le istanze
let globalIntervalId: number | null = null;
let globalSeconds = 0;

const Stopwatch_without_useRef = () => {

  const [seconds, setSeconds] = useState(globalSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(globalSeconds);
    }, 100); // Aggiorna il valore visualizzato frequentemente
    return () => clearInterval(interval);
    
  }, []);

  const handleStartClick = () => {
    if (!globalIntervalId) {
      globalIntervalId = window.setInterval(() => {
        globalSeconds += 1;
        setSeconds(globalSeconds); // Aggiorna lo stato locale con il valore globale
      }, 1000);
    }
  };

  const handleStopClick = () => {
    if (globalIntervalId) {
      clearInterval(globalIntervalId);
      globalIntervalId = null;
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

export default Stopwatch_without_useRef;

/*
function renderStopwatches() {
  return (
    <div>
      <h1>Stopwatch 1</h1>
      <Stopwatch_without_useRef />
      <h1>Stopwatch 2</h1>
      <Stopwatch_without_useRef />
    </div>
  );
}

Stopwatch_without_useRef
*/