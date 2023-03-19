import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  function handleClickPlus() {

    setTimeout( ()=> {
      setCount( (prevCount) => {
        return (prevCount + 1)
      })
    },3000)
  }


  return (
    <>
      <h1>Result :</h1>
      {count}

      <button className="btn" onClick={handleClickPlus}>
        +
      </button>

    </>
  );
};

export default UseStateGotcha;
