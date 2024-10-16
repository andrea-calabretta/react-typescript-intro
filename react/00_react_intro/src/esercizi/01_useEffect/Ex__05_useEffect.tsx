import React, { useEffect, useState } from 'react'

const Ex__05_useEffect = () => {
  const [stateA, setStateA] = useState(0);
  const [stateB, setStateB] = useState(0);

  useEffect(() => {
    console.log(`StateA è cambiato: ${stateA}`);
    document.title = `StateA: ${stateA}`;
  }, [stateA]); // L'effetto si esegue solo quando `stateA` cambia

  return (
    <div>
      <p>StateA: {stateA}</p>
      <button onClick={() => setStateA(stateA + 1)}>Incrementa StateA</button>

      <p>StateB: {stateB}</p>
      <button onClick={() => setStateB(stateB + 1)}>Incrementa StateB</button>
    </div>
  );
}

export default Ex__05_useEffect




