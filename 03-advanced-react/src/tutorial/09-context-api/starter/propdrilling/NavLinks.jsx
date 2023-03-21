import React from "react";
import UserContainer from "./UserContainer";

function NavLinks({ user, setUser, logout }) {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <UserContainer user={user} setUser={setUser} logout={logout} />

    </div>
  );
}

export default NavLinks;
