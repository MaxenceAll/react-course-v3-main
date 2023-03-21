import React, { useState } from "react";
import NavLinks from "./NavLinks";

function Navbar() {
  const [user, setUser] = useState({ name: "Bobby" });

  function logout() {
    setUser(null);
  }

  return (
    <nav className="navbar">
      <h5>Context API</h5>
      <NavLinks user={user} setUser={setUser} logout={logout} />
    </nav>
  );
}

export default Navbar;
