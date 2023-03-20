import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("You want to add: ", name);
    // setUsers( (prevData) => {
    //   ...prevData, name:name})
    if (!name) {
      return;
    }
    const fakeId = Date.now();
    const newUser = { id: fakeId, name: name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setName("");
  }

  function removeUser(id) {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>

        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h2> Users</h2>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name}
              <button className="btn" onClick={() => removeUser(user.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default UserChallenge;
