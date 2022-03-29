import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList }) => {
  return (
    <ul>
      <TodoItem name={"Task 1"} />
      <TodoItem name={"Task 2"} />
      {todoList.map((value, key) => {
        return <TodoItem key={key} name={value} />;
      })}
    </ul>
  );
};

export default TodoList;
