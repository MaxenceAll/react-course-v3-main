import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setUser({ ...user , [e.target.name] : e.target.value })
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(user)
  }

  return (
    <div>
      <form className="form" onSubmit={(e)=>handleSubmit(e)}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={user.name}
            onChange={handleChange}
            name="name"
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={user.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        {/* password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            value={user.password}
            onChange={handleChange}
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      {/* Data :
      {user.name}
      {user.email}
      {user.password} */}
      
    </div>
  );
};
export default MultipleInputs;
