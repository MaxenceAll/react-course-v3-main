import { useState } from "react";
import { data } from "../../../data.js";

const UseStateArray = () => {
  const [users, setUsers] = useState(data);

  function handleClick(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <>
      <h1>Here :</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleClick(user.id)} className="btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button onClick={()=>setUsers([])} className="btn">Clear all</button>
    </>
  );
};

export default UseStateArray;
