import { useEffect, useState } from "react";

// const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const users = await resp.json();
        console.log(users);
        setUsers(users);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Github users here :</h1>
      <ul className="users">
        {users.map((user) => {
          return (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <p>{user.login}</p>
              <a href={user.repos_url}>Profile</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default FetchData;
