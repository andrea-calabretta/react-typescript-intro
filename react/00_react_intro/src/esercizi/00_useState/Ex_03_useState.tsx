// Creare un campo di input che dove l'utente può digitare.
// Usa useState per tenere traccia del valore inserito e mostra
// in tempo reale il testo sotto l'input.

import { useState } from "react";

const Ex_03_useState = () => {
  const [text, setText] = useState<string>("");
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <p>Hai digitato {text}</p>
    </>
  );
};

export default Ex_03_useState;
