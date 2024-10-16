import React, { useEffect, useState } from 'react'

const Ex__03_useEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // Aggiorna il contatore ogni secondo

    // Funzione di cleanup per rimuovere l'intervallo quando il componente viene smontato
    return () => clearInterval(interval);
  }, []); // L'array vuoto fa eseguire l'effetto solo una volta al montaggio

  return (
    <div>
      <p>Contatore: {count}</p>
    </div>
  );
}

export default Ex__03_useEffect


