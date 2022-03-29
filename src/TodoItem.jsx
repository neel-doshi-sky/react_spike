import React from "react";

const TodoItem = ({ name, isClicked }) => {
  return (
    <li>
      {name}
      {isClicked.toString()}
    </li>
  );
};

export default TodoItem;
