import { useEffect, useState } from "react";

export const useFetchToDos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, []);

  return todos;
};
