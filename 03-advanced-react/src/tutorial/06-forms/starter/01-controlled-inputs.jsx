import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // function handleChange(e) {
  //   // console.log(e.target.name);
  //   // console.log(e.target.value);
  //   setName(e.target.value)
  // }

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <form className="form">
      <h4>Controlled inputs</h4>

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        ></input>
      </div>

      <div className="form-row">
        <label htmlFor="email" className="form-label">
          E-mail
        </label>
        <input
          type="text"
          id="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>

      <button type="submit" className="btn btn-block" onSubmit={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
export default ControlledInputs;
