import  { useEffect, useState } from 'react'
import { User } from '../../model/user';

const Ex_02_useEffect = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const addUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users',
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
        body: JSON.stringify({name: `user ${Math.random()}`}),
      }
    )
      .then(response => response.json())
      .then(data => setUsers(users => [...users, data]));
      console.log("load data");
  };
  return (
    <>
      <ul>
        {users.map(user =>
          <li key={user.id}>{user.id} - {user.name}</li>
        )}
      </ul>
        <button onClick={addUser}>Add</button>
    </>
  )
}

export default Ex_02_useEffect
