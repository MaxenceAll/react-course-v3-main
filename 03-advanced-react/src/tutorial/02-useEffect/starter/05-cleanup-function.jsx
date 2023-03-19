import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h2>cleanup function</h2>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle
      </button>
      {toggle && <RandomComponent />}
    </>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log("hmmm, lol");

    const intID = setInterval(() => {
      console.log("Hello from interval");
    }, 1000);

    return () => {
      clearInterval(intID);
    };
  }, []);

  return <h1>Hello there</h1>;
};

export default CleanupFunction;
