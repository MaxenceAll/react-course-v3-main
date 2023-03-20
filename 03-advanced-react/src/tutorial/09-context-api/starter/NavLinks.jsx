import React from "react";
import UserContainer from "./UserContainer";

function NavLinks({ user, setUser, logout }) {
  return (
    <>
      <div>
        <button>Home</button>
        <button>About</button>
      </div>
      <UserContainer user={user} setUser={setUser} logout={logout} />

    </>
  );
}

export default NavLinks;
