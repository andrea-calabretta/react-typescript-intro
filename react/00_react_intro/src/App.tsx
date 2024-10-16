/*import { useState } from "react";

const initialState = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Jack' },
  { id: 4, name: 'Jill' }
];

const App = () => {
  const [users, setUsers] = useState(initialState);
  const [userName, setUserName] = useState(""); // Stato per l'input del nome utente

  const addUser = () => {
    if (userName.trim()) { // Controlla che il nome non sia vuoto
      const newUser = {
        id: Date.now(),
        name: userName
      };
      setUsers([...users, newUser]);
      setUserName(""); // Reset dell'input
    }
  };

  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)} // Gestisce l'input del nome
        placeholder="Enter user name"
      />
      <button onClick={addUser}>Add</button>
    </>
  );
};

export default App;

*/

import { useState } from "react";


const initialState = [
  { id: 1, name: 'John'},
  { id: 2, name: 'Jane'},
  { id: 3, name: 'Jack'},
  { id: 4, name: 'Jill'}
]

const App = () => {

  const [users, setUsers] = useState(initialState);
  const [userName, setUserName] = useState<string>("");

  const addUser = () => {
    if(userName.trim()) {
    const newUser = {
      id: Date.now(),
      name: userName  
    };
    setUsers([...users, newUser]);
    console.log(users);
    setUserName("");
  }
}
  return (
    <>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
      <input 
        type="text" 
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter user name"
      />
      <button onClick={addUser}>Add</button>
    </>
  )
}


export default App




/*
import { Total } from './components/Total';
import { Empty } from './components/Empty';
import { useState } from 'react';

const App = () => {
  const [totalProducts, setTotalProducts] = useState(0);

  const inc = () => {
    setTotalProducts(prev => prev + 1);
    console.log(totalProducts);
  }
  
  console.log('render App', totalProducts);
  
  return (
    <>
      {totalProducts > 0 
          ? <Total value={totalProducts}/>
          : <Empty/>
      }

      <button onClick={inc}> Add</button>

    </>
  )
}

export default App
*/




/*

import { useState } from "react";
import { Empty } from "./components/Empty";
import { Total } from "./components/Total";

const App = () => {
  const [totalProducts, setTotalProducts] = useState(10);
  
  const inc = () => 
  {
    setTotalProducts(prev => prev + 1);
    console.log(totalProducts);
  }

  console.log('render App', totalProducts);
  
  return (
    <>
      {
        totalProducts > 0 
          ? <Total value={totalProducts}/>
          : <Empty/>
      }

      <button onClick={inc}>Add</button>
    </>
  );
};

export default App;

*/




