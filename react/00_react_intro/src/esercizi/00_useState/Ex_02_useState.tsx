// Aggiungere 2 pulsanti, uno per incrementare e uno per 
// decrementare il contatore 

import { useState } from "react";

const Ex_02_useState = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);


  return (
    <>
      <p>Il numero attuale del contatore è {count} </p>
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
    </>
  )
}

export default Ex_02_useState
