import  { useEffect, useState } from 'react'
import { User } from '../../model/user';
import axios from 'axios';

const Ex_03_useEffect_axios = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {

    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data));
  }, []);
  const addUser = () => {
    axios.post<User>('https://jsonplaceholder.typicode.com/users',
      {name: `user ${Math.random()}` })
      .then(res => setUsers(users => [...users, res.data]));
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

export default Ex_03_useEffect_axios
