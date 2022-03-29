import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ isClicked }) => {
  return (
    <ul>
      <TodoItem name={"Task 1"} isClicked={isClicked} />
      <TodoItem name={"Task 2"} isClicked={isClicked} />
    </ul>
  );
};

export default TodoList;
