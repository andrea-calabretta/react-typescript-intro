import { useEffect, useState } from "react";


const Ex_01_useEffect = () => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [users, setUsers] = useState<any[]>([]);
 
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
      console.log("load data");
  }, []);
  const addUser = () => {

    const newUser = {
      id: Date.now(),
      name: `user ${Math.random()}`  
    };
    setUsers([...users, newUser]);
    console.log(users);

  
}
  return (
    <>
      <ul>
        {users.map(user =>
          <li key={user.id}>{user.name}</li>
        )}
      </ul>
        <button onClick={addUser}>Add</button>
    </>
  )
}

export default Ex_01_useEffect
