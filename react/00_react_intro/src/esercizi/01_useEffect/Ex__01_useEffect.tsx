import { useEffect } from 'react'

const Ex__01_useEffect = () => {
  useEffect(() => {
    console.log("Componente montato");

    // Se volessi pulire qualche risorsa al momento dello smontaggio, potresti restituire una funzione qui.
    return () => {
      console.log("Componente smontato");
    };
  }, []); // Il secondo parametro di array vuoto indica che l'effetto viene eseguito solo alla prima renderizzazione (montaggio).

  return <div>Questo è il mio componente</div>;
};


export default Ex__01_useEffect
