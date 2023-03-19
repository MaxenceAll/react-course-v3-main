import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {

const [isLoading, setIsLoadig] = useState(true);

    useEffect(() => {
      setTimeout( ()=> {
        setIsLoadig(false)
      },3000)  

    }, [])
    

  return (
    <>
      {isLoading ? <h2>Loading !</h2> : <h2> Exo 1:</h2>}
    </>
  );
};
export default MultipleReturnsBasics;
