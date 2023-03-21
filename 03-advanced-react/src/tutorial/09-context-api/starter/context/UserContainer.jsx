import { useAppContext } from "./Navbar";

function UserContainer() {
  // const {user, setUser , logout} = useContext(NavbarContext)
  const { user, setUser, logout } = useAppContext();
  // return 'helloworld'
  return (
    <>
      <div className="user-container">
        {user ? (
          <p>
            Hello there, {user?.name?.toUpperCase()}{" "}
            <button onClick={logout} className="btn">
              Logout
            </button>
          </p>
        ) : (
          <p>Please login</p>
        )}
      </div>
    </>
  );
}

export default UserContainer;
