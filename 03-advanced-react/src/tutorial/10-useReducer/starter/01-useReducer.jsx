import React, { useReducer } from "react";
import { data } from "../../../data";

import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";
import reducer from "./reducer";

const defaultState = {
  people: data,
  isLoading: false,
};


const ReducerBasics = () => {
  console.log("render");

  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    dispatch({ type: REMOVE_ITEM, payload: { id: id } });
  };
  function resetList() {
    // setPeople(data);
    dispatch({ type: RESET_LIST });
  }
  function clearList() {
    // setPeople([]);
    dispatch({ type: CLEAR_LIST });
  }

  return (
    <div>
      {state?.people?.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length !== 0 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      ) : (
        <button className="btn" onClick={() => resetList()}>
          reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
