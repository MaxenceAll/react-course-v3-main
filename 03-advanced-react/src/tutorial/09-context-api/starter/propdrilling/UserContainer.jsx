import React from "react";

function UserContainer({ user, setUser, logout }) {
  return (
    <>
      <div className="user-container">
      { user ?
        <p>Hello there, {user?.name?.toUpperCase()} <button onClick={logout} className="btn">Logout</button></p>
        :
        <p>Please login</p>
      }
      </div>
    </>
  );
}

export default UserContainer;
