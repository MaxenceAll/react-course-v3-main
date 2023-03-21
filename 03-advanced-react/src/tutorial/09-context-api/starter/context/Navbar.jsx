import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

//custom hook:
export const useAppContext = () => useContext(NavbarContext);
function Navbar() {
  const [user, setUser] = useState({ name: "Bobby" });

  function logout() {
    setUser(null);
  }

  return (
    <NavbarContext.Provider value={{ user, setUser, logout }}>
      <nav className="navbar">
        <h5>Context API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
}

export default Navbar;
