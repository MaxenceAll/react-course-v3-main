import React, { useState } from "react";
import { people } from "../../../data.js";

function List() {
  const [data, setData] = useState(people);

  console.log(data);

  return (
    <>
      <div>List of people</div>
      <ul>
        {data.map( (user) => {
          <li key={user.id}>name{user.name}</li>;
        })}
      </ul>
    </>
  );
}

export default List;
