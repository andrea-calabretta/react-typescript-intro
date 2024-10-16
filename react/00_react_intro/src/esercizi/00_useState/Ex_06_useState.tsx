// Crea un form che accetta nome e cognome e visualizza i
// dati insieme

import { useState } from "react";

const Ex_06_useState = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter first name"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter last name"
      />

      <p>Nome completo: {firstName} {lastName}</p>
    </>
  );
};

export default Ex_06_useState;
