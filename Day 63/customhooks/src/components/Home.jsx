import React from "react";
import { useFetchToDos } from "../hooks/useFetchToDos";

export const Home = () => {
  const todos = useFetchToDos();

  return (
    <p>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </p>
  );
};
