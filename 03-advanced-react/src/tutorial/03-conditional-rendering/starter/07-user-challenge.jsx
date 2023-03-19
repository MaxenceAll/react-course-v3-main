import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  function login() {
    setUser({ name: "bobby" });
  }
  function logout() {
    setUser(null);
  }

  return (
    <>
      {user ? (
        <>
          <h3>Hello {user.name}</h3>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h3>Please login !</h3>
          <button className="btn" onClick={login}>
            Login
          </button>
        </>
      )}
    </>
  );
};

export default UserChallenge;
