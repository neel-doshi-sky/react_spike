import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <ul>
      <TodoItem name={"Task 1"} />
      <TodoItem name={"Task 2"} />
    </ul>
  );
};

export default TodoList;
