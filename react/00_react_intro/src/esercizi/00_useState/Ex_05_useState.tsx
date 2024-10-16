// Creare una lista dinamica dove l'utente può aggiornare
// gli elementi di input

import { useState } from "react";

const Ex_05_useState = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter new item"
        
      />

      <button onClick={addItem}>Aggiungi</button>
    </>
  );
};

export default Ex_05_useState;
