import { useState } from "react";

const ToggleChallenge = () => {

  const [error, setError] = useState(false);

  return (
    <>
      <div>
        <button className="btn" onClick={ ()=> setError(!error) }>
          Click me
        </button>
        {error && <Alert/>}
      </div>
    </>
  );
};

const Alert = ()=> {
  return <div className="alert alert-danger"> ALERTE </div>
}

export default ToggleChallenge;
