import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState('peter');
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("read books");

  const [user, setUsers] = useState({
    name: "peter",
    age: 24,
    hobby: "read books"
  })

  const displayPerson = ()=>{

    setUsers({
      name: "John",
      age: 12,
      hobby: "scream at screen"
    })
    // setUsers('ahah')*
    setUsers({
      ...user,
      name: "toto",
    })
  }

  return (<>

  <h1> {user.name }</h1>
  <h1> {user.age }</h1>
  <h1> {user.hobby }</h1>
  

  <button
  onClick={displayPerson}
  className="btn
  ">
Go
  </button>
  
  </>);
};

export default UseStateObject;
