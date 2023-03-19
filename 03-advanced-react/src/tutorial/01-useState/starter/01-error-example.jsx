import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Result :</h1>
      {count}

      <button className="btn"  onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button className="btn"  onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button className="btn"  onClick={() => setCount(0)}>0</button>

    </>
  );
};

export default ErrorExample;
