import { useState } from "react";

// Componente genitore
const ParentComponent = () => {
  const [data, setData] = useState<string>("");

  const handleDataFromChild = (childData: string) => {
    setData(childData); // Imposta i dati ricevuti dal figlio
  };

  return (
    <div>
      <h1>Data from Child: {data}</h1>
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
};
// Componente figlio
interface IChildComponent {
  sendDataToParent: (data: string) => void;
}

const ChildComponent = ({ sendDataToParent }: IChildComponent) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Aggiorna lo stato dell'input
  };

  const handleClick = () => {
    sendDataToParent(inputValue); // Invia il valore dell'input al genitore
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text to send to parent"
      />
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
};

export default ParentComponent;