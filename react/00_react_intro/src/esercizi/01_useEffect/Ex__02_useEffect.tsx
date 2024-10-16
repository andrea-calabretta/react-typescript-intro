import React, { useEffect, useState } from 'react'

const Ex__02_useEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contatore: ${count}`;
   
  }, [count]); // useEffect si attiva ogni volta che `count` cambia

  return (
    <div>
      <p>Il contatore è: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementa</button>
    </div>
  );
}

export default Ex__02_useEffect




