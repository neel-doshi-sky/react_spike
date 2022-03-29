import React, { useContext } from "react";
import ThingsContext from "./ThingsContext";

const TodoItem = ({ name }) => {
  return (
    <li>
      {name} {useContext(ThingsContext).toString()}
    </li>
  );
};

export default TodoItem;
