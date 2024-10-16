// Creare un pulsante che cambia stato tra "On" e "Off" 
// ogni volta che viene cliccato.

import { useState } from "react";

const Ex_04_useState = () => {
  const [isOn, setIsOn] = useState<boolean>(false);
  return (
    <>
      <p>L'interruttore è {isOn ? "On" : "Off"}</p>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "Spegni" : "Accendi"}</button>
    </>
  )
}

export default Ex_04_useState
