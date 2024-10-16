// Creare un contatore che incrementa di 1 ogni volta che 
// clicchiamo sul pulsante

import { useState } from "react";

const Ex_01_useState = () => {

  const [count, setCount] = useState(0);
  return (
    <>
      <p>Hai cliccato {count} volte</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}

export default Ex_01_useState;
