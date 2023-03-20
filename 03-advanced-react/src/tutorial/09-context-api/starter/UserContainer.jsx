import React from "react";

function UserContainer({ user, setUser, logout }) {


  return (
    <>
      <div>UserContainer</div>
      {user.name}
    </>
  );
}

export default UserContainer;
