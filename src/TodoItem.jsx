import React, { useContext, useEffect, useState } from "react";
import ThingsContext from "./ThingsContext";

const TodoItem = ({ name }) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(counter + 1);
  }, []);

  return (
    <li>
      {counter}
      {name} {useContext(ThingsContext).toString()}
    </li>
  );
};

export default TodoItem;
